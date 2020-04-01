import React, { Component } from "react";
import GeoLocation from "./GeoLocationContainer";
import UserContainer from "./userContainer";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <UserContainer />
        <marquee>
          <h1>ANDERHALVE METER</h1>
        </marquee>
        <GeoLocation />
      </div>
    );
  }
}

export default HomeContainer;
