import React, { useState,useEffect } from 'react';
import projects from '../Project/MorProject.js';
import { NavLink } from 'react-router-dom';
import '../styles/home.css';
import '../styles/project.css'
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../Section/Footer.jsx'

const Project = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  // Get all unique categories
  const allCategories = Array.from(
    new Set(projects.map(project => project.category))
  );
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  // Filter logic - FIXED
  const filteredProjects = selectedTech === "All"
    ? projects
    : projects.filter(project => project.category === selectedTech);

  return (
    <div className="shadow-wrapper pt-4 pb-2">
      <NavLink className='d-flex align-items-center gap-3 cus_stic mt-5 mb-3' to={"/home"} style={{textDecoration:'none'}}>
          <FaArrowLeft className='loicon' size={16} color="white" />
          <h6 className='text-white mb-0' >Back to Home</h6>
      </NavLink>
      <div className='about container d-flex flex-row justify-content-center' id='pro'>
        <div className='about5 mt-5'>
          <h1 className='head' style={{ textAlign: 'center', lineHeight: '60px' }}>My Projects</h1>
          <p className="text-center contend text-white" style={{fontSize:'16px'}}>
            Here are my projects I've worked on showcasing  my skills in both frontend and backend development
          </p>
        </div>  
      </div>

      {/* Category Filter Buttons */}
      <div className="my-4 d-flex flex-wrap gap-4 justify-content-center">
          {["All", ...allCategories].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedTech(category)}
              className={`cat-button ${selectedTech === category ? "active1" : ""}`}
            >
              {category}
            </button>
          ))}
      </div>
      {/* Project Cards */}
      <div className="row cu_con d-flex justify-content-around justify-content-md-center justify-content-xl-start mt-5 gap-5 mb-5">
        {filteredProjects.map((project) => (
          <NavLink to={`/project/${project.route}`} className="cus_card rounded-3"  key={project.name} style={{width: "17.5rem",textDecoration:'none'}}>
            <img className="card-img-top" src={project.img} style={{height:'200px'}} alt="Card image cap" />
            <div className="card-body p-2">
              <h5 className="card-title px-2 mt-2 fw-bold" style={{color:'white'}}>{project.name}</h5>
              <p className="card-text px-2 mt-3" style={{color:'white',fontSize:'16px'}}> {project.short_discription.length > 70? project.short_discription.slice(0, 70) + '...': project.short_discription}</p>
                 <div className="d-flex flex-wrap gap-2 px-2 mt-3">
                    {project.tech.slice(0,3).map((techs, index) => (
                      <span className="badge btn-sm bg-secondary text-white p-2" key={index}>
                        {techs}
                      </span>
                    ))}
                  </div>
            </div>
            <NavLink to={`/project/${project.route}`} className="btn dum_b btn-sm me-2 mt-3 mx-3 mb-4">Know More</NavLink>
          </NavLink>
        ))}
      </div>

      
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Project;
