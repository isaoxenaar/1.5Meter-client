import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Button from "muicss/lib/react/button";

const LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: process.env.PUBLIC_URL + "leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

export const greenIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "leaf-green.png",
});
export const redIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "leaf-red.png",
});
export const orangeIcon = new LeafIcon({
  iconUrl: process.env.PUBLIC_URL + "leaf-red.png",
});

class MapContainer extends Component {
  state = {
    tileLayerUrl:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    tileLayerAttribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  };
  mapGrey = () => {
    this.setState({
      tileLayerUrl:
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      tileLayerAttribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
    });
  };
  mapPhoto = () => {
    this.setState({
      tileLayerAttribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      tileLayerUrl:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    });
  };
  componentDidMount;
  render() {
    const position = [
      this.props.mapStart.latitude,
      this.props.mapStart.longitude,
    ];
    console.log("the red, green and orange in map", this.props.leaves);
    const leaves = this.props.leaves;
    const redPopUps = leaves.red.map((leave) => {
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

    const orangePopUps = leaves.orange.map((leave) => {
      const position = [leave.locationOther[0], leave.locationOther[1]];
      return (
        <Marker icon={orangeIcon} position={position}>
          <Popup>
            Hej,
            <br />
            watch out, you're getting kind of close to this person{" "}
          </Popup>
        </Marker>
      );
    });

    const greenPopUps = leaves.green.map((leave) => {
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
      <Marker position={this.props.thisUserLocation}>
        <Popup>
          this is you, {this.props.thisUser.username}!
          <br />
          take good care and stay 1.5 meters away from others.
        </Popup>
      </Marker>
    );
    return (
      <div className="map">
        <div className="buttons">
          <Button onClick={this.mapGrey}>grey vector map</Button>
          <Button onClick={this.mapPhoto}>photographic map</Button>
        </div>
        <Map
          center={position}
          zoom={this.props.mapStart.zoom}
          style={{ width: "100%", height: "900px" }}
        >
          <TileLayer
            attribution={this.state.tileLayerAttribution}
            url={this.state.tileLayerUrl}
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

function mapStateToProps(ReduxState) {
  return {
    loggedInUser: ReduxState.loggedInUser,
    signedUpUsers: ReduxState.signedUpUsers,
  };
}

export default connect(mapStateToProps)(MapContainer);
