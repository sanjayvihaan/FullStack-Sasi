import React from 'react'

//Time Function
const showDate = (time) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = months[time.getMonth()] // getMonth() returns the month (0-11)
    const year = time.getFullYear()
    const date = time.getDate()

    return `${month} ${date}, ${year}`
}

// Header Component
const Header = (props) => {
    return (
        <header>
            <h1>{props.data.welcome}</h1>
            <h2>{props.data.title}</h2>
            <h3>{props.data.subtitle}</h3>

            <p>{showDate(props.data.date)}</p>
        </header>
    )
}


function ObjectsProps() {

    const data =  {
        title: "This is a title",
        subtitle: "This is a subtitle",
        btn: "Learn More",
        date: new Date() // Date() is like a inbuild fuction
    };



  return (
    <div>
        <Header data={data}/>
    </div>
  )
}

export default ObjectsProps