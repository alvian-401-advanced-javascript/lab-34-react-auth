import React from "react";
import { ToDoContext } from "../todo/context.js";

function Count() {
  return (
    <ToDoContext.Consumer>
      {context => {
        let defaultCount = "No tasks left to complete";
        let updatedCount = `You have ${context.count} tasks remaining${
          context.count === 1 ? "" : "s"
        }`;
        return (
          <div>
            <h2>{context.count > 0 ? updatedCount : defaultCount}</h2>
          </div>
        );
      }}
    </ToDoContext.Consumer>
  );
}

export default Count;
