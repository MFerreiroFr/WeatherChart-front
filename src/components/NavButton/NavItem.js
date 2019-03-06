import styled from 'styled-components';

const NavItem = styled.button`
  width: 5.4rem;
  height: 5.4rem;
  background-color: ${props => props.color || '#048acc'};
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  border: none;
  outline: none;
  border-radius: 50%;
  transform:
    ${props =>
      !props.opened ? 'translateX(0) translateY(0)' : 
      props.left ? 'translateX(-9rem)' :
      props.up ? 'translateY(-9rem)' : 'translateX(-7rem) translateY(-7rem)'
    };
  opacity: ${props => props.opened ? '1' : '0'};
  transition: all .4s ease;
  transition-delay: ${props => props.order * 0.1}s;
`

export default NavItem;