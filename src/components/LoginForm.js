import React from "react";
//add reset button

export default class LoginForm extends React.Component {
  render() {
    return (
      <main>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Login email{" "}
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
              type="text"
            />
          </label>
          <label>
            Login password{" "}
            <input
              placeholder="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
              type="text"
            />{" "}
          </label>
          <button>Login</button>
        </form>
      </main>
    );
  }
}
