import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./app.css";

import store from "./store";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="home">
          <HomeContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
