import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "muicss/lib/react/button";
import { getUsers } from "../actions/allUsersAction";
import GeoLocation from "./GeoLocationContainer";
import LogOut from "./LogOutContainer";

class HomeContainer extends Component {
  componentDidMount = () => {
    this.props.getUsers();
    document.body.style.backgroundImage = "";
  };

  render() {
    const user = this.props.signedUpUsers.find(user => {
      return user.id == this.props.loggedInUser.userId;
    });
    if (!user) {
      return <div></div>;
    } else {
      return (
        <main className="home">
          <h1 className="hometitle">ANDERHALVE METER</h1>
          <h2 className="welcome">
            Hej <h2 className="name">{user.username}</h2>, stay of my radar
            today
          </h2>
          <Link className="link" to="/dashboard">
            <Button color="white">this is you!</Button>
          </Link>
          <p className="logout">
            <LogOut />
          </p>
          <GeoLocation />
        </main>
      );
    }
  }
}

const mapDispatchToProps = { getUsers };

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    signedUpUsers: state.signedUpUsers
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
