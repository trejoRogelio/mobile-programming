import React, { useState, useEffect } from 'react';

const NotificationsComponent: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const showNotification = (message: string) => {
    setNotifications([...notifications, message]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotifications([]);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [notifications]);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
    </div>
  );
};

export default NotificationsComponent;