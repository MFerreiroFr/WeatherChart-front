import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  grid-area: ${props => props.area}
`

export default NavContainer;