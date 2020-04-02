import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./app.css";
import store from "./store";
import HomeContainer from "./components/HomeContainer";
import StartContainer from "./components/StartContainer";
import UserContainer from "./components/userContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="home">
          <Route exact path="/dashboard" component={UserContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/" component={StartContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
