import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/navbar/Navbar.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "flowbite/dist/flowbite.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
