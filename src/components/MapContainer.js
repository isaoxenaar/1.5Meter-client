import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MyMap extends Component {
  render() {
    console.log("passed props", this.props.state);
    const position = [this.props.state.latitude, this.props.state.longitude];

    return (
      <Map
        center={position}
        zoom={this.props.state.zoom}
        style={{ width: "100%", height: "900px" }}
      >
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            hi there this is isa <br />
            dont come to close to me, 1,5 meters!{" "}
          </Popup>
        </Marker>
      </Map>
    );
  }
}
export default MyMap;
