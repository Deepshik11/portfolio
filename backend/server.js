import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import projectsRouter from "./api/projectRoutes.js";
import visitorsRouter from "./api/Visitor.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- DB CONNECTION DIRECT ----------
try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("✅ MongoDB connected");
} catch (err) {
  console.error("❌ Database connection failed:", err.message);
  process.exit(1); // stop server if DB fails
}

// ---------- CORS ----------
const allowedOrigins = [
  "http://localhost:5173", // dev
  "https://portfolio-sand-omega-58.vercel.app", // production
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// ---------- ROUTES ----------
app.use("/api/projects", projectsRouter);
app.use("/api/visitors", visitorsRouter);

// ---------- ROOT ----------
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
