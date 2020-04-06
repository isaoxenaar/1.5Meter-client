import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";
import HomeContainer from "./HomeContainer";

class StartContainer extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }
  render() {
    if (this.props.loggedInUser.jwt) {
      return <Redirect to="/home" component={HomeContainer} />;
    } else {
      return (
        <main class="start">
          <h1 class="starttitle">ANDERHALVE METER</h1>
          <div>
            <h4 class="introduction">
              this is a proof of case for an app that makes a noise when two
              device are withing 1.5 meters of each other. right now it only
              measures from 15 meters. It only shows warnings when two
              smartphones are to close and does not publish personal info to
              other users. The app keeps each user anonymous to the other users,
              except to the developer who will only use the location details to
              make the app function. The apps aim is to stop the covid-19 virus
              from spreading. We will not use your info for anything other than
              to inform you of the space between you and the other. Signup and
              Login to start using the app. If you log out the app stops
              tracking your location. You can log out by closing the browser.
            </h4>
            <SignUpContainer /> <LoginContainer />
          </div>
        </main>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps)(StartContainer);
