import React from 'react';


const style = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '10px',
        padding: '10px',
        width: '30%',
    }
}


// Youtube Card Component
const YouTubeCard = (props) => {
    return (
        <div style={style.card}>
            <div>
            <img src={props.img} style={{width: "100%"}} alt="Video thumbnail" />
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.channel}</p>
            </div>
        </div>
    )
}

// I interviewed 30 students from a Tier 3 college - My learnings
// Harkirat Singh



function ReRender() {
  return (
    // <div>ReRender</div>
    <div style={{display: "flex"}}>
            <YouTubeCard img="https://shorturl.at/RRloM" title="I interviewed 30 students from a Tier 3 college - My learnings" channel="Harkirat Singh"/>
            <YouTubeCard img="https://shorturl.at/w0xVt" title="Redis Crash Course" channel="Piyush Garg"/>
            <YouTubeCard img="https://shorturl.at/w0xVt" title="Redis Crash Course" channel="Piyush Garg"/>
    </div>

  )
}

export default ReRender