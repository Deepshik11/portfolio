import express from "express";
import Visitor from "../models/Visitor.js";

const router = express.Router();

// Save visitor
router.post("/", async (req, res) => {
  try {
    const { section, timestamp } = req.body;
    const visitor = new Visitor({ section, timestamp });
    await visitor.save();
    res.status(201).json({ message: "Visitor tracked successfully!" });
  } catch (error) {
    console.error("❌ Error saving visitor:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all visitors (optional for analytics)
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ timestamp: -1 });
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
