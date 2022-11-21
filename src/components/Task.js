import React from 'react';


const Task = (props) => {
  const { id, text, active } = props.task
  const { changeStatus, activatePopup, deleteTask } = props

  return (
    <li className={!active ? "completed" : null} key={id}>{text} <div className="tools">
      <button
        className={!active ? "complete completed" : "complete"}
        onClick={() => changeStatus(id)}
      >
        <i className="fas fa-check"></i>
      </button>
      {/* <button
        className="edit"
        onClick={() => activatePopup(id)}
      >
        EDIT
      </button> */}
      <button className="delete"
        onClick={() => deleteTask(id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
    </li>
  );
}

export default Task;