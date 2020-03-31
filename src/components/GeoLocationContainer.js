import React, { Component } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import WarningContainer from "./WarningContainer";
import MyMap from "./MapContainer";
//long button

class GeoLocation extends Component {
  state = {
    message: "",
    latitude: 0,
    longitude: 0,
    zoom: 13,
    endpoint: "http://localhost:4001",
    //endpoint: "https://ancient-taiga-80457.herokuapp.com/",
    allCoordinates: {},
    userId: ""
  };

  //socket = socketIOClient("https://ancient-taiga-80457.herokuapp.com/");
  socket = socketIOClient("http://localhost:4001");

  componentDidMount = () => {
    this.socket.on("all coordinates", cords => {
      console.log("from added", cords);
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
        userId: this.socket.id
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
    const array = Object.entries(this.state.allCoordinates);
    console.log("in render array", array);
    return (
      <div>
        <p>
          click the button to get your coordinates and see where you are on the
          map.
        </p>
        <button onClick={this.send}>find your location </button>
        <p>{this.state.message}</p>
        <MyMap allCoordinates={array} state={this.state} />
        <WarningContainer allCoordinates={array} userId={this.state.userId} />
      </div>
    );
  }
}

export default GeoLocation;
