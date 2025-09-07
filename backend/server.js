import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import projectsRouter from "./api/projectRoutes.js";
import visitorsRouter from "./api/Visitor.js";

dotenv.config();

const app = express();

// ---------- DB CONNECTION DIRECT ----------
try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
} catch (err) {
  console.error("Database connection failed:", err.message);
  // ❌ Don't use process.exit(1) in serverless — it kills the function
}

// ---------- MIDDLEWARE ----------
app.use(
  cors({
    origin: process.env.CLIENT_URL,   // one allowed origin
    credentials: true
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

// ---------- EXPORT APP FOR VERCEL ----------
export default app;
