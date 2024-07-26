// src/Components/Popup.js
import React from 'react';
import './Popup.css';

function Popup({ winner, closePopup }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close" onClick={closePopup}>X</button>
        <h1>Winner: {winner}</h1>
      </div>
    </div>
  );
}

export default Popup;
