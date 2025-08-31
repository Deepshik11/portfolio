import dbConnect from "../lib/dbConnect.js";
import Visitor from "../models/Visitor.js";

export default async function handler(req, res) {
  const allowedOrigins = [
    "http://localhost:5173", // dev
    "https://portfolio-sand-omega-58.vercel.app" // production
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization"
  );

  // ✅ Preflight with headers
  if (req.method === "OPTIONS") {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://portfolio-sand-omega-58.vercel.app",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization");
  return res.status(200).end();
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
