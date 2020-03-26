import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class SocketContainer extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://192.168.43.61:4001",
      coordinate: this.props.coordinate
    };
  }
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("add the other", this.state.coordinate);
  };

  render() {
    console.log("coordinate props", this.props.coordinate);

    const socket = socketIOClient(this.state.endpoint);

    return <div></div>;
  }
}

export default SocketContainer;
