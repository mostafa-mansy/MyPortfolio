import React from 'react'
import HeroImage from "../../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"

import './Home.scss'

const Home = () => {
  return (
    <div name="home" className='container-home'>
        <header>

            <section className="section-left">
                <h2>I'm a Frontend Developer</h2>
                <p>
                    I have 1 years of experience building and desgining software.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Sass and Git.
                </p>

                <Link to="portfolio" smooth duration={500} className="button group">
                    Portfolio
                    <MdOutlineKeyboardArrowRight size={25} className="span group-hover:rotate-90" />
                </Link>
             
            </section>

            <section>
                <img src={HeroImage}alt="my profile"/>
            </section>

        </header>
    </div>
  )
}

export default Home
