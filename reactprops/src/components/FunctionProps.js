import React from 'react'


//button component

const Button = (props) => {
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

// The FunctionProps, or the partent or the container component
// Functional Component
function FunctionProps() {
    const sayHi = () => {
        // alert('HI')
        alert(new Date())
    }


  return (
    <div>
        <Button text="Say Hi" onClick={sayHi}/>
    </div>
  )
}

export default FunctionProps