import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import { fetchCurrentWeather, fetchCurrentWeatherFromCoords } from '../../actions';
import CardLocation from '../CurrentWeatherCard/CardLocation';
import SunOrMoon from './SunOrMoon';

import CurrentWeatherCard from './CurrentWeatherCard';

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${props => props.isNight ?  "url('/images/night.png')" : `url('/images/day.png')` };
  overflow-x: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
`;




class HomePage extends Component {
  state= ({isNight: false})
  async componentDidMount() {
    if(this.props.coords.length) {
      console.log(this.props.coords)
      await this.props.fetchCurrentWeatherFromCoords(this.props.coords[0], this.props.coords[1])
    } else  {
      await this.props.fetchCurrentWeather();
    }

    this.setState({ isNight: this.isNight()})
  }

  isNight = () => this.props.weather.sys.sunset * 1000 < new Date();

  calculateRotation = () => {
    if (this.props.weather) {
      const sunrise = this.props.weather.sys.sunrise * 1000;
      const sunset = this.props.weather.sys.sunset * 1000;
      const max = new Date() > sunset ? sunrise  + (24 * 3600 * 1000): sunset;
      const min = new Date() <= sunset ? sunrise : sunset;
      const result =
        ((new Date() - min) * 100) /
        (max - min);
      return max === sunset ? result : result + 100
    } else return;
  };

  componentDidUpdate() {
    if(this.isNight() !== this.state.isNight) this.setState({isNight: this.isNight()})
  }
  render() {
    
    if(!this.props.weather) return null;
    return (
      <StyledDiv isNight={this.state.isNight}>
        <CardLocation>{this.props.weather.name}</CardLocation>
        <SunOrMoon sunrise={this.props.weather.sys.sunrise} sunset={this.props.weather.sys.sunset} delay="1.2s"/>
        <CurrentWeatherCard darkTheme= {this.isNight()}/>
      </StyledDiv>
    );
  }
}

function mapStateToProps({ weather, coords }) {
  return { weather, coords };
}
export default connect(
  mapStateToProps,
  { fetchCurrentWeather, fetchCurrentWeatherFromCoords }
)(HomePage);
