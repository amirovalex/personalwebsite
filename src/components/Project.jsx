import React from 'react'

const Project = ({src,header1,header2,info,alt,href}) => {
  return (
    <div className="portfolio-project">
      <a href={href}  target="_blank">
      <img src={src} alt={alt} className="portfolio-image"/>
      </a>
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