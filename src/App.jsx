// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx'
import { ProjectsMore } from './components/ProjectsMore.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project/:id" element={<ProjectsMore />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
