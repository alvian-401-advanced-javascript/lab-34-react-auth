import React from "react";
import uuid from "uuid/v4";

export const ToDoContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count as a separate piece of state so the Counter component doesn't rely on the toDoList having a '.length' propery
      count: 0,
      toDoList: [],
      addItem: this.addItem,
      saveItem: this.saveItem,
      toggleComplete: this.toggleComplete
    };
  }

  // adds an item object to the todo list array
  addItem = item => {
    item.id = uuid();
    this.setState({
      toDoList: [...this.state.toDoList, item],
      count: this.state.toDoList.length + 1
    });
  };

  // updates a single item in the todo list array
  saveItem = updatedItem => {
    this.setState({
      toDoList: this.state.toDoList.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    });
  };

  // makes an items complete property toggle true/false
  toggleComplete = id => {
    let item = this.state.toDoList.filter(i => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  render() {
    return (
      <ToDoContext.Provider value={this.state}>
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}
