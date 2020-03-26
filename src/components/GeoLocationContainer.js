import React, { Component } from "react";
import { connect } from "react-redux";
import MyMap from "./MapContainer";
//location.Create to server

class GeoLocation extends Component {
  state = { message: "", latitude: 0, longitude: 0, zoom: 13 };

  geoFindMe = () => {
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const coordinates = `Latitude: ${latitude} Longitude: ${longitude}`;
      console.log("this is position", position);
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

  render() {
    console.log(this.state.message);

    return (
      <div>
        <p>Click the button to get your coordinates.</p>
        <button onClick={() => setInterval(this.geoFindMe, 10000)}>
          Try It
        </button>{" "}
        <p>{this.state.message}</p>
        <MyMap state={this.state} />
      </div>
    );
  }
}

export default GeoLocation;
