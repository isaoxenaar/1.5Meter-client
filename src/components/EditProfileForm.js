import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "muicss/lib/react/button";
import { updateUser } from "../actions/updateUserAction";

class EditProfileForm extends Component {
  state = {
    username: "",
    profileUrl: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    const update = {
      username: this.state.username,
      profileUrl: this.state.profileUrl,
    };

    this.props.updateUser(this.props.loggedInUser.userId, update);
    this.setState({
      username: "",
      profileUrl: "",
    });
  };

  onChange = (event) => {
    const { value, name } = event.target;
    const update = { [name]: value };

    this.setState(update);
  };

  reset = () => {
    this.setState({ username: "", profileUrl: "" });
  };

  render() {
    return (
      <form className="editForm" onSubmit={this.onSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="profileUrl"
            name="profileUrl"
            value={this.state.profileUrl}
            onChange={this.onChange}
          />
        </div>
        <div>
          <Button>Edit Profile</Button>
        </div>
        {/* <Button onClick={this.reset}>reset</Button> */}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser,
  };
}

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
