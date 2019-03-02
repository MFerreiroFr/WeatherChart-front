import styled from 'styled-components';

import CurrentTemp from './CurrentTemp';
import CardLocation from './CardLocation';
import CardInfo from './CardInfo';
import CardIcon from './CardIcon';

const CardContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #e7fcfb;
`
CardContainer.Temp = CurrentTemp;
CardContainer.Location = CardLocation;
CardContainer.Icon = CardIcon;
CardContainer.Info = CardInfo;
export default CardContainer;