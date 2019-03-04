import React, { Component } from 'react';
import * as d3 from 'd3';

const width = 375;
const height = 400;
const margin = {top: 20, left: 20, bottom: 50, right: 12};

class LineChart extends Component {
  state = { line: ""}
  
  xAxis = d3.axisBottom().ticks(5).tickFormat(d3.timeFormat("%a %d"));
  yAxis = d3.axisLeft().ticks(7, "d");

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if(!data) return {};

    const extent = d3.extent(data, d => d.date);
    const xScale = d3
      .scaleTime()
      .domain(extent)
      .range([margin.left, width - margin.right])

    const max = d3.max(data, d => d.high);
    const min = d3.min(data, d => d.low);

    const yScale = d3
      .scaleLinear()
      .domain([min, max])
      .range([height - margin.bottom, margin.top]);
    
    const lineGenerator = d3.line().x(d => xScale(d.date))
    const line = 
      {
        fill: "red",
        path: lineGenerator.y(d => yScale(d.temp))(data)
      }
    return {line, xScale, yScale}
  }

  
  componentDidUpdate() {
    if(this.props.data) {
      this.xAxis.scale(this.state.xScale);
      d3.select(this.refs.xAxis).call(this.xAxis).style("font-size", "24px");
      this.yAxis.scale(this.state.yScale);
      d3.select(this.refs.yAxis).call(this.yAxis).style("font-size", "24px");
    }
  }

  render() {
    return (
      <svg width={width} height={height}>

        <path d={this.state.line.path} stroke={this.state.line.fill} fill='none' />
        <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} />
        <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
      </svg>
    )
  }
}

export default LineChart

