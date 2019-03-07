import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchForecast } from '../../actions';
import styled from 'styled-components';


import TempLineChart from './TempLineChart';
import DraggableLineChart from './DraggableLineChart';
import GaugeChart from './Gauges/GaugeChart';
import GaugeContainer from './Gauges/GaugeContainer';


const StyledDetails = styled.div`
  background-color: #d9e1e9;
  height: 100vh;

  & img {
    margin-left: 1rem;
    margin-top: 0.5rem;
    height: 4rem;
  }
`;
class Details extends Component {
  state = { data: [], filteredData: [], animate: true };
  async componentDidMount() {
    console.log(this.props)
    await this.props.fetchForecast(this.props.match.params.id);
    this.clearDataSet(this.props.forecast);
  }

  clearDataSet(initialData) {
    const cleanData = initialData.list.map(section => {
      return {
        date: new Date(section.dt * 1000),
        temp: section.main.temp,
        high: section.main.temp_max,
        low: section.main.temp_min,
        avg: (section.main.temp_min + section.main.temp_max) / 2,
        humidity: section.main.humidity,
        pressure: section.main.pressure,
        clouds: section.clouds.all,
        wind_deg: section.wind.deg,
        wind_speed: section.wind.speed
      };
    });

    this.setState({ data: cleanData, filteredData: cleanData });
  }

  chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }

    return chunked;
  };

  updateFilters = (bounds) => {
    const filteredData = this.state.data.filter(d => {
      return bounds.range ? 
        d.date >= bounds.range[0] && d.date <= bounds.range[1] :
        d
    });
    this.setState({ filteredData, animate: false })
  }
  

  render() {
    // if(this.state.data.length){
      return (
        <StyledDetails>
          <Link to='/'><img src="/images/back.svg" /></Link>
          <DraggableLineChart data={this.state.data} updateFilters = {this.updateFilters} animate={this.state.animate}/>
           <TempLineChart data = {this.state.filteredData}/>
           <GaugeContainer>
            <GaugeChart data = {this.state.filteredData} field="clouds" fill="#FFFFF0"/>
            <GaugeChart data = {this.state.filteredData} field="humidity" fill="#048ACC"/>
           </GaugeContainer>
          
        </StyledDetails>
      );

    // } else return <div>Loading</div>
  }
}

function mapStateToProps({ forecast }) {
  return { forecast };
}
export default connect(
  mapStateToProps,
  { fetchForecast }
)(Details);
