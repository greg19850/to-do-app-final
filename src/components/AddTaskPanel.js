import React, { Component } from 'react';

class AddTaskPanel extends Component {

  state = {
    newTask: ""
  }

  handleInputTextChange = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleAddTaskToList = () => {
    console.log(this.props);
    const { newTask } = this.state;

    const add = this.props.addTask(newTask)

    if (add) {
      this.setState({
        newTask: ""
      })
    }
  }

  render() {
    return (
      <div className="add-task">
        <h1>ToDo List</h1>
        <input type="text" className="todo-input" value={this.state.newTask} onChange={this.handleInputTextChange} placeholder="Add Task..." />
        <button className="add-btn" onClick={this.handleAddTaskToList}>Add</button>
      </div>
    );
  }

}

export default AddTaskPanel;