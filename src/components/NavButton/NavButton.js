import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import NavItem from './NavItem';

const StyledNavButton = styled.div`
  border: none;
  background: none;
  color: white;
  text-align: center;
  font-size: 1.6rem;
  height: 7.2rem;
  width: 7.2rem;
  background-color: #02567F;
  position: absolute;
  bottom: 2.4rem;
  right: 2.4rem;
  z-index: 11;
  border-radius: 50%;

  & img {
    height: 50%;
  }
  & span {
    position: relative;
    margin-top: 3.5rem;
    background-color: ${props => props.opened ? 'transparent' : 'white'};

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      background-color: white;
      transition: all .2s;
    }

    &::before { 
      top: ${props => props.opened ? '0' : '-.8rem' };
      transform: ${props => props.opened ? 'rotate(135deg)': 'rotate(0deg)'};

    }
    &::after { 
      top: ${props => props.opened ? '0' : '.8rem' };
      transform: ${props => props.opened ? 'rotate(-135deg)': 'rotate(0deg)'}; 
    }


  }
`
class NavButton extends Component {

  state = ({opened: false});

  handleClick = () => {
    this.setState({ opened: !this.state.opened});
  }

  render() {
    return (
      <StyledNavButton onClick={this.handleClick} opened={this.state.opened}>
        <span></span>
        <NavItem opened={this.state.opened} order='1' left><Link to='/details'><img src="images/stats-dots.svg" /></Link></NavItem>
        <NavItem opened={this.state.opened} order='2' up-left><img src="images/location.svg" /></NavItem>
        <NavItem opened={this.state.opened} order='3' up><img src="images/plus.svg" /></NavItem>
      </StyledNavButton>
    )
  }
}

export default NavButton;