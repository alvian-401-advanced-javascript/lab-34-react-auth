import React from "react";

import { LoginContext } from "./auth-context.js";
import superagent from "superagent";

const API = process.env.REACT_APP_API_URL;

const If = props => {
  return !!props.condition ? props.children : null;
};

export default class loginForm extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(res => {
        let token = res.text;
        this.context.login(token);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <h3>You're logged in as: {this.state.username}</h3>
          <button onClick={this.context.logout}>Log Out</button>
        </If>
        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Log In" onChange={this.handleChange} />
          </form>
        </If>
      </>
    );
  }
}
