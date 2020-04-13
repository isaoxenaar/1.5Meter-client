import React, { Component } from "react";
import Sound from "react-sound";
import { connect } from "react-redux";
import { createWarning } from "../actions/createWarningAction";

class WarningContainer extends Component {
  onWarning = (now, position) => {
    this.props.createWarning({
      time: now,
      latitude: position[0],
      longitude: position[1],
      targetId: ""
    });
  };

  render() {
    console.log("fifteenandless", this.props.fifteenAndLess.length);
    if (this.props.fifteenAndLess.length === 0)
      return (
        <div className="awesome">
          <h1>You are doing awesome at keeping a distance</h1>
        </div>
      );
    else {
      this.props.fifteenAndLess.map(user => {
        console.log("user in fifteen", user);
        const now = Date.now();
        const position = [user.locationOther[0], user.locationOther[1]];
        this.onWarning(now, position);
      });
      return (
        <div className="warningdiv">
          <h1 className="toclose">TO CLOSE STEP BACK</h1>
          <Sound
            url={process.env.PUBLIC_URL + "/cant-touch-this.mp3"}
            playStatus="PLAYING"
          />
        </div>
      );
    }
  }
}

const mapDispatchToProps = { createWarning };

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningContainer);
