import React, { useState } from 'react'
import { FaBars , FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"
import './Navbar.scss'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className='contianer-navbar'>

      <h1 className='logo'>Mostafa Abdelkarem</h1>

      {/* screeen pc */}
      <ul className="pc-ul">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* site bar list mobil */}
      <section onClick={() => setNav(!nav)} >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </section>
      
      {/* screen mobil list*/}
      {nav && (
        <ul className="mo-ul">
          {links.map(({ id, link }) => (
            <li key={id}>
                <Link onClick={() => setNav(!nav)}
                      to={link} smooth duration={500}>
                  {link}
                </Link>
            </li>
          ))}
        </ul>
      )}

    </div>

  )
}

export default Navbar
