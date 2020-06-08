import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";
import HomeContainer from "./HomeContainer";

class StartContainer extends Component {
  render() {
    if (this.props.loggedInUser.jwt) {
      return <Redirect to="/home" component={HomeContainer} />;
    } else {
      return (
        <main className="start">
          <h1 className="starttitle">ANDERHALVE METER</h1>
          <div>
            <h3 className="introduction">
              This is a proof of case for an app that makes a noise when two
              device are within 1.5 meters of each other. Right now it only
              measures from 15 meters. The goal is to make it accurate for 1.5
              meters. It shows warnings and sings a warningsong when two
              smartphones are to close to each other.
              <br />
              The app does not publish personal info to other users. <br />
              The app keeps each user anonymous to the other users, but not to
              the developer who will only use the location details to make the
              app function. We will not use your info for anything other than to
              inform you of the space between you and the other.
              <br />
              The apps aim is to help stop the covid-19 virus from spreading.{" "}
              <br />
              Signup and Login to start using the app. If you log out the app
              stops tracking your location.
            </h3>
            <SignUpContainer /> <LoginContainer />
          </div>
          <img src="amsterdammertje-voetplaat-01.png" />
          <p className="anderhalf"> {`<      1.5     > `}</p>
        </main>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
  };
}
export default connect(mapStateToProps)(StartContainer);
