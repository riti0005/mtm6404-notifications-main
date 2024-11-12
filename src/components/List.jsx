// src/components/NotificationList.jsx
import React from 'react';
import Item from './Item';

function List({ notifications, removeNotification }) {
  return (
    <div className="mx-auto shadow-lg">
      <div className="">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <Item 
              key={notification.id} 
              notification={notification} 
              removeNotification={removeNotification} 
            />
          ))
        ) : (
          <p className="text-center text-muted fs-4 py-3 bg-light rounded-3 shadow-sm border border-1 border-secondary">
            <i className="bi bi-bell-slash me-2"></i>
            No notifications to display.
          </p>
        )}
      </div>
    </div>
  );
}

export default List;
