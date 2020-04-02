import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import worldGeoJSON from "geojson-world-map";

const LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: process.env.PUBLIC_URL + "leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

export const greenIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "leaf-green.png"
});
export const redIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "leaf-red.png"
});
export const orangeIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "leaf-red.png"
});
export const userIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "isa.jpg",
  shadowUrl: ""
});

class MyMap extends Component {
  render() {
    const position = [this.props.state.latitude, this.props.state.longitude];
    const evensList = this.props.allCoordinates.filter(
      (element, index, array) => {
        return index % 2 === 0;
      }
    );
    const popUps = evensList.map(user => {
      const position = [user[1].latitude, user[1].longitude];
      return (
        <Marker icon={userIcon} position={position}>
          <Popup>
            hi there this is {user[0]}
            <br />
            dont come to close to me, 1,5 meters!{" "}
          </Popup>
        </Marker>
      );
    });

    return (
      <div class="map">
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
      </div>
    );
  }
}
export default MyMap;
