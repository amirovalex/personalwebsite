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
            {!isSmallScreen && <h1 className="course-info-header">Full Stack Developer Bootcamp: ITC / Tel Aviv</h1>}
            {/* to left */}
          <p className="course-info-paragraph">ITC’s Bootcamp is a full time training program during which I gained considerable knowledge in designing, building and testing Javascript applications in an agile environment where improving everyday was a must. I got the opporunity to work with an international team of talented developers to develop a taxi share application as part of the course ending Hackathon.</p>
          <p className="course-info-paragraph">Libraries Used: Firebase, MySQL, MUI, React-Router, Yup.</p>
        </div>
                  
    </div>
  )
}

export default ITCPage