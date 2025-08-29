import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    route: { 
        type: String, 
        required: true
    }, 
    name: { 
        type: String, 
        required: true 
    },
    webtype: { 
        type: String 
    },
    type: { 
        type: String 
    },
    year: {
         type: Number 
    },
    category: { 
        type: String 
    },
    role: [{ 
        type: String 
    }],             
    breakpoints: [{ 
        type: String 
    }],      
    siteLink: { 
        type: String 
    },
    codeLink: { 
        type: String 
    },
    img: { 
        type: String 
    },                
    short_discription: { 
        type: String 
    },
    long_discription: [{ 
        type: String 
    }],
    tech: [{ 
        type: String 
    }],             
    keyPoints: [{ 
        type: String 
    }],        
}, { timestamps: true})

export default mongoose.model("Project", ProjectSchema);