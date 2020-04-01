import React, { Component } from "react";
import Sound from "react-sound";

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = ((lat2 - lat1) * Math.PI) / 180;
  var dLon = ((lon2 - lon1) * Math.PI) / 180;
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  var meters = d * 1000;
  return meters;
}
const testUsers = [
  [
    "user1",
    {
      latitude: 52.359264,
      longitude: 4.863403
    }
  ],
  [
    "user2",
    {
      latitude: 52.354441,
      longitude: 4.870268
    }
  ],
  [
    "user3",
    {
      latitude: 52.354441,
      longitude: 4.870268
    }
  ],
  [
    "user4",
    {
      latitude: 52.361306,
      longitude: 4.888038
    }
  ],
  [
    "user5",
    {
      latitude: 52.341754,
      longitude: 4.877734
    }
  ]
];

class WarningContainer extends Component {
  render() {
    const userId = this.props.userId;
    const realUsers = this.props.allCoordinates.filter(user => {
      return user[0] !== userId;
    });
    const userWithId = this.props.allCoordinates.find(user => {
      return user[0] == userId;
    });
    if (!userWithId) {
      return <div>no user id</div>;
    }
    const users = [...realUsers, ...testUsers];
    const distances = users.map(user => {
      console.log("user", user, userWithId);

      return distance(
        userWithId[1].latitude,
        userWithId[1].longitude,
        user[1].latitude,
        user[1].longitude
      );
    });
    console.log("distances", distances);
    const fifteenAndLess = distances.filter(distance => {
      return distance < 15;
    });
    if (!fifteenAndLess)
      return (
        <div class="awesome">
          <h4>You are doing awesome at keeping a distance</h4>
        </div>
      );
    else {
      return (
        <div class="warningdiv">
          <h1 class="toclose">TO CLOSE STEP BACK</h1>
          <Sound
            url={process.env.PUBLIC_URL + "/cant-touch-this.mp3"}
            playStatus="PLAYING"
          />
        </div>
      );
    }
  }
}

export default WarningContainer;
