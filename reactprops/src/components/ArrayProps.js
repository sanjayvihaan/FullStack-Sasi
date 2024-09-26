import React from 'react'

const Skills = (props) => {
    const mySkillLists = props.skills.map((skill) => <li>{skill}</li>)

    return(
        <ol>{mySkillLists}</ol>
    )
}



function ArrayProps() {
  return (
    <div>
        <Skills skills={['HTML', 'CSS', 'JS', 'React', 'NodeJS', 'Python']} />
    </div>
  )
}

export default ArrayProps