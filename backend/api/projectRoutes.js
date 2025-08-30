import dbConnect from "../lib/dbConnect.js";
import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";
import formidable from "formidable";

// Disable Next.js/Vercel default body parsing so we can handle form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    // GET all projects
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  }

  else if (req.method === "POST") {
    // POST new project with image upload
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Form parsing failed" });
      }

      try {
        let imageUrl = "";

        if (files.img) {
          const result = await cloudinary.uploader.upload(files.img.filepath, {
            folder: "projects",
          });
          imageUrl = result.secure_url;
        }

        // Handle arrays (convert strings into arrays if needed)
        const bodyData = { ...fields };
        ["role", "breakpoints", "long_discription", "tech", "keyPoints"].forEach(
          (field) => {
            if (bodyData[field]) {
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
        res.status(201).json(saved);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      }
    });
  }

  else if (req.method === "DELETE") {
    // DELETE project by ID (expect ?id=123 in query)
    try {
      const { id } = req.query;
      const deleted = await Project.findByIdAndDelete(id);

      if (deleted) {
        res.status(200).json({ message: "Project deleted successfully" });
      } else {
        res.status(404).json({ message: "Project not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
