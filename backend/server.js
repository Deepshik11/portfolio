import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import projectsRouter from "./api/projectRoutes.js";
import visitorsRouter from "./api/Visitor.js";

dotenv.config();

const app = express();

// ---------- DB CONNECTION ----------
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
};
await connectDB();

// ---------- MIDDLEWARE ----------
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

// ---------- ROUTES ----------
app.use("/api/projects", projectsRouter);
app.use("/api/visitors", visitorsRouter);

// ---------- ROOT ----------
app.get("/", (req, res) => {
  res.send("✅ API is running on Vercel!");
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

// ---------- EXPORT HANDLER FOR VERCEL ----------
export default (req, res) => app(req, res);
