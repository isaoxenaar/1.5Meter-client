import React, { Component } from "react";
import { Link } from "react-router-dom";
import GeoLocation from "./GeoLocationContainer";
import Button from "muicss/lib/react/button";

class HomeContainer extends Component {
  render() {
    return (
      <main class="home">
        <h1 class="hometitle">ANDERHALVE METER</h1>
        <GeoLocation />
        <Link class="link" to="/dashboard">
          <Button color="white">this is you!</Button>
        </Link>
      </main>
    );
  }
}

export default HomeContainer;
