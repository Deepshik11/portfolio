import dbConnect from "../lib/dbConnect.js";
import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

function setCors(res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "https://portfolio-sand-omega-58.vercel.app/"); // change * to your frontend URL if you want strict
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCors(res);   // ✅ always apply

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // ✅ handle preflight
  }

  await dbConnect();

  if (req.method === "GET") {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  }

  else if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: "Form parsing failed" });

      try {
        let imageUrl = "";
        if (files.img) {
          const result = await cloudinary.uploader.upload(files.img.filepath, {
            folder: "projects",
          });
          imageUrl = result.secure_url;
        }

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

        const project = new Project({ ...bodyData, img: imageUrl });
        const saved = await project.save();
        res.status(201).json(saved);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }

  else if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const deleted = await Project.findByIdAndDelete(id);
      if (deleted) res.status(200).json({ message: "Project deleted successfully" });
      else res.status(404).json({ message: "Project not found" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
