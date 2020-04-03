import React, { Component } from "react";
import { Link } from "react-router-dom";
import GeoLocation from "./GeoLocationContainer";

class HomeContainer extends Component {
  render() {
    return (
      <main class="home">
        <h1 class="hometitle">ANDERHALVE METER</h1>
        <Link to="/dashboard">
          <button>this is you!</button>
        </Link>
        <GeoLocation />
      </main>
    );
  }
}

export default HomeContainer;
