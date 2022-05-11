import React from 'react'
import portfolio from '../assets/portfolio.svg';
import smartBrain from '../assets/smartBrain.png';
import reactStore from '../assets/reactStore.png';
import petAPet from '../assets/petAPet.png';
import Project from '../components/Project';

const PortfolioPage = () => {
  return (
      <div id="portfoliopage">
        <div className="portfolio-header-container">
            {/* center */}
            <img src={portfolio} id="portfolioImage" alt="portfolio" />
            <h1 className="header portfolio-header">Portfolio</h1>
            </div>
            {/* to left */}
          <div className="portfolio-info-container">
            <Project 
              src={smartBrain} 
              alt="smartBrain" 
              header1="Smart Brain"
              header2="Face Recognition App"
              info="Tech used:
                ReactJs,NodeJs,PostgreSQL"/>
            <Project 
              src={reactStore} 
              alt="reactStore" 
              header1="React store"
              header2="E-commeerce platform"
              info="Tech used: 
                ReactJs,Firebase,StripeAPI"/>
            <Project 
              src={petAPet} 
              alt="petAPet" 
              header1="Pet a pet"
              header2="Pet Adoption Platform"
              info="Tech used: 
                ReactJs, NodeJs, MySQL"/>
          </div>
    </div>
  )
}

export default PortfolioPage