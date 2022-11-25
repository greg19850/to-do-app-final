import React from 'react';


const Task = ({ tasks, setTasks, setIsPopupActive, setEditId, setEditText, setMessage }) => {

  const handleTaskActiveStatus = (id) => {

    tasks = [...tasks];

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active
      }
    });

    setTasks(tasks)
  }

  const handleTaskDelete = (id) => {
    tasks = [...tasks];

    const index = tasks.findIndex(task => task.id === id);

    tasks.splice(index, 1);

    if (tasks.length === 0) setMessage("No Tasks On List.")

    setTasks(tasks);
  }

  const handleEditPopup = (id, taskText) => {
    setEditId(id);
    setEditText(taskText);

    setIsPopupActive(true);

  }

  const task = tasks.map(task => (
    <li key={task.id} className={!task.active ? "completed" : null} >{task.text} <div className="tools">
      <button
        className={!task.active ? "complete completed" : "complete"}
        onClick={() => handleTaskActiveStatus(task.id)}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        className="edit"
        onClick={() => handleEditPopup(task.id, task.text)}
      >
        EDIT
      </button>
      <button
        className="delete"
        onClick={() => handleTaskDelete(task.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
    </li>
  ));

  return (
    <>
      {task}
    </>
  );
}

export default Task;