import React, { Component } from 'react';
import * as d3 from 'd3';


const width = 375;
const height = 300;
const margin = {top: 20, left: 40, bottom: 40, right: 12};

class PressureLineChart extends Component {
  state = { line: "", area:""}
  
  xAxis = d3.axisBottom().ticks(8).tickFormat(d3.timeFormat("%H"));
  yAxis = d3.axisLeft().ticks(5, "d");

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if(!data) return {};

    const extent = d3.extent(data, d => d.date);
    const xScale = d3
      .scaleTime()
      .domain(extent)
      .range([margin.left, width - margin.right])

    const max = d3.max(data, d => d.pressure);
    const min = d3.min(data, d => d.pressure);

    const yScale = d3
      .scaleLinear()
      .domain([min, max])
      .range([height - margin.bottom, margin.top]);

    // const areaGenerator = d3.area()
    //   .x(d => xScale(d.date))
    //   .y0(height - margin.bottom)
    //   .y1(d => yScale(d.temp))
    //   .curve(d3.curveBasis)
    
    const lineGenerator = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.pressure))
      .curve(d3.curveBasis);
    const line = 
      {
        path: lineGenerator(data)
      }
    
    // const area = { path: areaGenerator(data), }
    
    return {line, xScale, yScale }
  }

   
  componentDidUpdate() {
    if(this.props.data) {
      this.xAxis.scale(this.state.xScale);
      d3.select(this.refs.xAxis).call(this.xAxis).style("font-size", "32px");
      this.yAxis.scale(this.state.yScale);
      d3.select(this.refs.yAxis).call(this.yAxis).style("font-size", "32px");

      // let area = d3.selectAll('#area');
      //   area
      // .attr("transform", "translate(0, 300)")
      // .transition()
      // .duration(3000)
      // .attr("transform", "translate(0,0)");

      let line = d3.selectAll("#pressureline");
      var totalLength = line.node().getTotalLength();
      line
        .attr("stroke-dasharray", totalLength)
        .attr("stroke-dashoffset", totalLength)
        .attr("stroke-width", 6)
        .attr("stroke", "#000")
        .transition()
        .duration(3000)
        .attr("stroke-width", 4)
        .attr("stroke-dashoffset", 0);
    }
  }

  render() {
    return (
      <svg width={width} height={height}>
        <defs>
            <linearGradient id="MyGradient">
              <stop offset="-10%" stop-color="#3b83d4" />
              <stop offset="95%" stop-color="#6788ad" />
            </linearGradient>
        </defs>
        <path d={this.state.line.path} stroke='#29637f' fill="transparent" id="pressureline" />
        {/* <path d={this.state.area.path} fill='url(#MyGradient)' id="area" /> */}
        <g>
          <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} />
          <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    )
  }
}

export default PressureLineChart

