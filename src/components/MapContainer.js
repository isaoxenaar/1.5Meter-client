import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import worldGeoJSON from "geojson-world-map";

class MyMap extends Component {
  render() {
    const position = [this.props.state.latitude, this.props.state.longitude];

    const evensList = this.props.allCoordinates.filter(function(
      element,
      index,
      array
    ) {
      return index % 2 === 0;
    });
    const popUps = evensList.map(user => {
      const position = [user[1].latitude, user[1].longitude];
      console.log("position", position);
      return (
        <Marker position={position}>
          <Popup>
            hi there this is {user[0]}
            <br />
            dont come to close to me, 1,5 meters!{" "}
          </Popup>
        </Marker>
      );
    });
    console.log("popups", popUps);

    return (
      <Map
        center={position}
        zoom={this.props.state.zoom}
        style={{ width: "100%", height: "900px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: "#4a83ec",
            weight: 0.5,
            fillColor: "#D9B382",
            fillOpacity: 0.5
          })}
        />
        {popUps}
      </Map>
    );
  }
}
export default MyMap;
