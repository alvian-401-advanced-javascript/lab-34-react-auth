import React from "react";

import jwt from "jsonwebtoken";
import { LoginContext } from "./auth-context.js";

const If = props => {
  return !!props.condition ? props.children : null;
};

export default class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let user = this.context.token
      ? jwt.verify(this.context.token, process.env.REACT_APP_AUTH_SECRET)
      : {};
    console.log("user in auth.js:", user);
    let okToRender =
      this.context.loggedIn &&
      (this.props.capability
        ? user.capabilities.includes(this.props.capability)
        : true);

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}
