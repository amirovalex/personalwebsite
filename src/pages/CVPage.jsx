import React from 'react'
import cvImage from '../assets/icons/cv.svg';
import cv from '../assets/cv.pdf';
const CVPage = () => {
  return (
      <div id="cvpage">
      <div className="cv-page-container">
          {/* center */}
          
          </div>
          {/* to left */}
        <a href={cv} download="Sasha Amirov CV.pdf">
        <div className="cv-container">
          <img src={cvImage} alt="CV"/>
          <h1 className="header portfolio-header cv-header">Download CV</h1>
        </div>
        </a>
    </div>
  )
}

export default CVPage