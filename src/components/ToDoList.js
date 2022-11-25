import React from 'react';

import Task from "./Task";



const ToDoList = ({ message, tasks, setTasks, setIsPopupActive, setEditId, setEditText, setMessage, filteredTasks }) => {


  return (
    <div className="todo-list">
      <h3>Tasks List:</h3>
      <p className="alert-info">{message}</p>
      <ul>
        <Task
          tasks={tasks}
          setTasks={setTasks}
          setIsPopupActive={setIsPopupActive}
          setEditId={setEditId}
          setEditText={setEditText}
          setMessage={setMessage}
          filteredTasks={filteredTasks}
        />
      </ul>

    </div>
  );
}

export default ToDoList;