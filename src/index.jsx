import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Planner from './Planner.jsx';
import KTestr from './ktestr'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ActivitySetter from './ActivitySetter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/planner",
    element: <Planner/>
  },
  {
    path: "/ktestr",
    element: <KTestr/>
  },
  {
    path: "/activitysetter",
    element: <ActivitySetter/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
