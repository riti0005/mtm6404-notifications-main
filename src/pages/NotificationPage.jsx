import React, { useState } from 'react';
import Data from '../notifications';
import List from '../components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import bellIcon from '../assets/images/notification-bell.png'; 
import './NotificationPage.css';

function NotificationPage() {
  const [notifications, setNotifications] = useState(Data);

  const removeNotification = (id) => {
    const notificationEl = document.getElementById(`notification-${id}`);
    if (notificationEl) {
      notificationEl.classList.add('fade-out');
      setTimeout(() => {
        setNotifications(notifications.filter(notification => notification.id !== id));
      }, 500); 
    }
  };
  
  const removeAllNotifications = () => {
    notifications.forEach(notification => {
      const notificationEl = document.getElementById(`notification-${notification.id}`);
      if (notificationEl) {
        notificationEl.classList.add('fade-out');
      }
    });
    setTimeout(() => {
      setNotifications([]);
    }, 300);
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center p-4 bg-FAF7F6 rounded shadow-lg w-1000" > 
      <h1 className="n-title">Notifications</h1> 
        <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="n-badge fs-5">
      <img src={bellIcon} alt="Bell Icon" />
      <span className="count">{notifications.length}</span>
    </span>
          <button 
            className="btn btn-danger py-1" 
            onClick={removeAllNotifications} 
            disabled={notifications.length === 0}
          >
            Clear All Notifications
          </button>
        </div>
  
        <List notifications={notifications} removeNotification={removeNotification} />
      </div>
    </div>
  );
  
}

export default NotificationPage;
