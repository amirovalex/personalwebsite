import React from 'react'
import Skill from '../components/Skill';
import css from '../assets/icons/css.svg'
import figma from '../assets/icons/figma.svg'
import cv from '../assets/icons/cv.svg'
import docker from '../assets/icons/docker.svg'
import html from '../assets/icons/html.svg'
import javascript from '../assets/icons/javascript.svg'
import jest from '../assets/icons/jest.svg'
import k8s from '../assets/icons/k8s.svg'
import mongo from '../assets/icons/mongo.svg'
import mysql from '../assets/icons/mysql.svg'
import node from '../assets/icons/node.svg'
import postgre from '../assets/icons/postgre.svg'
import react from '../assets/icons/react.svg'
import {useWindow} from '../hooks/useWindow';

const SkillsPage = () => {
  const {isSmallScreen} = useWindow();
  return (
    <div id="skillspage">
      <div className="skills-header-container">
          {/* center */}
          <h1 className="header portfolio-header">Skills</h1>
          </div>
          {/* to left */}
        <div className="skills-container" style={{position: isSmallScreen ? "inherit" : "absolute"}}>
          <div className="skills-row-container">
            <span className="row-name">Front End:</span>
            <div className="skills-row">
              <Skill src={html} text="HTML"/>
              <Skill src={javascript} text="Javascript"/>
              <Skill src={css} text="CSS"/>
              <Skill src={react} text="React"/>
              <Skill src={figma} text="Figma"/>
            </div>
          </div>
          <div className="skills-row-container">
            <span className="row-name">Back End:</span>
            <div className="skills-row"> 
            <Skill src={postgre} text="PostgreSQL"/>
              <Skill src={node} text="NodeJs"/>
              <Skill src={mongo} text="MongoDB"/>
              <Skill src={mysql} text="MySQL"/>
              
              <Skill src={docker} text="Docker"/>
            </div>
          </div>
          <div className="skills-row-container">
            <span className="row-name">Testing:</span>
            <div className="skills-row">
              <Skill src={jest} text="Jest"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsPage