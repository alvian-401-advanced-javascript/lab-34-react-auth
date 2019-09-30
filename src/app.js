import React from "react";

import Auth from "./components/auth/auth.js";
import LoginForm from "./components/auth/login-form.js";
import Counter from "./components/counter/counter.js";
import List from "./components/todo/list.js";
import Form from "./components/todo/form.js";

export default class App extends React.Component {
  render() {
    return (
      <section className="todo">
        <LoginForm />

        <Auth>
          <Counter />
        </Auth>

        <Auth capability="create">
          <Form />
        </Auth>

        <Auth>
          <List />
        </Auth>
      </section>
    );
  }
}
