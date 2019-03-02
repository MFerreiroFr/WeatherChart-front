import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { createGlobalStyle } from 'styled-components';


import HomePage from './HomePage/HomePage';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
}
body{
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
}
`


class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <div className="container">
        <GlobalStyle />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;