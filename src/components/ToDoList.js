import React from 'react';

import Task from "./Task";

const ToDoList = () => {
  return (
    <div class="todo-list">
      <h3>Task List:</h3>
      <p className="alert-info">No tasks on list.</p>
      <ul>
        <Task />
      </ul>
    </div>

  );
}

export default ToDoList;