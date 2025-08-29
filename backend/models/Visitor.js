import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  section: { type: String, required: true },   // e.g. "Landing", "About"
  timestamp: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);
export default Visitor;