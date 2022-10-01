import React from 'react'
import HeroImage from "../../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Home.scss'

const Home = () => {
  return (
    <div name="home" className='container-home'>
        <header>

            <section className="section-left">
                <h2>I'm a Frontend Developer</h2>
                <p>
                    I have 8 years of experience building and desgining software.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Next JS and GraphQL.
                </p>

                <div className="button group">

                    <button>Portfolio</button>
                    <MdOutlineKeyboardArrowRight size={25} className="span group-hover:rotate-90" />

                </div>
            </section>

            <section>
                <img src={HeroImage}alt="my profile"/>
            </section>

        </header>
    </div>
  )
}

export default Home
