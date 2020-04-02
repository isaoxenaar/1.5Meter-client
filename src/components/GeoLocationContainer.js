import React, { Component } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import WarningContainer from "./WarningContainer";
import MyMap from "./MapContainer";
import Button from "muicss/lib/react/button";

export const socketConnection = socketIOClient(
  "https://ancient-taiga-80457.herokuapp.com/"
);
//export const socketConnection = socketIOClient("http://localhost:4001");

class GeoLocation extends Component {
  state = {
    message: "",
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 5,
    allCoordinates: {},
    userId: ""
  };

  socket = socketConnection;

  componentDidMount = () => {
    this.socket.on("all coordinates", cords => {
      this.setState({
        allCoordinates: cords
      });
    });
  };

  geoFindMe = () => {
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coordinate = {
        longitude: this.state.longitude,
        latitude: this.state.latitude
      };

      const coordinates = `Latitude: ${latitude} Longitude: ${longitude}`;
      this.socket.emit("add coordinates", coordinate);
      this.setState({
        message: coordinates,
        latitude: latitude,
        longitude: longitude,
        userId: this.socket.id,
        zoom: 15
      });
    };

    const error = position => {
      this.setState({
        message: `Unable to retrieve your location`
      });
    };

    if (!navigator.geolocation) {
      this.setState({
        message: "Geolocation is not supported by your browser"
      });
    } else {
      this.setState({ message: "Locating…" });
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  send = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.geoFindMe, 1000);
  };

  render() {
    const arrayOfCoordinates = Object.entries(this.state.allCoordinates);
    return (
      <div class="geolocationdiv">
        <h2 class="instruction">
          "find your location" to get your coordinates and find how close you
          are to others
        </h2>{" "}
        <p class="button">
          <Button onClick={this.send} color="danger">
            this is you!
          </Button>
        </p>
        <p class="position">{this.state.message}</p>
        <WarningContainer
          allCoordinates={arrayOfCoordinates}
          userId={this.state.userId}
        />
        <MyMap allCoordinates={arrayOfCoordinates} state={this.state} />
      </div>
    );
  }
}

export default GeoLocation;
