import React from 'react'
import './components.css';
import arrow from '../assets/arrow.svg';

const NextButton = ({page}) => {
  return (
    <div id="nextButton">
        <span>{page >= 7 ? "Click to return to start" : "Next"}</span>
        <img src={arrow} style={{transform:page >= 7 ? "rotate(-90deg)" : "rotate(0deg)"}} alt="next"/>
    </div>
  )
}

export default NextButton