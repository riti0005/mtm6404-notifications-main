import React from 'react';
import './Item.css';
import bellIcon from '../assets/images/notification-bell.png'; 

function Item({ notification, removeNotification }) {
  return (
    <div id={`notification-${notification.id}`} className="bg-FAF7F6 item mt-2 border-bottom py-3 p-4 d-flex justify-content-between align-items-start">
      <div className="d-flex align-items-start">
        <img src={bellIcon} alt="Notification Bell" className="bell-icon me-3" /> 
        <div className="text-start flex-grow-1">
          <h6 className="mb-1 fw-bold">{notification.name}</h6>
          <p className="mb-0 text-muted text-wrap w-90">{notification.message}</p>
        </div>
      </div>
      <button
  className="btn btn-danger btn-sm align-self-start px-3 py-2 rounded-3 shadow-sm border-0 text-white fw-semibold d-flex align-items-center justify-content-center gap-2 transition-all"
  onClick={() => removeNotification(notification.id)}
>
  <i className="bi bi-trash-fill"></i> 
  Clear
</button>

    </div>
  );
}

export default Item;
