import React from 'react'
import {useWindow} from '../hooks/useWindow';
import jama from '../assets/jama.svg';

const JamaPage = () => {
  const {isSmallScreen} = useWindow()
  return (
      <div id="jamapage">
      {isSmallScreen &&
      <h1 className="course-info-header spread-text-grid">Jama, Holon</h1>
      }
        <div className= "flex-column-align-left text-container">
            {/* center */}
            {!isSmallScreen && <h1 className="course-info-header">Jama, Holon</h1>}
            {/* to left */}
          <ul>
            <li className="jama-info-paragraph">
              Created a automation testing infrastructure.
            </li>
            <li className="jama-info-paragraph">
              Built a validation system for the forms inside the application.
            </li>
            <li className="jama-info-paragraph">
              Wrote documentation for different processes inside the application.
            </li>
            <li className="jama-info-paragraph">
              Fixed other performance and UI related issues
            </li>
          </ul>
          <p className="jama-info-paragraph">Stack Used: ReactJs, NodeJs, Firebase, Google Cloud.</p>
        </div>
                  <div className="itc-image-container">
          <img className={!isSmallScreen ? "room-image-big-screen" : ""} src={jama} alt="courses"/>
        </div>
    </div>
  )
}

export default JamaPage