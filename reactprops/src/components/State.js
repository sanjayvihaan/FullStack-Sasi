import React, { useState } from 'react'

function State() {
    // Defining state using the useState hook
    const [count, setCount] = useState(0)

    // Function to increment the count
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


  return (

        <div>
           <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button> 

        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        </div>

  )
}

export default State