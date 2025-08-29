import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
import "../styles/project.css";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../Section/Footer.jsx";

const Project = () => {
  const [projects, setProjects] = useState([]); // store DB projects
  const [categories, setCategories] = useState([]); // ✅ store DB categories
  const [selectedTech, setSelectedTech] = useState("All");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch projects & categories from backend
  // ✅ Fetch projects from backend and extract categories
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();
      setProjects(data);

      // ✅ Extract unique categories from project data
      const uniqueCategories = Array.from(
        new Set(data.map((project) => project.category || "Uncategorized"))
      );
      setCategories(["All", ...uniqueCategories]); // prepend "All"
    } catch (err) {
      console.error("❌ Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
  window.scrollTo(0, 0);
}, []);

  // ✅ Filter logic
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.category === selectedTech);

  if (loading) {
    return (
      <div className="text-white text-center mt-5">
        <h3>Loading projects...</h3>
      </div>
    );
  }

  return (
    <div className="shadow-wrapper pt-4 pb-2">
      {/* Back button */}
      <NavLink
        className="d-flex align-items-center gap-3 cus_stic mt-5 mb-3"
        to={"/home"}
        style={{ textDecoration: "none" }}
      >
        <FaArrowLeft className="loicon" size={16} color="white" />
        <h6 className="text-white mb-0">Back</h6>
      </NavLink>

      {/* Title */}
      <div
        className="about container d-flex flex-row justify-content-center"
        id="pro"
      >
        <div className="about5 mt-5">
          <h1 className="head" style={{ textAlign: "center", lineHeight: "60px" }}>
            My Projects
          </h1>
          <p
            className="text-center contend text-white"
            style={{ fontSize: "16px" }}
          >
            Here are my projects I've worked on showcasing my skills in both{" "}
            <br />
            frontend and backend development
          </p>
        </div>
      </div>

      {/* ✅ Category Filter Buttons (updated) */}
     <div className="my-4 d-flex flex-wrap gap-4 justify-content-center">
  {categories.map((category) => (
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
        {filteredProjects.length === 0 ? (
          <p className="text-white text-center">No projects found.</p>
        ) : (
          filteredProjects.map((project) => (
            <NavLink
              to={`/project/${project._id}`} // ✅ use MongoDB ID
              className="cus_card rounded-3"
              key={project._id}
              style={{ width: "17.5rem", textDecoration: "none" }}
            >
              <img
                className="card-img-top"
                src={project.img || "https://via.placeholder.com/300x200"} // fallback image
                style={{ height: "200px" }}
                alt={project.name || "Project"}
              />
              <div className="card-body p-2">
                <h5
                  className="card-title px-2 mt-2 fw-bold"
                  style={{ color: "white" }}
                >
                  {project.name || "Untitled Project"}
                </h5>
                <p
                  className="card-text px-2 mt-3"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  {project.short_discription
                    ? project.short_discription.length > 70
                      ? project.short_discription.slice(0, 70) + "..."
                      : project.short_discription
                    : "No description available"}
                </p>
                <div className="d-flex flex-wrap gap-2 px-2 mt-3">
                  {project.tech?.length > 0 ? (
                    project.tech.slice(0, 3).map((techs, index) => (
                      <span
                        className="badge btn-sm bg-secondary text-white p-2"
                        key={index}
                      >
                        {techs}
                      </span>
                    ))
                  ) : (
                    <span className="badge bg-dark p-2">No tech listed</span>
                  )}
                </div>
              </div>
              <NavLink
                to={`/project/${project._id}`}
                className="btn dum_b btn-sm me-2 mt-3 mx-3 mb-4"
              >
                Know More
              </NavLink>
            </NavLink>
          ))
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project;
