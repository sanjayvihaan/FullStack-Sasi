
import logo from './logo.svg'

// function name() {
//   console.log("Sanjay");
// }

// name(); // Way to call function


//================ Header Component - String Props ===================
// This is component of my header section like a layout or design
const Header = (props) => {
  console.log(props)

  const myStyle = {
    display: 'flex',
    'justify-content': 'space-around',
    'padding': '10px'
  }

  return (
    // My Header component - Layout
    <div style={myStyle}>
      <div style={{display: 'flex'}}>
        <a style={{display: 'flex'}} href="https://google.com">
          <img src={props.logo} width="100px"/>
          <h1>{props.title}</h1>
        </a>
      </div>
      <div>
        <ol style={myStyle}>
          {/* <li>{props.lists}</li> */}
          {props.lists.map((listItems, index) => (
            <li style={myStyle} key={index}>
              <a href={props.listUrls[index]}>
                {listItems}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}








function App() {
  // To render on the page
  const title = "React Website"
  const lists = ['Home', 'About', 'Contact', 'Integrations']
  const logo = ""

  const listUrls  = [
    "https://google.com",
    "https://youtube.com",
    "https://apple.com",
    "https://microsoft.com"
  ]


  return (

    // Which is calling my all the Components in the Div using <Header />
    <div className="App">
      <Header title={title} lists={lists} listUrls={listUrls} />
    </div>
  );
}

export default App;
