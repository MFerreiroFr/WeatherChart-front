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
        <CardContainer.Location>Barcelona</CardContainer.Location>
        <CardContainer.Info>
          <CardContainer.Icon><img src="images/cloudWithBorder.svg" alt="Cloudiness" /><p>60</p></CardContainer.Icon>
          <CardContainer.Icon><img src="images/cloudWithBorder.svg" alt="Cloudiness" /><p>40</p></CardContainer.Icon>
        </CardContainer.Info><div>
          
          <p>
            {' '}
            60 <span>%</span>
          </p>
        </div>
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
