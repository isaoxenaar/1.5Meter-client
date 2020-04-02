import React from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";

export default class SignUpForm extends React.Component {
  render() {
    return (
      <div class="signupdiv">
        <form onSubmit={this.props.onSubmit}>
          <label>
            Signup email{" "}
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
              type="text"
            />{" "}
          </label>
          <label>
            Signup password{" "}
            <input
              placeholder="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
              type="text"
            />{" "}
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
