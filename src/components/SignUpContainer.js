import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/signupAction";
import SignUpForm from "./SignUpForm";

class SignUpContainer extends React.Component {
  state = { username: "", pictureUrl: "", email: "", password: "" };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      username: "",
      profileUrl: "",
      email: "",
      password: "",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <SignUpForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { addUser })(SignUpContainer);
