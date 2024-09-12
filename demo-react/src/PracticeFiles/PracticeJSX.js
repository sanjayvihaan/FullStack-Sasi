import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './images/react_logo.png'

const headerStyles = {
  backgroundColor: "orange",
  fontFamily: "Sans-serif",
  padding: 25,
}


// Injecting data to JSX elements:
const welcome = "This is a learning of React"
const des = "It is a Javascript Library"



//JSX (Javascript XML), Header

const header = (
  <header style={headerStyles}>
    <h1 className='headerH1'>{welcome}</h1>
    <p>{des}</p>
  </header>
)


// JSX, Main

const techs = ['HTML', 'CSS', 'JavaScript', 'Python']
const techsLoop = techs.map((tech) => <li>{tech}</li>)

const main = (
  <main>
    <p>If you want to start with React</p>
    <ul>
      {techsLoop}
    </ul>

  <img src={reactLogo} alt="React Logo"/>



  </main>
)


const footer = (
  <footer>
    <p>Copyright 2024 - Fita Academy</p>
  </footer>
)


const app =(
  <div>
    {header}
    {main}
    {footer}
  </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app, root);
  // <React.StrictMode>
  // </React.StrictMode>
