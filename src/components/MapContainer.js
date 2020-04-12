import React, { Component } from "react";
import { connect } from "react-redux";
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

class MapContainer extends Component {
  componentDidMount;
  render() {
    const position = [this.props.state.latitude, this.props.state.longitude];
    // const evensList = this.props.allCoordinates.filter(
    //   (element, index, array) => {
    //     return index % 2 === 0;
    //   }
    // );
    console.log("the red, green and orange in map", this.props.leaves);
    const leaves = this.props.leaves;
    const redPopUps = leaves.red.map(leave => {
      const position = [leave.locationOther[0], leave.locationOther[1]];
      return (
        <Marker icon={redIcon} position={position}>
          <Popup>
            hi there!
            <br />
            were to close. lets take a step back.{" "}
          </Popup>
        </Marker>
      );
    });

    const orangePopUps = leaves.orange.map(leave => {
      const position = [leave.locationOther[0], leave.locationOther[1]];
      return (
        <Marker icon={orangeIcon} position={position}>
          <Popup>
            hi there!
            <br />
            watch out, youre getting kind of close to this person{" "}
          </Popup>
        </Marker>
      );
    });

    const greenPopUps = leaves.green.map(leave => {
      const position = [leave.locationOther[0], leave.locationOther[1]];
      return (
        <Marker icon={greenIcon} position={position}>
          <Popup>
            keep up the good work!
            <br />
            this person is at a good distance
          </Popup>
        </Marker>
      );
    });
    console.log("userwithid", this.props.userWithId);
    const youPopUp = (
      <Marker
        icon={this.props.thisUser.pictureUrl}
        position={this.props.thisUserLocation}
      >
        <Popup>
          this is you, {this.props.thisUser.username}!
          <br />
          take good care and stay 1.5 meters away from others.
        </Popup>
      </Marker>
    );
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
          {redPopUps}
          {greenPopUps}
          {orangePopUps}
          {youPopUp}
        </Map>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    sigedUpUsers: state.sigedUpUsers
  };
}

export default connect(mapStateToProps)(MapContainer);
