import styled from 'styled-components';

const CardWeather = styled.div`
  width: 100%;
  grid-area: gen;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 600;
  color: ${props => props.darkTheme ? "#000" : "#fffff0" };
`

export default CardWeather;