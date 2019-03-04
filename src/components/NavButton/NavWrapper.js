import React, { Component } from 'react';
import styled from 'styled-components';


const StyledNavWrapper = styled.div`

width: 100%;
height: 100%;
overflow: hidden;
border-radius: 50%;
transform: ${props => props.opened ? "scale(1)" : "scale(.30)" };
background-color: black;
transform-origin: bottom right;
margin-right: 3rem;
margin-bottom: 3rem;
transition: .3s all ease;
position: absolute;
bottom: -25%;
right: -25%;
`

class NavWrapper extends Component {
  state = ({menuOpened: false});
  toggleMenu = () => {
    console.log(this.state.menuOpened)
    this.setState({
      menuOpened: !this.state.menuOpened,
    })
  }

  render() {
    return <StyledNavWrapper opened={this.state.menuOpened}  onClick={this.toggleMenu}/>
  }

}


export default NavWrapper;