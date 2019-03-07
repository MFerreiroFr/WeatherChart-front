import styled from 'styled-components';

import CurrentTemp from './CurrentTemp';
import CardLocation from './CardLocation';
import CardInfo from './CardInfo';
import CardIcon from './CardIcon';
import CardWeather from './CardWeather';

const CardContainer = styled.div`
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 0.7fr 0.9fr 1fr;
grid-template-areas:
  "gen  gen"
  "max  min"
  "som  menu";
/* grid-gap: 1.2rem; */
justify-items: center;
align-items: center;
background-color: ${props => props.darkTheme ? "#81c5ff" : "#02567f"};
`

CardContainer.Temp = CurrentTemp;
CardContainer.Location = CardLocation;
CardContainer.Weather = CardWeather;
CardContainer.Icon = CardIcon;
CardContainer.Info = CardInfo;
export default CardContainer;