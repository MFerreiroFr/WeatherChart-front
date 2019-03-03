import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CardContainer from '../CurrentWeatherCard/CardContainer'

const StyledBottomDiv = styled.div`
  height: 50vh;
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
`;



class CurrentWeatherCard extends Component {
  renderCurrentWeather = () => {
    if (!this.props.weather) return;
    return (
      <CardContainer>
        <CardContainer.Temp>{Math.round(this.props.weather.main.temp - 273)}º</CardContainer.Temp>
          <CardContainer.Icon order="1" measure="º"><img src="images/cloudWithBorder.svg" alt="Cloudiness" /><p>{Math.round(this.props.weather.main.temp_max - 273)}</p></CardContainer.Icon>
          <CardContainer.Icon order="2" measure="%"><img src="images/cloudWithBorder.svg" alt="Cloudiness" /><p>{this.props.weather.clouds.all}</p></CardContainer.Icon>
          <CardContainer.Icon order="3" measure="º"><img src="images/cloudWithBorder.svg" alt="Cloudiness" /><p>{Math.round(this.props.weather.main.temp_min - 273)}</p></CardContainer.Icon>
      </CardContainer>
    );
  };
  render() {
    return <StyledBottomDiv>{this.renderCurrentWeather()}</StyledBottomDiv>;
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(CurrentWeatherCard);
