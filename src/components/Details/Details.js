import React, { Component } from 'react';
import d3 from 'd3';
import { connect } from 'react-redux';
import { fetchForecast } from '../../actions';

import LineChart from './LineChart';

class Details extends Component {
  state = { data: [], byDay: [] };
  async componentDidMount() {
    await this.props.fetchForecast();
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
        wind_deg: section.wind.deg,
        wind_speed: section.wind.speed
      };
    });

    const cleanDataCopy = [...cleanData];
    const cleanDataByDay = this.chunk(cleanDataCopy, 8);
    console.log('modifying state')
    this.setState({ data: cleanData, today: cleanDataByDay[0] });
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

  componentDidUpdate() {
    console.log('data: ', this.state.data)
    console.log('byDay: ', this.state.byDay[0]);
  }

  render() {
    // if(this.state.data.length){
      return (
        <div>
          Details
          <LineChart data={this.state.data} />
          <LineChart data = {this.state.today}/>
        </div>
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
