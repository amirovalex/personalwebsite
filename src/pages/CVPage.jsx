import React from 'react'
import cv from '../assets/icons/cv.svg';

const CVPage = () => {
  return (
      <div id="cvpage">
      <div className="cv-page-container">
          {/* center */}
          
          </div>
          {/* to left */}
        <div className="cv-container">
          <img src={cv} alt="CV"/>
          <h1 className="header portfolio-header">Download CV</h1>
        </div>
    </div>
  )
}

export default CVPage