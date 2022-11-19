import React from 'react';


const EditPopup = (props) => {
  const { display } = props;
  return (
    <div style={{ display }} className="popup">
      <h3>Edit Task:</h3>
      <div className="popup-body">
        <p className="popup-info"></p>
        <input type="text" className="popup-input" placeholder="Enter new task content..." />
        <button className="popup-btn accept">Confirm</button>
        <button className="popup-btn cancel">Cancel</button>
      </div>
    </div>
  );
}

export default EditPopup;