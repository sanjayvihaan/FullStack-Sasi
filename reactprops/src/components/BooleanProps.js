import React from 'react'

const Status = (props) => {
    // ternary orperators to check the status of the person
    let Agecheck = props.status ? 'Old enough to drive' : 'Too young to drive'
    console.log(Agecheck)
    // if (status >= 18) {
    //     console.log('You can drive')    
    // }
    // else {
    //     console.log('You cannot drive')
    // }

    let age = props.age
    return(
        <div>
            <h1>{Agecheck} : {age}</h1>
        </div>
    )
}



function BooleanProps() {

    let currentYear = 2024
    let birthYear = 2004
    let age = currentYear - birthYear

    let status = age >= 18
    console.log(status)
    
  return (
    <div>
        <Status status={status} age={age}></Status>
    </div>
  )
}

export default BooleanProps