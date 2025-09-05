import React, { useEffect, useState } from "react";
import ProjectFormModal from './ProjectFormModal'
import { toast } from "react-hot-toast";
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaBell, FaUserCircle } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [show, setShow] = useState(false);

  // Fetch projects
  useEffect(() => {
    axios
      .get("https://portfolio-rjdm.vercel.app/api/projectRoutes")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Delete project
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://portfolio-rjdm.vercel.app/api/projectRoutes/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
      toast.success("Project deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete project!");
    }
  };

  // Fetch visitors
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await fetch("https://portfolio-rjdm.vercel.app/api/visitor");
        const data = await res.json();
        setVisitors(data);
      } catch (err) {
        console.error("Error fetching visitors:", err);
      }
    };
    fetchVisitors();
  }, []);

  // Prepare visitor data for charts
  const monthlyData = [];
  const countsByMonth = {};

  visitors.forEach((v) => {
    const date = new Date(v.timestamp);
    const month = date.toLocaleString("default", { month: "short" });
    countsByMonth[month] = (countsByMonth[month] || 0) + 1;
  });

  for (const month of Object.keys(countsByMonth)) {
    monthlyData.push({ month, count: countsByMonth[month] });
  }

  // Pie chart (overall visitors by page/project)
  const countsByPage = {};
  visitors.forEach((v) => {
    countsByPage[v.page] = (countsByPage[v.page] || 0) + 1;
  });
  const pieData = Object.entries(countsByPage).map(([page, count]) => ({
    name: page,
    value: count,
  }));

  


  const COLORS = [
    "#1f77b4",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#393b79",
    "#637939",
    "#8c6d31",
    "#843c39",
    "#7b4173",
    "#5254a3",
    "#6b6ecf",
    "#9c9ede",
    "#ad494a",
    "#a55194",
    "#636363",
  ];

  return (
    <>
    <Navbar  variant="dark" expand="lg" className="shadow-sm px-3">
      <Container fluid>
        {/* Logo / Title */}
        <Navbar.Brand href="/admin" className="fw-bold text-uppercase">
          Admin Dashboard
        </Navbar.Brand>

        {/* Right section */}
        <div className="d-flex align-items-center gap-3">
          {/* Search (optional) */}
          <Form className="d-none d-md-flex">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="sm">Search</Button>
          </Form>

          {/* Notification icon */}
          <FaBell size={20} color="white" style={{ cursor: "pointer" }} />

          {/* User dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="outline-light"
              id="dropdown-user"
              className="d-flex align-items-center border-0"
            >
              <FaUserCircle size={22} className="me-2" />
              Admin
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
      {/* Charts Section */}
      <div className=" shadow rounded-xl p-4 mb-10 pt-5">
        <h1 className=" mb-3 pt-2">Visitors Analytics</h1>

        <div className="d-flex mt-5 pt-2">
          {/* Pie Chart */}
          <div style={{ width: "45%" }}>
            <h3 className="font-medium mb-2 text-white text-center">Overall Visitors</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie data={pieData} outerRadius={150}>
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div style={{ width: "50%" }}>
            <h3 className="font-medium mb-5 text-white text-center">Monthly Visitors</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 🔹 Projects Section */}
      {/* 🔹 Projects Section */}
<div className=" shadow rounded-xl p-6 mb-10">
    <div className="d-flex justify-content-between mx-4 ">
      <h1 className="text-xl font-bold">My Projects</h1>
      <button
        className="btn btn-primary p-3"
        onClick={() => setShow(true)}
      >
        Upload Project
      </button>
       <ProjectFormModal show={show} handleClose={() => setShow(false)} />
    </div>

  <div className="row cu_con d-flex justify-content-around justify-content-md-center justify-content-xl-start mt-5 gap-5 mb-5">
    {projects.length === 0 ? (
      <p className="text-white text-center">No projects found.</p>
    ) : (
      projects.map((project) => (
        <NavLink
          className="cus_card rounded-3 bg-dark"
          key={project._id}
          style={{ width: "17.5rem", textDecoration: "none" }}
        >
          <img
            className="card-img-top"
            src={project.img || "https://via.placeholder.com/300x200"} // fallback image
            style={{ height: "200px", objectFit: "cover" }}
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
              <button
                    onClick={() => handleDelete(project._id)}
                    className="btn btn-danger ms-2 mt-4"
                  >
                    Delete
              </button>
          </div>
          </NavLink>
      ))
    )}
  </div>
</div>


    </>
  );
};

export default Admin;
