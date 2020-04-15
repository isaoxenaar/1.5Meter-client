import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "muicss/lib/react/button";
import StartContainer from "./StartContainer";
import { logout } from "../actions/loginAction";

class LogOut extends Component {
  logOut = () => {
    this.props.logout();
    this.props.history.push("/");
    // const button2 = (
    //   <Link className="link" to="/">
    //     <Button color="white"> go home and log in </Button>
    //   </Link>
    // );
    // this.setState({
    //   logOut: button2,
    // });
  };

  render() {
    return (
      <div>
        <Button onClick={this.logOut}>Log out and stop tracking me</Button>
      </div>
    );
  }
}

const mapDispatchToProps = { logout };

function mapStateToProps(ReduxState) {
  return {
    loggedInUser: ReduxState.loggedInUser,
    signedUpUsers: ReduxState.signedUpUsers,
    warnings: ReduxState.warnings,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
