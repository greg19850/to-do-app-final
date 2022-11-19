import React, { Component } from 'react';

import AddTaskPanel from "./AddTaskPanel";
import ToDoList from "./ToDoList";
import EditPopup from "./EditPopup";

import './App.scss';

class App extends Component {

  id = 4

  state = {
    tasks: [
      {
        id: 1,
        text: 'Do car service',
        active: true,
      },
      {
        id: 2,
        text: 'Buy tea',
        active: true,
      },
      {
        id: 3,
        text: 'Relax',
        active: true,
      },
    ],
    message: "No Tasks On List.",
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active;
      }
    })

    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })
  }

  addTask = (text) => {
    if (text.length > 2) {

      const newTask = {
        id: this.id,
        text,
        active: true,
      }
      this.id++

      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask],
        message: ""
      }))

      return true
    } else if (text.length && text.length <= 2) {
      this.setState(({
        message: "Task requires at least 3 characters!"
      }))
    } else if (!text.length) {
      this.setState(({
        message: "Please enter task text!"
      }))
    }

  }

  render() {
    return (
      <div className="todo" >
        <AddTaskPanel
          addTask={this.addTask}
          message={this.state.errorMessage}
        />
        <ToDoList
          tasks={this.state.tasks}
          change={this.changeTaskStatus}
          deleteTask={this.deleteTask}
          message={this.state.message}
        />
        <EditPopup />
      </div>
    );
  }
}

export default App;