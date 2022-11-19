import React from 'react';


const Header = () => {
  return (
    <div className="header">
      <h1>ToDo List</h1>
      <input type="text" className="todo-input" placeholder="Type in your task..." />
      <button className="add-btn">Add</button>
    </div>
  );
}

export default Header;