import styled from 'styled-components';

const CardIcon= styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content:center;
  align-items: center;

  & img {
    height: 100%;
    width: 6.5rem;
  }

  & p {
    font-size: 3.2rem;
    margin-left: .8rem;
  }

  & p::after {
    content: "%";
    font-size: 2.4rem;
  }
`

export default CardIcon;