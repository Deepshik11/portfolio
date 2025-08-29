import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectFormModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    route: "",
    name: "",
    webtype: "",
    type: "",
    year: "",
    category: "",
    role: [""],
    breakpoints: [""],
    siteLink: "",
    codeLink: "",
    img: "",
    short_discription: "",
    long_discription: [""],
    tech: [""],
    keyPoints: [""],
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle array fields
  const handleArrayChange = (e, field, index) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = e.target.value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = new FormData();

    // Append normal fields
    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((val) => data.append(key, val));
      } else {
        data.append(key, formData[key]);
      }
    }

    // Send formData (with file)
    await axios.post("http://localhost:5000/api/projects", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    toast.success("Project saved successfully!");
    handleClose();
  } catch (error) {
    console.error(error);
    toast.error("Error saving project");
  }
};

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Basic fields */}
          <Form.Group className="mb-3">
            <Form.Label>Route</Form.Label>
            <Form.Control
              type="text"
              name="route"
              value={formData.route}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Web Type</Form.Label>
            <Form.Control
              type="text"
              name="webtype"
              value={formData.webtype}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="string"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Array fields */}
          {["role", "breakpoints", "long_discription", "tech", "keyPoints"].map(
            (field) => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label>{field}</Form.Label>
                {formData[field].map((val, idx) => (
                  <Form.Control
                    key={idx}
                    className="mb-2"
                    type="text"
                    value={val}
                    onChange={(e) => handleArrayChange(e, field, idx)}
                  />
                ))}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => addField(field)}
                >
                  + Add {field}
                </Button>
              </Form.Group>
            )
          )}

          {/* Links */}
          <Form.Group className="mb-3">
            <Form.Label>Site Link</Form.Label>
            <Form.Control
              type="url"
              name="siteLink"
              value={formData.siteLink}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Code Link</Form.Label>
            <Form.Control
              type="url"
              name="codeLink"
              value={formData.codeLink}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, img: e.target.files[0] })}
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="short_discription"
              value={formData.short_discription}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Project
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
