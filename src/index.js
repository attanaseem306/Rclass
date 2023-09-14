import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './App';
import data from './data';
import TodoApp from './todo';
import Mera from './todo';
import Card from 'antd/es/card/Card';
import Sidebar from './Sidebar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Card/>
    <Sidebar/>
  </React.StrictMode>
);

reportWebVitals();
