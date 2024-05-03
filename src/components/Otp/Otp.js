import React, { useState } from 'react';

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup-inner">
        {/* Popup content */}
        <h2>This is a Popup</h2>
        <p>Popup content goes here.</p>
      </div>
    </div>
  );
};

const Otp = () => {
  // State to manage whether the popup is shown or not
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {/* Button to toggle the popup */}
      <button onClick={() => setShowPopup(!showPopup)}>Toggle Popup</button>
      
      {/* Render the popup if showPopup is true */}
      {showPopup && <Popup />}
      
      {/* Additional content */}
      <div>
        <h1>Main Content</h1>
        <p>Other content in your application.</p>
      </div>
    </div>
  );
};

export default Otp;
