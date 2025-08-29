import express from "express";
import Visitor from "../models/Visitor.js";

const router = express.Router();


// POST visitor data
router.post("/", async (req, res) => {
  try {
    const { section } = req.body;
    const visitor = new Visitor({
      page: section, // match frontend "section" to schema "page"
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      timestamp: new Date(),
    });
    await visitor.save();
    res.status(201).json({ message: "Visitor tracked successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all visitors (optional for testing)
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
