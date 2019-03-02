import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import styled, { keyframes } from 'styled-components';
import * as actions from '../../actions';

import CurrentWeatherCard from './CurrentWeatherCard';

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color: dodgerblue;
`;

const rotate = rotDeg => keyframes`
  from { 
    transform: translate(-50%, -50%) rotate(-90deg);
  }

  to {
    
    transform: translate(-50%, -50%) rotate(${((rotDeg / 100) * 180) - 90 }deg);
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
  animation: ${props => rotate(props.rotation)} 4s ease-out;
  animation-fill-mode: forwards;
`;

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchCurrentWeather();
  }

  calculateRotation = () => {
    if(this.props.weather)  {
     const result = (((new Date() - this.props.weather.sys.sunrise * 1000) * 100) / (this.props.weather.sys.sunset * 1000 - this.props.weather.sys.sunrise * 1000));
      console.log('result', result + 180)
      return result > 0 ? result : result + 200;
    }
    else return;
  };

  render() {
    console.log(this.calculateRotation());

    return (
      <StyledDiv>
        <SunAndMoon
          rotation={this.calculateRotation()}
          src="images/sunAndMoon.svg"
          alt="sunAndMoon"
        />
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
