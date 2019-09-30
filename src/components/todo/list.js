import React from "react";
import { When } from "../if";
import Form from "./form.js";
import Auth from "../auth/auth.js";

import "./todo.scss";
import { ToDoContext } from "./context.js";

export default class List extends React.Component {
  static contextType = ToDoContext;

  constructor(props) {
    super(props);
    this.state = { item: {}, editing: false };
  }

  toggleEdit = id => {
    let editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };

  render() {
    return (
      <>
        <div>
          <ul>
            {this.context.toDoList &&
              this.context.toDoList.map(item => (
                <li
                  className={`complete-${item.complete.toString()}`}
                  key={item.id}
                >
                  {/* <Auth capability="delete"> */}
                  <span onClick={() => this.context.toggleComplete(item.id)}>
                    {item.text}
                  </span>
                  {/* </Auth> */}
                  <Auth capability="update">
                    <button onClick={() => this.toggleEdit(item.id)}>
                      edit
                    </button>
                    <When condition={this.state.editing === item.id}>
                      <Form item={item} />
                    </When>
                  </Auth>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
