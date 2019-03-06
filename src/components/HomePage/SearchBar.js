import  React, { Component } from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.input.attrs({
  type: 'text',
})`
width: 100%;
background: black;
border: 3px solid papayawhip;
border-radius: 4px;
color: papayawhip;
outline: none;
padding: 0;

`
class SearchBar extends Component {
  constructor() {
    super();
    this.timer = null;
    this.time = 1500;
  }
  state = { term: '' };

  handleChange = (event) => {
    this.setState({ term: event.target.value });
    // if (this.timer) clearTimeout(this.timer);
    // this.timer = setTimeout(async () => {
    //   await this.searchForTerm(this.state.term);
    // }, this.time);
  }

  render() {
    return (
    <StyledSearchBar value={this.state.term} onChange={this.handleChange}/>
    )
  }
}

export default SearchBar;