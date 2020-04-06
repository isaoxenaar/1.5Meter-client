import React, { Component } from "react";
import Button from "muicss/lib/react/button";
import ReactPlayer from "react-player";

class UserContainer extends Component {
  // componentDidMount(
  //   {

  //   }
  // )
  // getWarnings({

  // })

  render() {
    return (
      <main>
        <h1 className="usertitle">ANDERHALVE METER</h1>
        <h2 className="user">
          dear user, these are the warnings you got since dateof signup please
          be carefull and step back from the people around you. Even if others
          do not keep a distance be the one to walk away, step aside, turn
          around. Take care of yourself and the people around you. Stop covid-19
          from spreading.these are some video's to inform yourself on covid-19.
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

export default UserContainer;
