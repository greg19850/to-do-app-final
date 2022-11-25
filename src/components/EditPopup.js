import React from 'react';


const EditPopup = ({ tasks, setTasks, editId, editText, setEditText, setIsPopupActive }) => {

  const handlePopupInputChange = (e) => setEditText(e.target.value);

  const handleEditAccept = (id) => {
    tasks = [...tasks];

    tasks.forEach(task => {
      if (task.id === id) {
        task.text = editText
      }
    })

    setTasks(tasks)
    setEditText("")
    setIsPopupActive(false)
  };

  const handleEditCancel = () => {
    setIsPopupActive(false)
  }

  return (
    <div className="popup">
      <h3>Edit Task:</h3>
      <div className="popup-body">
        <p className="popup-info"></p>
        <input type="text"
          className="popup-input"
          value={editText}
          onChange={handlePopupInputChange}
          placeholder="Enter new task content..." />
        <button className="popup-btn accept" onClick={() => handleEditAccept(editId)}>Confirm</button>
        <button className="popup-btn cancel" onClick={handleEditCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default EditPopup;