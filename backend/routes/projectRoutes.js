import express from "express";
import Project from "../models/Project.js";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Multer setup (file upload)
const storage = multer.diskStorage({});
const upload = multer({ storage });

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find(); // should return []
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// POST new project
router.post("/", upload.single("img"), async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "projects", // optional: keeps things organized
      });
      imageUrl = result.secure_url;
    }

    // handle arrays properly (in case frontend sends them as strings)
    const bodyData = { ...req.body };
    ["role", "breakpoints", "long_discription", "tech", "keyPoints"].forEach(
      (field) => {
        if (bodyData[field] && typeof bodyData[field] === "string") {
          try {
            bodyData[field] = JSON.parse(bodyData[field]);
          } catch {
            bodyData[field] = [bodyData[field]];
          }
        }
      }
    );

    const project = new Project({
      ...bodyData,
      img: imageUrl,
    });

    const saved = await project.save();
    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get single project by ID
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

// DELETE project
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.json({ message: "Project deleted successfully" });
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;