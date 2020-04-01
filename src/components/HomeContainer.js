import React, { Component } from "react";
import GeoLocation from "./GeoLocationContainer";
//import UserContainer from "./userContainer";

class HomeContainer extends Component {
  render() {
    return (
      <main class="home">
        <h1 class="hometitle">ANDERHALVE METER</h1>
        <GeoLocation />
      </main>
    );
  }
}

export default HomeContainer;
