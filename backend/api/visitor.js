import express from "express";
import Visitor from "../models/Visitor.js";

const router = express.Router();


// POST → create visitor
router.post("/", async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET → fetch all visitors
// GET → fetch all visitors
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find({});
    res.status(200).json(visitors);  // ✅ just return array
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


export default router;
