import dbConnect from "../lib/dbConnect.js";
import Visitor from "../models/Visitor.js";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { section, timestamp } = req.body;
      const visitor = new Visitor({ section, timestamp });
      await visitor.save();
      res.status(201).json({ message: "Visitor tracked successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const visitors = await Visitor.find().sort({ timestamp: -1 });
      res.status(200).json(visitors);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
