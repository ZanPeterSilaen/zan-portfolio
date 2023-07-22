import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/zan-peter-688367205/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/ZanPeterSilaen" target="_blank"><BsGithub /></a>
            <a href="https://www.instagram.com/zaan.ps" target="_blank"><BsInstagram /></a>
        </div >
    )
}

export default HeaderSocials