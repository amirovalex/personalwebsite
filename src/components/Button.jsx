import React from 'react'
import './components.css';
const Button = ({text,classes}) => {
  return (
    <div className={classes + " button"}>
        <span className="paragraph">{text}</span>
    </div>
  )
}

export default Button