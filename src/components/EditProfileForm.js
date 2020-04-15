import React, { Component } from "react";
import { connect } from "react-redux";
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
  };

  onChange = (event) => {
    const { value, name } = event.target;
    const update = { [name]: value };

    this.setState(update);
  };

  reset = () => {
    this.setState({ logo: "", price: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          Username
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.price}
            onChange={this.onChange}
          />
        </div>
        <div>
          Profile Picture Url
          <input
            type="text"
            placeholder="profileUrl"
            name="profileUrl"
            value={this.state.profileUrl}
            onChange={this.onChange}
          />
        </div>
        <div>
          <button>Edit Profile</button>
        </div>
        <button onClick={this.reset}>reset</button>
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
