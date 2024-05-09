import React from 'react';
import './popup.scss';

const Popup = ({ isOpen, closePopup, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
