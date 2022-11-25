import React, { useState, useEffect } from 'react';

import AddTaskPanel from "./AddTaskPanel";
import ToDoList from "./ToDoList";
import EditPopup from "./EditPopup"

import './App.scss';

const App = () => {



  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'Eat',
    //   active: true,
    // },
    // {
    //   id: 2,
    //   text: 'Sleep',
    //   active: true,
    // },
    // {
    //   id: 3,
    //   text: 'Train',
    //   active: true,
    // }
  ]);
  const [taskText, setTaskText] = useState("");
  const [status, setStatus] = useState("all")
  const [message, setMessage] = useState("No Tasks On List.");
  const [taskId, setTaskId] = useState(4);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const handleFilterTasks = () => {
      switch (status) {
        case "active":
          const activeTasks = tasks.filter(task => task.active);
          setFilteredTasks(activeTasks)
          break;
        case "complete":
          const completeTasks = tasks.filter(task => !task.active);
          setFilteredTasks(completeTasks)
          break;
        default:
          setFilteredTasks(tasks)
      }
    };
    handleFilterTasks()
  }, [tasks, status]);



  return (
    <div className="todo" >
      <h1>ToDo List</h1>
      <AddTaskPanel
        tasks={tasks}
        setTasks={setTasks}
        setStatus={setStatus}
        taskText={taskText}
        setTaskText={setTaskText}
        taskId={taskId}
        setTaskId={setTaskId}
        setMessage={setMessage}
        setFilteredTasks={setFilteredTasks}
      />
      <ToDoList
        tasks={tasks}
        setTasks={setTasks}
        message={message}
        setMessage={setMessage}
        setIsPopupActive={setIsPopupActive}
        setEditId={setEditId}
        setEditText={setEditText}
        filteredTasks={filteredTasks}
      />
      {isPopupActive
        &&
        <EditPopup
          tasks={tasks}
          setTasks={setTasks}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          setIsPopupActive={setIsPopupActive}
        />}
    </div>
  );
}

export default App;