import React from 'react'
import { useWindow } from '../hooks/useWindow';
import itcImage from '../assets/itc.svg'
const ITCPage = () => {

  const {isSmallScreen} = useWindow()
  return (
      <div id="itcpage" data-scroll>
      {isSmallScreen &&
      <h1 className="course-info-header spread-text-grid">Full Stack Developer Course: 
Zero To Mastery Academy</h1>
      }
      <div className="itc-image-container">
          <img className={!isSmallScreen ? "room-image-big-screen" : ""} src={itcImage} alt="courses"/>
        </div>
        <div className= "flex-column-align text-container">
            {/* center */}
            {!isSmallScreen && <h1 className="course-info-header">Full Stack Developer Course: 
Zero To Mastery Academy</h1>}
            {/* to left */}
          <p className="course-info-paragraph">A course during which I built full-stack projects with JS, HTML, CSS, ReactJs, NodeJs, PostgreSQL. The 
final project is a web application that connects to a face recognition API that looks for human faces on an image, presents the results to the user and stores the data into the database.</p>
          <p className="course-info-paragraph">Tech Used: Javascript, HTML, CSS, ReactJs, Redux, NodeJs + ExpressJs, Sass, PostgreSQL, MUI, React-Router.</p>
        </div>
                  
    </div>
  )
}

export default ITCPage