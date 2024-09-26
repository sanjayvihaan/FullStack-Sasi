import React from 'react'


//Header Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <h2>{props.data.subtitle}</h2>
            <button>{props.data.btn}</button>
        </div>
    )
}

function ObjectProps() {
    const data =  {
        title: "This is a title",
        subtitle: "This is a subtitle",
        btn: "Learn More"
    }


  return (
    // <div>ObjectProps</div>
    <div>
        <Header data={data}/>
    </div>
  )
}

export default ObjectProps