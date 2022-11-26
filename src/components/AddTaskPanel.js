import React from 'react';

const AddTaskPanel = ({ tasks, setTasks, setStatus, taskText, setTaskText, taskId, setTaskId, setMessage, setFilteredTasks }) => {

  const handleInputTextChange = (e) => {
    setTaskText(e.target.value)
  }

  const handleAddTaskToList = () => {
    if (taskText.length > 2) {
      const task = {
        id: taskId,
        text: taskText,
        active: true,
      }

      setTaskId(prevValue => prevValue + 1)
      setTasks([...tasks, task]);
      setMessage("")
      setTaskText("")

    } else if (taskText && taskText.length <= 2) {
      setMessage("Task name requires at least 3 characters!")
    } else if (!taskText.length) {
      setMessage("Please enter task name!")
    }
  }

  const handleStatusChange = (e) => setStatus(e.target.value)

  return (
    <div className="add-task">
      < input
        type="text"
        className="todo-input"
        value={taskText}
        onChange={handleInputTextChange}
        placeholder="Add Task..."
      />
      <button
        className="btn add-btn"
        onClick={handleAddTaskToList}
      >
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <select className="btn select" onChange={handleStatusChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="complete">Complete</option>
      </select>
    </div >
  )
}

export default AddTaskPanel;