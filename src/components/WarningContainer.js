import React, { Component } from "react";
import Sound from "react-sound";
import { connect } from "react-redux";
import { createWarning } from "../actions/createWarningAction";

class WarningContainer extends Component {
  onWarning = (now, position) => {
    this.props.createWarning({
      time: now,
      location: position,
      targetId: ""
    });
  };

  render() {
    if (!this.props.fifteenAndLess)
      return (
        <div class="awesome">
          <h4>You are doing awesome at keeping a distance</h4>
        </div>
      );
    else {
      this.props.fifteenAndLess.map(user => {
        const now = Date.now();
        const position = [user.locationOther[0], user.locationOther[1]];
        this.onWarning(now, position);
      });
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

const mapDispatchToProps = { createWarning };

function mapStateToProps(state) {
  return {
    distances: state.distances,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningContainer);
