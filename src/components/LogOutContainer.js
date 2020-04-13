import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "muicss/lib/react/button";

class LogOut extends Component {
  state = {
    navigate: false
  };
  logOut = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return <Button onClick={this.logOut}>Log out and stop tracking me</Button>;
  }
}

export default LogOut;
