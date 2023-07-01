import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Test from './Test'
import ClickEvent from './Components/ClickEvent'
import StateInFnCom from './Components/StateInFnCom';
import StateInClassCom from './Components/StateInClassCom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test />
    <ClickEvent />
    <StateInFnCom />
    <StateInClassCom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
