import React, { Component } from "react";
import Button from "muicss/lib/react/button";
import ReactPlayer from "react-player";
import { getUsers } from "../actions/allUsersAction";
import { getWarnings } from "../actions/allWarningsAction";
import { connect } from "react-redux";

class UserContainer extends Component {
  componentDidMount = () => {
    this.props.getUsers();
    this.props.getWarnings();
  };

  render() {
    const user = this.props.signedUpUsers.find(user => {
      return user.id == this.props.loggedInUser.userId;
    });
    if (!user) {
      return <div></div>;
    } else {
      return (
        <main>
          <h1 className="usertitle">ANDERHALVE METER</h1>
          <img className="img" src={user.pictureUrl} alt="not found" />
          <h2 className="user">
            Dear {user.username}, these are the warnings you got since
            {user.createdAt}. ..................... warningslist Please be
            carefull. Step back from the people around you. Even if others don't
            keep a distance, be the one to walk away or say something. Stop
            covid-19 from spreading like a wildfire, protect the people you
            love.
          </h2>
          <p className="usermain">
            <Button color="white"> warnings </Button>
          </p>
          <p className="video">
            <ReactPlayer url={process.env.PUBLIC_URL + "tequila.mp4"} playing />
          </p>
        </main>
      );
    }
  }
}
const mapDispatchToProps = { getUsers, getWarnings };

function mapStateToProps(ReduxState) {
  return {
    loggedInUser: ReduxState.loggedInUser,
    signedUpUsers: ReduxState.signedUpUsers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
