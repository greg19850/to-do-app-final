import React from 'react';

import Header from "./Header";
import ToDoList from "./ToDoList";

import './App.scss';

const App = () => {
  return (
    <div className="todo">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;