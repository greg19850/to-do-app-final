import React from 'react';

import Header from "./Header";
import ToDoList from "./ToDoList";

import './App.css';

const App = () => {
  return (
    <div className="todo">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;