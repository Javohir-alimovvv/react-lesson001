import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>

            <div className="container">
                <div className='about__content'>
                    <li className='about__item'><a href="#"><span>Nature</span></a></li>
                    <li className='about__item'><a href="#"><span>Photography</span></a></li>
                    <li className='about__item'><a href="#"><span>Relaxation</span></a></li>
                    <li className='about__item'><a href="#"><span>Vacation</span></a></li>
                    <li className='about__item'><a href="#"><span>Travel</span></a></li>
                    <li className='about__item'><a href="#"><span>Adventure</span></a></li>
                </div>
            </div>

        </>
    )
}

export default About