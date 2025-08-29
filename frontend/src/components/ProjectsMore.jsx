import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink, useParams } from "react-router-dom";
import "../styles/projectmore.css";
import { FaArrowLeft } from "react-icons/fa";
import { trackVisitor } from "../utils/visitorTracker.js";

export const ProjectsMore = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch project details from backend
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`https://portfolio-rjdm.vercel.app/api/projects/${id}`);
        if (!res.ok) {
          throw new Error("Project not found");
        }
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("❌ Error fetching project:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
    window.scrollTo(0, 0);
  }, [id]);

  // ✅ Track visitor with project name once loaded
  useEffect(() => {
    if (project?.name) {
      trackVisitor(`${project.name}`);
    }
  }, [project]);

  // ✅ States
  if (loading) {
    return (
      <div className="text-white text-center mt-5">
        <h3>Loading project details...</h3>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="text-white text-center mt-5">
        <h3>❌ {error || "Project not found"}</h3>
      </div>
    );
  }

  return (
    <main className="shadow-wrapper pt-5">
      {/* Back button */}
      <NavLink
        className="d-flex align-items-center gap-3 cus_stic mt-5 mb-3"
        to={"/project"}
        style={{ textDecoration: "none", background: "none" }}
      >
        <FaArrowLeft className="loicon" size={16} color="white" />
        <h6 className="text-white mb-0">All Projects</h6>
      </NavLink>

      {/* Title */}
      <h5 className="text-secondary aboutus1 text-uppercase text-center mt-5 pt-sm-5 pt-0">
        {project.webtype || "Website"}
      </h5>

      <h4
        className="display-4 text-uppercase fw-bold fs-1 text-white mt-4 mb-5 text-center"
        style={{ letterSpacing: "1px" }}
      >
        {project.name || "Untitled Project"}
      </h4>

      {/* Image */}
      <div className="my-3">
        <img
          className="img-fluid rounded-3"
          style={{ maxHeight: "600px", width: "100%" }}
          src={project.img || "https://via.placeholder.com/800x400"}
          alt={project.name || "Project"}
        />
      </div>

      {/* Summary */}
      <h5 className="fw-bold text-white mt-4 fs-5">Project Summary :</h5>
      {project.long_discription?.length > 0 ? (
        project.long_discription.map((para, idx) => (
          <p className="lead mt-3" key={idx}>
            {para}
          </p>
        ))
      ) : (
        <p className="lead mt-3">No detailed description available.</p>
      )}

      {/* Key Points */}
      <div className="fw-bold text-white fs-5">Key Points :</div>
      <ul>
        {project.keyPoints?.length > 0 ? (
          project.keyPoints.map((keyPoint, index) => (
            <li className="mt-3" style={{ color: "#a2a4a6" }} key={index}>
              {keyPoint}
            </li>
          ))
        ) : (
          <li className="mt-3" style={{ color: "#a2a4a6" }}>
            No key points listed.
          </li>
        )}
      </ul>

      {/* Links */}
      <div className="d-flex gap-4 mt-5 justify-content-center">
        {project.siteLink && (
          <a
            href={project.siteLink}
            className="btn btn-outline-light mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website{" "}
            <i className="fas fa-arrow-right text-secondary ms-2"></i>
          </a>
        )}

        {project.codeLink && (
          <a
            href={project.codeLink}
            className="btn btn-outline-light mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code{" "}
            <i className="fas fa-arrow-right text-secondary ms-2"></i>
          </a>
        )}
      </div>

      <hr style={{ height: "1px", background: "white", border: "none" }} />

      {/* Details Grid */}
      <div className="container py-4">
        <div className="row text-white gy-3">
          <div className="col-6 col-lg-2">
            <h6 className="text-uppercase fw-semibold">Type:</h6>
            <p className="lead1">{project.type || "N/A"}</p>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-uppercase fw-semibold">Year:</h6>
            <p className="lead1">{project.year || "N/A"}</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="text-uppercase fw-semibold">Role:</h6>
            {project.role?.length > 0 ? (
              project.role.map((roles, index) => (
                <p className="lead1" key={index}>
                  {roles}
                </p>
              ))
            ) : (
              <p className="lead1">N/A</p>
            )}
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="text-uppercase fw-semibold">Breakpoints:</h6>
            {project.breakpoints?.length > 0 ? (
              project.breakpoints.map((b, index) => (
                <p className="lead1" key={index}>
                  {b}
                </p>
              ))
            ) : (
              <p className="lead1">N/A</p>
            )}
          </div>

          <div className="col-12">
            <h6 className="text-uppercase fw-semibold">Technologies used:</h6>
            <div className="d-flex flex-wrap">
              {project.tech?.length > 0 ? (
                project.tech.map((techs, index) => (
                  <p className="lead1" key={index}>
                    {techs}
                  </p>
                ))
              ) : (
                <p className="lead1">N/A</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
