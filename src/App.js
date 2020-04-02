import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./app.css";
import store from "./store";
import HomeContainer from "./components/HomeContainer";
import LoginContainer from "./components/LoginContainer";
import SignUpContainer from "./components/SignUpContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="home">
          <HomeContainer />
          <SignUpContainer />
          <LoginContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
