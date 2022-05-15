import React, {useState} from 'react'
import {useWindow} from '../hooks/useWindow';
import courses from '../assets/courses.svg';

const CoursesPage = () => {

  const {isSmallScreen} = useWindow()
  return (
  <div id="coursespage" data-scroll>
      {isSmallScreen &&
      <h1 className="course-info-header spread-text-grid">Full Stack Developer + React Developer: Zero To Mastery Academy</h1>
      }
              <div className="course-image-container">
          <img className={!isSmallScreen ? "room-image-big-screen" : ""} src={courses} alt="courses"/>
        </div>
        <div className= "flex-column-align-right text-container">
            {/* center */}
            {!isSmallScreen && <h1 className="course-info-header">Full Stack Developer + React Developer: Zero To Mastery Academ</h1>}
            {/* to left */}
          <p className="course-info-paragraph">During these courses I learned React from scratch and got experience with different state management solutions and databases.</p>
          <p className="course-info-paragraph">Libraries Used: Firebase, Redux, ExpressJs, PostgreSQL, MUI, React-Router, Styled Components.</p>
        </div>
    </div>
  )
}

export default CoursesPage