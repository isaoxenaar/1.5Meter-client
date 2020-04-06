import React from "react";
// import Form from "muicss/lib/react/form";
// import Input from "muicss/lib/react/input";
// import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";

export default class SignUpForm extends React.Component {
  render() {
    return (
      <div class="signupdiv">
        <form onSubmit={this.props.onSubmit}>
          <label>
            Signup
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
              type="text"
            />
            {"       "}
          </label>
          <label>
            <input
              placeholder="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
              type="text"
            />{" "}
          </label>
          <label>
            <input
              placeholder="username"
              name="username"
              onChange={this.props.onChange}
              value={this.props.values.username}
              type="text"
            />{" "}
          </label>
          <label>
            <input
              placeholder="profileUrl"
              name="profileUrl"
              onChange={this.props.onChange}
              value={this.props.values.profileUrl}
              type="text"
            />{" "}
          </label>
          <Button color="white">Sign Up</Button>
        </form>
      </div>
    );
  }
}
