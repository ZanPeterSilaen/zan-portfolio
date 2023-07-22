import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import {CgGames} from 'react-icons/cg'
const About = () => {
  return (
    <section id='about'>
      <h5>This Is</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Expirience</h5>
              <small>still in the learning process</small>
            </article>
            <article className='about__card'>
              <GiSkills className='about__icon' />
              <h5>My Skills?</h5>
              <small>Html, CSS, Javascript, React.js, Node.js, PHP, Laravel, C++</small>
            </article>
            <article className='about__card'>
              <CgGames className='about__icon' />
              <h5>My Hobby?</h5>
              <small>Football, Basketball, Pc games, Mobile Games, Photograph, Video Editing</small>
            </article>
          </div>
          <p>
          Currently a 7th semester student at Institut Teknologi Del, focusing on Web
          Development and have several experiences related to Problem Solving while
          studying at Institut Teknologi Del. Always interested to explore and
          understands something new especially Web Development.

          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About