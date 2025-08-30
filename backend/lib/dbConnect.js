import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = conn.connections[0].readyState === 1;
    console.log("MongoDB connected:", conn.connection.host);
  } catch (err) {
    console.error("Database connection failed:", err);
    throw new Error("Database connection failed");
  }
};
