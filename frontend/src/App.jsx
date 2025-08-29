// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx'
import { ProjectsMore } from './components/ProjectsMore.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './components/ErrorPage.jsx';
import Admin from './components/Admin.jsx'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project/:id" element={<ProjectsMore />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
