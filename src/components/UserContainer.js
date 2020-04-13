import React, { Component } from "react";
import Button from "muicss/lib/react/button";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../actions/allUsersAction";
import { getWarnings } from "../actions/allWarningsAction";

class UserContainer extends Component {
  componentDidMount = () => {
    this.props.getUsers();
    this.props.getWarnings();
    document.body.style.backgroundColor = "bisque";
  };

  render() {
    const user = this.props.signedUpUsers.find(user => {
      return user.id == this.props.loggedInUser.userId;
    });
    const warningsThisUser = this.props.warnings.filter(warning => {
      if (!user) {
        return <p>loading2...</p>;
      } else {
        return warning.userId == user.id;
      }
    });
    const warnings = warningsThisUser.map(warning => {
      const time = Date(warning.time);
      const writtenDate = time.toString();
      return (
        <li key={warning.id} className="singleWarning">
          {writtenDate} {warning.latitude}, {warning.longitude}
        </li>
      );
    });
    const list = <ul className="warningsList">{warnings}</ul>;
    if (!user) {
      return (
        <Link className="link" to="/">
          <Button color="white"> go home and log in </Button>
        </Link>
      );
    } else {
      return (
        <main>
          <h1 className="usertitle">ANDERHALVE METER</h1>
          <img
            className="img"
            src={user.profileUrl}
            style={{ width: "200px", height: "200px" }}
            alt="not found"
          />
          <h2 className="user">
            Dear {user.username}, t hese are the warnings you got since
            {user.createdAt}. Please be carefull. Step back from the people
            around you. Even if others don't keep a distance, be the one to walk
            away or say something. Stop covid-19 from spreading like a wildfire,
            protect the people you love. Read the instructions from the
            government here. Watch and read the caretakers stories here.
          </h2>
          <p className="usermain">
            <Button color="white"> warnings </Button>
          </p>
          <div className="warnings">
            <h2>WARNINGS</h2>
            <h4>{list}</h4>
          </div>
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
    warnings: ReduxState.warnings,
    loggedInUser: ReduxState.loggedInUser,
    signedUpUsers: ReduxState.signedUpUsers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
