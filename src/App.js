import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import store from "./store";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          hellow world
          <HomeContainer />
        </main>
      </Provider>
    );
  }
}

export default App;
