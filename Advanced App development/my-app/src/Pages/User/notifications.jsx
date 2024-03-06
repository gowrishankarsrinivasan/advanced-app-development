import React from "react";

const Notifications = () => {
  return (
    <div className="notification-wrapper">
      <div className="notification-container">
        <h1>Notification Page</h1>
        <button onClick={() => addNotification("Hello, world!", "info")}>
          Show Notification
        </button>
        <div>
          {notifications.map((notification, index) => (
            <div key={index} className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
