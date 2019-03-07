import React, { Component } from 'react';
import * as d3 from 'd3';

const width = 130;
const height = 90;

class GaugeChart extends Component {
  state = {
    background: {},
    foreground: {},
    arcGenerator: null,
    field: 0 // array of svg path commands, each representing a day
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if (!data) return {};

    

    const arcGenerator = d3
      .arc()
      .innerRadius(50)
      .outerRadius(65)
      .startAngle((Math.PI / 2) * -1);

    const background = {
      path: arcGenerator({
        endAngle: Math.PI / 2
      }),
      fill: 'silver'
    };

    const foreground = {
      path: arcGenerator({
        endAngle: (Math.PI / 2) * -1
      }),
      fill: nextProps.fill
    };
    const field = d3.mean(data, d => d[nextProps.field]);
    return { background, foreground, arcGenerator, field };
  }

  arcGenerator2 = d3
    .arc()
    .innerRadius(50)
    .outerRadius(65)
    .startAngle((Math.PI / 2) * -1);

  arcTween = newAngle => {
    return d => {
      var interpolate = d3.interpolate(d.endAngle, newAngle);
      return t => {
        d.endAngle = interpolate(t);
        return this.arcGenerator2(d);
      };
    };
  };

  componentDidUpdate() {
    if (this.state.arcGenerator && this.state.field>= 0) {
      const finalAngle =  (-(Math.PI / 2)) +  this.state.field * (Math.PI / 100) 
      const id = `#${this.props.field}`;
      d3.selectAll(id)
        .datum({ endAngle: (Math.PI / 2) * -1 })
        .transition()
        .duration(2000)
        .attrTween('d', this.arcTween(finalAngle));
    }
  }
  render() {
    return (
      <svg width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height - 20})`}>
          <path
            d={this.state.background.path}
            fill={this.state.background.fill}
          />
          <path
            d={this.state.foreground.path}
            fill={this.state.foreground.fill}
            id={this.props.field}
          />
          <text y={-3} textAnchor="middle" style={{fontSize: "24px"}}>
            {Math.round(this.state.field) || 0}%
          </text>
          <text y={17} textAnchor="middle" style={{fontSize: "16px"}}>
            Avg. {this.props.field || ""} %
          </text>
        </g>
      </svg>
    );
  }
}

export default GaugeChart;
