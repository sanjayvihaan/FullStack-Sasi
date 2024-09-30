import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import BooleanProps from './components/BooleanProps'
import ArrayProps from './components/ArrayProps';
import ObjectProps from './components/ObjectProps';
import ObjectsProps from './components/ObjectsProps';
import FunctionProps from './components/FunctionProps';
import ReRender from './components/ReRender';

import State from './components/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BooleanProps />
    <ArrayProps />
    <ObjectProps />

    <ObjectsProps />

    <FunctionProps />

    <ReRender />

    <State />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
