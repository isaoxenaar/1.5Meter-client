import React from "react";
import Button from "muicss/lib/react/button";

//add reset button

export default class LoginForm extends React.Component {
  render() {
    return (
      <div class="logindiv">
        <form onSubmit={this.props.onSubmit}>
          <label>
            Login{" "}
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
              type="text"
            />
          </label>
          {"       "}
          <label>
            <input
              placeholder="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
              type="text"
            />{" "}
          </label>
          <Button color="white">Login</Button>
        </form>
      </div>
    );
  }
}
