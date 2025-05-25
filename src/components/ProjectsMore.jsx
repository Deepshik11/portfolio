import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navigate, useParams } from 'react-router-dom'
import  projects  from '../Project/MorProject.js';
import "../styles/projectmore.css"
import Footer from '../Section/Footer.jsx'

export const ProjectsMore = () => {
    const params = useParams();
    const project_presents = projects.some(project => project.route === params.id);
    const project = projects.find(project => project.route === params.id);
    if(!project_presents) {
        return <div>error not found</div>;
    }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <>
          <main className="shadow-wrapper pt-5">
            <h5 className="text-secondary aboutus1 text-uppercase text-center mt-5  pt-sm-5 pt-0">{project.webtype}</h5>
            <h4 className="display-4 text-uppercase fw-bold fs-1 text-white mt-4 mb-5 text-center" style={{letterSpacing:'1px'}}>{project.name}</h4>
            <div className="my-3">
                <img className='img-fluid rounded-3' style={{maxHeight:'600px', width:'100%'}} src={project.img} alt="" />
            </div>
            <h5 className="fw-bold text-white mt-4 fs-5">Project Summary :</h5>
            {project.long_discription.map((para, idx) => (
              <p className="lead mt-3" key={idx}>{para}</p>
            ))}

            <div className="fw-bold text-white fs-5">Key Points : </div>
                  <ul>
                      {project.keyPoints.map((keyPoint,index)=> (
                          <li className="mt-3 " style={{color:'gray'}} key={index}>{keyPoint}</li>
                      ))
                      }
                  </ul>
          <div className="d-flex gap-4 mt-5 justify-content-center">
              <a
                href={project.siteLink}
                className="btn btn-outline-light mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website <i className="fas fa-arrow-right text-secondary ms-2"></i>
              </a>

              {project.codeLink && (
                <a
                  href={project.codeLink}
                  className="btn btn-outline-light mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code <i className="fas fa-arrow-right text-secondary ms-2"></i>
                </a>
              )}
            </div>

            <hr style={{height:'1px',background:'white',border:'none'}}/>
              <div className="container py-4">
                <div className="row text-white gy-3">
                  <div className="col-6 col-lg-2">
                    <h6 className="text-uppercase fw-semibold">Type:</h6>
                    <p className="lead1">{project.type}</p>
                  </div>

                  <div className="col-6 col-lg-2">
                    <h6 className="text-uppercase fw-semibold">Year:</h6>
                    <p className="lead1">{project.year}</p>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <h6 className="text-uppercase fw-semibold">Role:</h6>
                    {project.role.map((roles, index) => (
                          <p className="lead1" key={index}>
                            {roles}
                          </p>
                      ))}
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <h6 className="text-uppercase fw-semibold">Breakpoints:</h6>
                    {project.breakpoints.map((b, index) => (
                          <p className="lead1" key={index}>
                            {b}
                          </p>
                      ))}
                  </div>

                  <div className="col-12">
                    <h6 className="text-uppercase fw-semibold">Technologies:</h6>
                    <div className="d-flex flex-wrap">
                      {project.tech.map((techs, index) => (
                          <p className="lead1" key={index}>
                            {techs}
                          </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <NavLink to={"/project"} className="btn btn-dark px-4 py-2 rounded-pill fw-medium">
                    Back to Projects
                  </NavLink>
                </div>
              </div>
          </main>
        </>
    )
}