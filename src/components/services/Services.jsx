import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
    return (
        <section id='services'>
            <h5>I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using HTML and CSS</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using React.Js</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using HTML and CSS with Bootstrap</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using React.Js with Tailwind</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Backend Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using Node.Js</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using PHP</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using MySql</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className="service__head">
                        <h3>Fullstack Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using React.Js and Node.Js</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using HTML + CSS + PHP</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build using React.js + PHP</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services