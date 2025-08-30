import dbConnect from "../lib/dbConnect.js";
import Visitor from "../models/Visitor.js";

export default async function handler(req, res) {
  const allowedOrigin = "https://portfolio-sand-omega-58.vercel.app";

  // Common CORS headers
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization"
  );

  // Preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await dbConnect();
  } catch (err) {
    return res.status(500).json({ success: false, error: "Database connection failed" });
  }

  if (req.method === "POST") {
    try {
      const visitor = new Visitor(req.body);
      await visitor.save();
      return res.status(201).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const visitors = await Visitor.find({});
      return res.status(200).json({ success: true, data: visitors });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
