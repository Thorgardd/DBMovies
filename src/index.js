import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
const body = document.body;
body.style = "background-color: black";
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
