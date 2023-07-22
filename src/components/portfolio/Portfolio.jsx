import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>What i have done</h5>
            <h2>Project Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="image1" />
                    </div>
                    <h3>Del Programming Club(Statis)</h3>
                    <small>Building with basic HTML and CSS</small>
                    <div className="portfolio__item-cta">
                        <a href="https://youtu.be/YNlN16rTTpg" className='btn btn-primary' target="_blank">Video Demo</a>
                    </div>

                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="image2" />
                    </div>
                    <h3>Healthy Del(Klinik Del)</h3>
                    <small>Building with PHP Laravel</small>
                    <div className="portfolio__item-cta">
                        <a href="https://drive.google.com/file/d/1PhQe_Qb5wdyvdq8eyX_ODfTStetCl1Bl/view?usp=sharing" className='btn btn-primary' target="_blank">Video Demo</a>
                    </div>

                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="image3" />
                    </div>
                    <h3>Bank Soal Del</h3>
                    <small>Building with React.Js and Node.Js</small>
                    <div className="portfolio__item-cta">
                        <a href="https://youtu.be/E0ySt3IZY54" className='btn btn-primary' target="_blank">Video Demo</a>
                    </div>

                </article>
            </div>
        </section>
    )
}

export default Portfolio