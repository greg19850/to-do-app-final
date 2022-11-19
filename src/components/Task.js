import React from 'react';


const Task = (props) => {
  const { id, text, active } = props.task

  return (
    <li className={!active ? "completed" : null} key={id}>{text} <div className="tools">
      <button
        className={!active ? "complete completed" : "complete"}
        onClick={() => props.change(id)}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        className="edit">
        EDIT
      </button>
      <button className="delete"
        onClick={() => props.deleteTask(id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
    </li>
  );
}

export default Task;