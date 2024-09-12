import React from 'react';
import ReactDOM from 'react-dom';
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

// React Component

// const Header = () => {
//     return header
// }

//====================================================
// Or we can just return the JSX
const Header = () => {
    return (
        <header style={headerStyles}>
            <h1 className='headerH1'>{welcome}</h1>
            <p>{des}</p>
        </header> 
    )
}


const techs = ['HTML', 'CSS', 'JavaScript', 'Python']
const techsLoop = techs.map((tech) => <li>{tech}</li>)

const Main = () => {
    return (
        <main>
    <p>If you want to start with React</p>
    <ul>
      {techsLoop}
    </ul>

  <img src={reactLogo} alt="React Logo"/>



  </main>
    )
}

const App = () => {
    return (
       <>
         <Header/>
         <Main/>
       </>
    )
}


///---------- Need to render the above JSX to the root of index.html in the public folder --------------
const root = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, root)
