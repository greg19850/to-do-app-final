import React from 'react';
import Task from "./Task";

const ToDoList = (props) => {
  const { changeStatus, activatePopup, deleteTask, message } = props

  const tasks = props.tasks.map(task => (
    <Task key={task.id}
      task={task}
      changeStatus={changeStatus}
      activatePopup={activatePopup}
      deleteTask={deleteTask}
      active={task.active}
    />
  ));

  return (
    <div className="todo-list">
      <h3>Task List:</h3>
      <p className="alert-info">{message}</p>
      <ul>
        {tasks}
      </ul>

    </div>

  );
}

export default ToDoList;