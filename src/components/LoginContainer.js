import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { checkLogin } from "../actions/loginAction";

class LoginContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.checkLogin(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { checkLogin };

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
