import styled, { keyframes } from 'styled-components';


const calculateRotation = (sunrise, sunset) => {
    sunrise = sunrise * 1000;
    sunset = sunset * 1000;
    const max = new Date() > sunset ? sunrise  + (24 * 3600 * 1000): sunset;
    const min = new Date() <= sunset ? sunrise : sunset;
    console.log('max: ', max)
    const result =
      ((new Date() - min) * 100) /
      (max - min);
    console.log('result', result);
    return result;
};

const move = (perc) => keyframes`
  0% {
    offset-distance: 0%;
  }
  100% {
  offset-distance: ${perc}%;
  }
`



const SunOrMoon = styled.img.attrs(props => ({
  src: props.sunset * 1000 < new Date() ? 'images/moon.svg' : 'images/sun.svg'
}))`
  offset-path: path("m 0,115.50295 c 45.735121, -250.273809 375.218751, -250.18899 375,0");
  height: 8rem;
  width: 8rem;
  position: absolute;
  top: 30vh;
  left: 0;
  animation: ${props => move(calculateRotation(props.sunrise,props.sunset))} 3.5s ease-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay}
`

export default SunOrMoon;