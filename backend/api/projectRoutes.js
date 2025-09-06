import express from "express";
import cloudinary from "../config/cloudinary.js";
import Project from "../models/Project.js";
import { IncomingForm } from "formidable";


const router = express.Router();

// ---------- GET all projects ----------
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Add new project 

router.post("/", async (req, res) => {
  try {
    const form = new IncomingForm({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).json({ success: false, error: err.message });

      try {
        console.log("FIELDS:", fields);
        console.log("FILES:", files);

        const arrayKeys = ["role", "breakpoints", "long_discription", "tech", "keyPoints"];
        const clean = {};

        // unwrap Formidable fields
        for (const [k, v] of Object.entries(fields)) {
          if (Array.isArray(v)) {
            clean[k] = arrayKeys.includes(k) ? v : v[0];
          } else {
            clean[k] = v;
          }
        }

        if (clean.year) clean.year = Number(clean.year);

        // ---- Cloudinary upload ----
        if (files.img) {
          const fileObj = Array.isArray(files.img) ? files.img[0] : files.img;

          if (fileObj?.filepath) {
            const result = await cloudinary.uploader.upload(fileObj.filepath, {
              folder: "projects",
            });
            clean.img = result.secure_url;
          } else {
            console.warn("No filepath found on files.img");
          }
        }

        // ---- Mongo Save ----
        const newProject = new Project(clean);
        await newProject.save();

        res.status(201).json({ success: true, data: newProject });
      } catch (innerErr) {
        console.error("Error inside form.parse:", innerErr);
        res.status(500).json({ success: false, error: innerErr.message });
      }
    });
  } catch (outerErr) {
    console.error("Route error:", outerErr);
    res.status(500).json({ success: false, error: outerErr.message });
  }
});

// get one project 

// GET single project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

// ---------- DELETE project ----------
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (deleted) res.status(200).json({ message: "Project deleted successfully" });
    else res.status(404).json({ message: "Project not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
