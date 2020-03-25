import React, { Component } from "react";
//location.Create to server

class GeoLocation extends Component {
  state = { message: "" };

  geoFindMe = () => {
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let coordinates = `Latitude: ${latitude} Longitude: ${longitude}`;
      console.log(coordinates);
      this.setState({
        message: coordinates
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
        <button onClick={() => setInterval(this.geoFindMe, 1000)}>
          Try It
        </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default GeoLocation;
