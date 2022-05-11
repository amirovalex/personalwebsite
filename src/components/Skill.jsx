import React from 'react'

const Skill = ({src,text}) => {
  return (
    <div className="skill">
        <img src={src} alt={text}/>
        <span className="skill-name">{text}</span>
    </div>
  )
}

export default Skill