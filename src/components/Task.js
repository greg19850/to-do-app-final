import React from 'react';


const Task = () => {
  return (
    <li id="test">Buy Tea <div class="tools">
      <button class="complete"><i class="fas fa-check"></i></button><button
        class="edit">EDIT</button><button class="delete"><i class="fas fa-times"></i></button>
    </div>
    </li>
  );
}

export default Task;