import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AOS  from 'aos'
import 'aos/dist/aos.css'
import './assets/bootstrap/bootstrap.css'
import './assets/slick/slick.min.css'
import './assets/themify-icons/themify-icons.css'
import './assets/js/script'
import './index.css';
import App from './App';

AOS.init({
  duration:1000
});

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
