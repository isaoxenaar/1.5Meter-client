import React, { Component } from "react";
import Sound from "react-sound";
import { connect } from "react-redux";
import { getDistances } from "../actions/distancesAction";

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

class WarningContainer extends Component {
  // onWarning = warning => {
  //   this.props.createComment({
  //     time: this.state.author,
  //     userId: this.state.text,
  //     targetId: this.props.passedTicketId
  //   });

  //   this.setState({
  //     time: "",
  //     text: "",
  //     ticketId: "",
  //     eventId: ""
  //   });
  // };

  render() {
    const userId = this.props.userId;
    const realUsers = this.props.allCoordinates.filter(user => {
      return user[0] !== userId;
    });
    const userWithId = this.props.allCoordinates.find(user => {
      return user[0] == userId;
    });
    if (!userWithId) {
      return <div class="userId">click to find where you are</div>;
    }
    const theOthers = realUsers.map(user => {
      const position = [user[1].latitude, user[1].longitude];
      const theOther = {
        distanceOther: distance(
          userWithId[1].latitude,
          userWithId[1].longitude,
          user[1].latitude,
          user[1].longitude
        ),
        locationOther: position
      };
      return theOther;
    });
    console.log("the others", theOthers);

    this.props.getDistances(theOthers);
    const distances = theOthers.map(other => {
      return other.distanceOther;
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
      // const now = Date.now();
      // this.onWarning(now);
      // map over fifteen and less and create warning for each.
      // no targetId yet, keep it null for now.
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

const mapDispatchToProps = { getDistances };

function mapStateToProps(state) {
  return {
    distances: state.distances,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningContainer);
