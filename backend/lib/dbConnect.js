// lib/dbConnect.js
import mongoose from "mongoose";

let isConnected = false;

const dbConnect = async () => {
  if (isConnected) return;
  const db = await mongoose.connect(process.env.MONGO_URI);
  isConnected = db.connections[0].readyState;
  console.log("✅ MongoDB connected");
};

export default dbConnect;
