import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import styled, { keyframes } from 'styled-components';
import * as actions from '../../actions';
import CardLocation from '../CurrentWeatherCard/CardLocation';
import SunOrMoon from './SunOrMoon';

import CurrentWeatherCard from './CurrentWeatherCard';

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/images/day.png');
  overflow-x: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
`;

const rotate = rotDeg => keyframes`
  from { 
    transform: translate(-50%, -50%) rotate(-90deg);
  }

  to {
    
    transform: translate(-50%, -50%) rotate(${(rotDeg / 100) * 180 - 90}deg);
  }
`;

const SunAndMoon = styled.img.attrs({
  src: 'images/sunAndMoon.svg',
  alt: 'sunAndMoon'
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${props => rotate(props.rotation)} 2s ease-out;
  animation-fill-mode: forwards;
`;

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchCurrentWeather();
  }

  calculateRotation = () => {
    if (this.props.weather) {
      const sunrise = this.props.weather.sys.sunrise * 1000;
      const sunset = this.props.weather.sys.sunset * 1000;
      const max = new Date() > sunset ? sunrise  + (24 * 3600 * 1000): sunset;
      const min = new Date() <= sunset ? sunrise : sunset;
      console.log('max: ', max)
      const result =
        ((new Date() - min) * 100) /
        (max - min);
      console.log('result', result);
      return max === sunset ? result : result + 100
    } else return;
  };

  render() {
    console.log(this.props);
    if(!this.props.weather) return null;
    console.log(this.calculateRotation());
    return (
      <StyledDiv>
        <CardLocation>{this.props.weather.name}</CardLocation>
        {/* <SunAndMoon
          rotation={this.calculateRotation()}
          src="images/sunAndMoon.svg"
          alt="sunAndMoon"
        /> */}
        <SunOrMoon sunrise={this.props.weather.sys.sunrise} sunset={this.props.weather.sys.sunset} delay="1.2"/>
        <CurrentWeatherCard />
      </StyledDiv>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(
  mapStateToProps,
  actions
)(HomePage);
