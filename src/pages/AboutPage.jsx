import React, {useRef, useEffect} from 'react'
import Button from '../components/Button';
import about from '../assets/about.svg';
import './pages.css';
import {useWindow} from '../hooks/useWindow';

const AboutPage = ({handlePageHeight,handlePageWidth}) => {
  const list =[
    "Developed learning techniques.",
    "Developed applications of different sizes.",
    "Managed processes inside a team.",
    "Worked in an agile environment.",
    ]
  const {isSmallScreen} = useWindow()
  const pageRef = useRef(null);

  useEffect(() => {
    const setPageSize = (event) => {
      console.log('b1')
      handlePageWidth(pageRef.current.offsetWidth);
      handlePageHeight(pageRef.current.offsetHeight);
      // var newWidth = window.innerWidth;
      // var newHeight = window.innerHeight; 
    }
    setPageSize()
    window.addEventListener('resize', setPageSize);
    return window.addEventListener('resize', setPageSize);

  },[])

  console.log(pageRef)
  return (
    <div id="aboutpage" data-scroll ref={pageRef}>
      {isSmallScreen &&
      <h1 className="header spread-text-grid">Over 2 years on the improvement journey</h1>
      }
        <div className= "flex-column-align text-container">
            {/* center */}
            {!isSmallScreen && <h1 className="header">Over 2 years on the improvement journey</h1>}
            {/* to left */}
            <ul>
                {list.map((item,index) => {
                    return <li className="paragraph" key={index}>{item}</li>
                })}
            </ul>
            <div className="button-group">
              <Button classes="blue-button" text="LinkedIn"/>
              <Button classes="m-left brown-button" text="Github"/>
              
            </div>
        </div>
        <div className="room-image-container">
          <img className={!isSmallScreen ? "room-image-big-screen" : ""} src={about} alt="about"/>
        </div>
    </div>
  )
}

export default AboutPage