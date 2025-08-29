import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import visitorRoutes from "./routes/visitor.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/visitors", visitorRoutes); 

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ DB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));