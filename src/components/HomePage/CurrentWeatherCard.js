import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled  from 'styled-components';

import CardContainer from '../CurrentWeatherCard/CardContainer'
import NavButton from '../NavButton/NavButton';
import NavContainer from '../NavButton/NavContainer'

const StyledBottomDiv = styled.div`
  height: 50vh;
  width: 100%;
  position: absolute;
  bottom: 0;
`;



class CurrentWeatherCard extends Component {
  
  componentDidUpdate() {
  if(this.props.weather) console.log(this.props.weather)
  }
  renderCurrentWeather = () => {
    if (!this.props.weather) return;
    return (
        <CardContainer darkTheme = {this.props.darkTheme}>
          <CardContainer.Temp>{Math.round(this.props.weather.main.temp - 273)}º</CardContainer.Temp>
          <CardContainer.Weather darkTheme = {this.props.darkTheme}>{this.props.weather.weather[0].description}</CardContainer.Weather>
          <CardContainer.Icon darkTheme = {this.props.darkTheme} order="1" measure="º" area="max"><img src={`images/arrow-up2${!this.props.darkTheme ? '-dark' : ''}.svg`} alt="Cloudiness" /><p>{Math.round(this.props.weather.main.temp_max - 273)}</p></CardContainer.Icon>
          <CardContainer.Icon darkTheme = {this.props.darkTheme} order="2" measure="%" area="som"><img src={`images/cloudWithBorder${!this.props.darkTheme ? '-dark' : ''}.svg`} alt="Cloudiness" /><p>{this.props.weather.clouds.all}</p></CardContainer.Icon>
          <CardContainer.Icon darkTheme = {this.props.darkTheme} order="3" measure="º" area ="min"><img src={`images/arrow-down2${!this.props.darkTheme ? '-dark' : ''}.svg`} alt="Cloudiness" /><p>{Math.round(this.props.weather.main.temp_min - 273)}</p></CardContainer.Icon>
            <NavContainer area="menu">
              <NavButton darkTheme={this.props.darkTheme}/>        
            </NavContainer>
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
