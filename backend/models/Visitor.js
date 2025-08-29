import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    page: { 
        type: String, 
        required: true 
    },   
    ip: { 
        type: String 
    },                     
    userAgent: { 
        type: String 
    },              
    duration: { 
        type: Number, 
        default: 0 
    },   
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
}, { timestamps: true });

export default mongoose.model("Visitor", VisitorSchema);
