import React from 'react'

const Project = ({src,header1,header2,info,alt}) => {
  return (
    <div className="portfolio-project">
              <img src={src} alt={alt} className="portfolio-image"/>
              <span className="text-align-left project-name margin-top">
                {header1}
              </span>
              <span className="text-align-left project-name">
                {header2}
              </span>
              <p className="text-align-left project-info"> 
                {info}
              </p>
    </div>
  )
}

export default Project