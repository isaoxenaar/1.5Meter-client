import React, { Component } from "react";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";

class StartContainer extends Component {
  render() {
    return (
      <main class="home">
        <h1 class="hometitle">ANDERHALVE METER</h1>
        <SignUpContainer />
        <LoginContainer />
      </main>
    );
  }
}

export default StartContainer;
