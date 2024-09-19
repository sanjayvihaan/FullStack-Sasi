import React from 'react'

const Header = (props) => {
    console.log(props)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <p>{props.country}</p>
      </div>
    </header>
  )
}

export default Header