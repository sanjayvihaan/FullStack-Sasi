import React from 'react';
import Header from './components/Header.js'

function App() {

  //Function Syntax - earlier way
  const getUserInfo = (name, country, email) => {
    return `${name} ${country} ${email}`
  }
  getUserInfo("sanjay", "India", "sanjay@gmail.com")

  // User Component, component should start with an uppercase - new way
  const User = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.country}</p>
        <p>{props.email}</p>
      </div>
    )
  }



  // Injecting Data into JSX - Old

  const welcome = "Welcome to React Course"
  const des = "React is JavaScript Framework"
  const date = 'Sep 19, 2024'

  const Headers = () =>{
        return (
          <>
          <header>
            <h1>{welcome}</h1>
            <p>{des}</p>
            <small>{date}</small>
          </header> 
        </>
        )
  }









  return (
    <>
      <h1>Hey</h1>
      <User name=' Sanjay' country='India' email='sanjay@gmail.com'/>
     

    <Headers />

    <Header welcome="Leaning React Framework" country="India" />
    </>




  );
}

export default App;
