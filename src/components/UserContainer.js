import React, { Component } from "react";
import Button from "muicss/lib/react/button";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../actions/allUsersAction";
import { getWarnings } from "../actions/allWarningsAction";
import EditProfileForm from "./EditProfileForm";

class UserContainer extends Component {
  state = {
    showWarnings: false,
  };
  componentDidMount = () => {
    this.props.getUsers();
    this.props.getWarnings();
    document.body.style.backgroundImage = "";
  };

  render() {
    const user = this.props.signedUpUsers.find((user) => {
      return user.id == this.props.loggedInUser.userId;
    });
    const warningsThisUser = this.props.warnings.filter((warning) => {
      if (!user) {
        return <p>loading2...</p>;
      } else {
        return warning.userId == user.id;
      }
    });
    const warnings = warningsThisUser.map((warning) => {
      const time = Date(warning.time);
      const writtenDate = time.toString();
      return (
        <li key={warning.id} className="singleWarning">
          {writtenDate} {warning.latitude}, {warning.longitude}
        </li>
      );
    });
    const list = <ul className="warningsList">{warnings}</ul>;
    const listButtonText = this.state.showWarnings
      ? "Hide warnings"
      : "Show warnings";

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
          <EditProfileForm />
          <div className="user">
            <h2 style={{ color: "red" }}>Dear {user.username},</h2>
            <h3>
              these are the warnings you got since
              <h3 style={{ color: "red" }}>{user.createdAt}</h3> <br />
              <Button
                onClick={() =>
                  this.setState({ showWarnings: !this.state.showWarnings })
                }
                color="danger"
              >
                {listButtonText}
              </Button>
              <br />
              Please be carefull.
              <br />
              Step back from the people around you. <br />
              If others don't keep a distance, be the one to walk away. <br />
              Stop covid-19 from spreading, protect the people you love.
            </h3>
          </div>
          {this.state.showWarnings && (
            <div className="warnings">
              <h4>{list}</h4>
            </div>
          )}
          <p className="usermain">
            <Button color="white"> read governemnt instructions</Button>
            <Button color="white">
              {" "}
              see what happens in hospitals in nederland
            </Button>
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
    warnings: ReduxState.warnings,
    loggedInUser: ReduxState.loggedInUser,
    signedUpUsers: ReduxState.signedUpUsers,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
