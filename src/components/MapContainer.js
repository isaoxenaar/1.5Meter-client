import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MyMap extends Component {
  render() {
    console.log(this.props.state);
    const position = [this.props.state.latitude, this.props.state.longitude];

    return (
      <Map center={position} zoom={this.props.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MyMap;
