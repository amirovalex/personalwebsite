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
        <div className= "flex-column-align text-container">
            {/* center */}
            {!isSmallScreen && <h1 className="course-info-header">Jama, Holon</h1>}
            {/* to left */}
          <p className="course-info-paragraph">A course during which I built full-stack projects with JS, HTML, CSS, ReactJs, NodeJs, PostgreSQL. The 
final project is a web application that connects to a face recognition API that looks for human faces on an image, presents the results to the user and stores the data into the database.</p>
          <p className="course-info-paragraph">Tech Used: Javascript, HTML, CSS, ReactJs, Redux, NodeJs + ExpressJs, Sass, PostgreSQL, MUI, React-Router.</p>
        </div>
                  <div className="itc-image-container">
          <img className={!isSmallScreen ? "room-image-big-screen" : ""} src={jama} alt="courses"/>
        </div>
    </div>
  )
}

export default JamaPage