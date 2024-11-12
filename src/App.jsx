// src/App.jsx
import React, { useState } from 'react';
import notificationsData from './notifications';
import NotificationList from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import bellIcon from './assets/images/notification-bell.png'; 
import './App.css';
import NotificationPage from './pages/NotificationPage';
function App() {

  return (
    <div className="">
   <NotificationPage/>
    </div>
  );
  
}

export default App;
