import React from 'react'
import '../styles/landing.css'
import profileImg from '../assets/profile_image.png'
import { NavLink } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="brand-container" role="banner">
        <img
          src={profileImg}
          alt="Deepshik PNG"
          className="image_hover mb-4"
          width="250"
          height="250"
        />
        <h1 className='m-4'>
          Hey, I'm in—it's <br /> Deepshik! :)
        </h1>
        <h2>"Music fuels my creativity during coding sessions."</h2>
        <NavLink to='/home'>
          <button className='but1 border-0 rounded mt-4'>Tap to view</button>
        </NavLink>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/deepshik-m/" target='_blank' className="icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Deepshik11?tab=repositories" target='_blank' className="icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.figma.com/@deepshikm" target='_blank' className="icon figma">
            <i className="fab fa-figma"></i>
          </a>
          <a href="https://www.instagram.com/_deepshik.17_/?next=%2F" target='_blank' className="icon x">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing
