import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ZAN PETER</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="expirience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/zan-peter-688367205/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ZanPeterSilaen" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/zaan.ps" target="_blank"><FiInstagram /></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Zan Peter Silaen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer