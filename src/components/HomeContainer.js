import React, { Component } from "react";
import GeoLocation from "./GeoLocationContainer";
//import UserContainer from "./userContainer";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>ANDERHALVE METER</h1>
        <GeoLocation />
      </div>
    );
  }
}

export default HomeContainer;
