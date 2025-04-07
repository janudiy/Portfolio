import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/App.css"; // Import global styles
import "./styles/Navbar.css"; // Import Navbar styles
import "./styles/Footer.css"; // Import Footer styles
import "./styles/Home.css"; // Import Home styles
import "./styles/Projects.css"; // Import Projects styles
import "./styles/Contact.css"; // Import Contact styles
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
