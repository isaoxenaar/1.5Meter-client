import React, { Component } from "react";
import { connect } from "react-redux";
import MyMap from "./MapContainer";
import socketIOClient from "socket.io-client";

class GeoLocation extends Component {
  state = {
    message: "",
    latitude: 0,
    longitude: 0,
    zoom: 13,
    endpoint: "http://192.168.43.61:4001"
  };

  socket = socketIOClient("http://192.168.43.61:4001");

  componentDidMount = () => {
    this.socket.on("all coordinates", cords => {
      console.log("from added", cords);
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
        longitude: longitude
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
    return (
      <div>
        <p>
          click the button to get your coordinates and see where you are on the
          map.
        </p>
        <p>{this.state.message}</p>
        <MyMap state={this.state} />
        <button onClick={this.send}>find your location </button>
      </div>
    );
  }
}

export default GeoLocation;
