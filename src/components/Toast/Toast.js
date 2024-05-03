import React, { useState, useEffect } from 'react';
import './Toast.scss';

const Toast = ({ message, showToast, duration = 3000 }) => { debugger;
  const [isVisible, setIsVisible] = useState(showToast);

  useEffect(() => {
    setIsVisible(showToast);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [showToast, duration]);

  return (
    <>
      {isVisible && (
        <div className="toast">
          <div className="toast-content">{message}</div>
        </div>
      )}
    </>
  );
};

export default Toast;
