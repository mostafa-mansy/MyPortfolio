import React from 'react'
import './Skills.scss'
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
/* import nextjs from "../../assets/nextjs.png"; */
/* import graphql from "../../assets/graphql.png"; */
import github from "../../assets/github.png";
import git from "../../assets/git.png";
import tailwind from "../../assets/tailwind.png";
import sass from "../../assets/sass.png";



const Skills = () => {
    const techno = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: sass,
          title: "SASS",
          style: "shadow-pink-400",
        },
        {
          id: 7,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 8,
          src: git,
          title: "Git",
          style: "shadow-white",
        }, 
      ];

  return (
    <div name="skills" className='container-skills'>

        <section>

            <div>
              <h1>Skills</h1>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="sqwer-skill">
              { techno.map(({ id, src, title, style }) => (
                <div key={id} className={`box shadow-md rounded-lg ${style}`} >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>

        </section>

    </div>
  )
}

export default Skills