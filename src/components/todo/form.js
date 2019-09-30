import React from "react";
import { ToDoContext } from "../todo/context.js";

export default class Form extends React.Component {
  static contextType = ToDoContext;
  constructor(props) {
    super(props);
    // Some local componenet state to store the item being input or edited in a form
    this.state = { item: {} };
  }

  // Whenever an input has a change, set (component) state to match the current input field value
  handleInputChange = e => {
    let item = {
      text: e.target.value, // what's typed in the input
      complete: !!e.target.complete, // true if complete, false if not
      id: e.target.id || null // null if no id (values in the top form don't have id's yet)
    };
    this.setState({ item });
  };

  // Saves the item to the global context, toggles 'editing' in List state back to false - called within submitHandler
  updateItem = e => {
    this.context.saveItem(this.state.item);
    this.toggleEdit(this.state.item.id);
  };

  // Adds an item to the global context toDoList array
  addItem = e => {
    this.context.addItem(this.state.item);
  };

  // On form submit, handles the event with the appropriate function
  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    // the submithanlder is 'updateItem' for edits in the list or 'addItem' for items added in the top form)
    let submitHandler = (this.props.item && this.updateItem) || this.addItem;
    submitHandler();
  };

  render() {
    let item = this.props.item || {};
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            complete={(item.complete || false).toString()}
            defaultValue={item.text}
            id={item.id}
            onChange={this.handleInputChange}
            placeholder="Add a new item"
          />
        </form>
      </div>
    );
  }
}
