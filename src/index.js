import React from "react";
import ReactDOM from "react-dom";

import LoginContext from "./components/auth/auth-context.js";
import ToDoContext from "./components/todo/context.js";

import App from "./app.js";

class Main extends React.Component {
  render() {
    return (
      <LoginContext>
        <ToDoContext>
          <App />
        </ToDoContext>
      </LoginContext>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
