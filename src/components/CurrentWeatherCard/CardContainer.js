import styled from 'styled-components';

import CurrentTemp from './CurrentTemp';
import CardLocation from './CardLocation';
import CardInfo from './CardInfo';
import CardIcon from './CardIcon';

const CardContainer = styled.div`
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
/* grid-gap: 1.2rem; */
justify-items: center;
align-items: center;
background-color: #e7fcfb;
`
CardContainer.Temp = CurrentTemp;
CardContainer.Location = CardLocation;
CardContainer.Icon = CardIcon;
CardContainer.Info = CardInfo;
export default CardContainer;