import styled, { keyframes } from 'styled-components';

const show = keyframes`

  0% {
    transform: translateY(-6.5rem);
  }

  80% {
    transform: translateY(1rem);
  }

  100%{
    transform: translateY(0);
  }

`

const CardIcon= styled.div`
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  grid-area: ${props => props.area};
  transform-origin: top;
  overflow: hidden;

  & img {
    height: 100%;
    width: 6.5rem;
  }

  & p {
    font-size: 3.2rem;
    margin-left: .8rem;
    color: ${props => props.darkTheme ? "#000" : "#fffff0" }
  }

  & p::after {
  content: "${props => props.measure}";
    font-size: 2.4rem;
  }

  & * {
    transform: translateY(-6.5rem);
    animation: ${show} .5s ease-out;
    animation-delay: ${props => props.order * 0.1}s;
    animation-fill-mode: forwards; 
  }
`



export default CardIcon;