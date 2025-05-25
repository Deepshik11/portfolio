import projects from "./project"
import examShelfImg from '../assets/project1.png'
import BoroImg from '../assets/project2.png'
import THBImg from '../assets/project3.png'
import Figma from '../assets/figma1.png'
import Musedo from '../assets/musedo.png'
import glass from '../assets/glass.png'
const Moreprojects=[
        {
        route : "examshelf",
        name : "ExamShelf",
        webtype:"Educational Web Application",
        type:'Group Project',
        year:2025,
        category: "Full Stack",
        role:['Full Stack Developer','UI/UX Designer'],
        breakpoints:['Desktop','Tablet','Mobile'],
        siteLink : "https://examshelf.vercel.app/",
        codeLink : "https://github.com/Admin-Examshelf/examshelf",
        img : examShelfImg ,
        short_discription : "Exam Shelf is an in-house college group project I led, focused on helping students prepare more effectively for exams by generating custom question papers based on previous year papers, topics, and difficulty levels.",
        long_discription :[ "Exam Shelf is an in-house college group project built to help students prepare more effectively for exams by allowing teachers to generate custom question papers based on previous year papers, selected topics, and difficulty levels, which students can only view." ,
                            " As a Full Stack Developer and UI/UX Designer, I contributed to this project by designing user-centric interfaces and developing functional modules using the MERN stack. I crafted high-fidelity wireframes and prototypes in Figma, ensuring a seamless user experience. On the development side, I built responsive frontend components using React, managed application logic with Node.js and Express.js, and handled data storage and retrieval with MongoDB. My contributions focused on creating reusable modules, optimizing performance, and ensuring clean, maintainable code across the stack."],
        tech : ["ReactJS", "CSS", "Bootstrap" ,"TanStack" ,"NodeJS","Express","MongoDB","GoogleAPI","EmailSender", "CORS" ] ,
        keyPoints : [
            "Based on Past Papers: The core feature allows paper generation from past exam patterns.",
            "Custom Paper Generator: Users can filter questions by topic, trend, and difficulty.",
            "Students : No login, view-only access to question papers.",
            "Teachers : Login required – can upload and generate question papers.",
            "Admins : Login required – can manage teachers and admin accounts.",
            "Modern, Scalable Stack: Built using React, Node, MongoDB, and integrated APIs for performance and flexibility."

        ]
    },
     {
        webtype:"E-commerce Website",
        route : "Borocelle",
        name : "Borocelle",
        type:'Individual Project',
        year:2023,
        role:["Front-End Developer","UI/UX Designer"],
        category: "Front-End",
        siteLink : "https://deepshik11.github.io/Borcelle/home.html",
        codeLink : "https://github.com/Deepshik11/Borcelle",
        img : BoroImg ,
        breakpoints:["Desktop"],
        short_discription : "Borcelle is a visually appealing desktop-optimized e-commerce website designed to showcase fashion and lifestyle products. This project was focused on crafting a clean and elegant interface specifically tailored for desktop users, with a fixed width layout that ensures pixel-perfect design fidelity at 1440px screen width.",
        long_discription:["Borcelle is a visually appealing desktop-optimized e-commerce website designed to showcase fashion and lifestyle products. This project was focused on crafting a clean and elegant interface specifically tailored for desktop users, with a fixed width layout that ensures pixel-perfect design fidelity at 1440px screen width.",
            "In addition to the visual design, the project includes frontend form validation using JavaScript, specifically implementing email format checks to provide instant feedback and prevent invalid form submissions. This enhances the overall user experience by reducing errors and improving data quality. This self-initiated project helped strengthen my skills in layout design, UI development, and basic frontend validation techniques."
        ],
        tech : ["HTML", "CSS", "JavaScript","UI Design","Product Grid Layouts","Form Handling" ] ,
        keyPoints : [
            "Designed exclusively for desktop view with a fixed-width layout for screens around 1440px, ensuring consistent visual presentation.",
            "Clean and sophisticated UI that highlights product images, descriptions, and pricing clearly to enhance user engagement.",
            "Utilized HTML5 and CSS3 to build semantic, accessible markup with modern styling techniques.",
            "Developed frontend form validation including email format validation using JavaScript to provide instant user feedback and reduce invalid submissions.",
            "Practiced web design principles such as visual hierarchy, typography, and whitespace management focused on desktop user behavior."
        ]
    },
     {
        webtype:'Cloning Projects',
        route : "THB-clone",
        name : "THB-Clone",
        category: "Front-End",
        type:'Individual Project',
        role:["Front-End Developer"],
        year:2024,
        siteLink : "https://deepshik11.github.io/The-hub-bangalore/",
        codeLink : "https://github.com/Deepshik11/The-hub-bangalore",
        img : THBImg ,
        breakpoints:['Desktop','Tablet','Mobile'],
        short_discription : "This is a self-initiated frontend clone of the official website of The Hub Bengaluru , created  for educational and portfolio-building purposes. The aim of this project was to replicate the layout, structure, and design of the original website using only HTML, CSS, and JavaScript.",
        long_discription : ["This is a self-initiated front-end clone of the official website of The Hub Bengaluru, created for educational and portfolio-building purposes. The aim of this project was to replicate the layout, structure, and design of the original website using only HTML, CSS, and JavaScript.",
            "Note: This clone is built only for learning and showcasing my front-end development skills. All images and design inspiration are taken from www.thehubbengaluru.com, and all rights to the original content belong to its rightful owner."
        ],
        tech : ["HTML", "CSS", "JavaScript",'Media Queries',"Responsive Web Design" ] ,
        keyPoints : [
            "Recreated multiple sections such as hero banners, about, amenities, and contact.",
            "Designed the site layout to match the original while maintaining clean, responsive code.",
            "Built using clean, semantic HTML, modern CSS, and JavaScript for interactivity.",
            "Fully responsive design, optimized for different screen sizes including desktop, tablet, and mobile.",
        ]
    },
     {
        webtype:"Food Delivery App Design",
        route : "Pizza-app-design",
        name : "Pizza App Design",
        year:2024,
        type:"Individual Project",
        role:["UI/UX design"],
        category: "UI/UX",
        siteLink : "https://www.figma.com/community/file/1504900463298758485/basic-pizza-delivery-app-ui-design",
        codeLink : "",
        img : Figma ,
        breakpoints:['mobile'],
        short_discription : "This project showcases a basic UI/UX design for a pizza delivery mobile application, created using Figma. The design focuses on providing a seamless user experience, from browsing a pizza menu to placing orders efficiently. It includes essential app screens such as onboarding, login, product listing, cart, and checkout – all designed with user convenience and visual clarity in mind.",
        long_discription :[ "This project showcases a basic UI/UX design for a pizza delivery mobile application, created using Figma. The design focuses on providing a seamless user experience, from browsing a pizza menu to placing orders efficiently. It includes essential app screens such as onboarding, login, product listing, cart, and checkout – all designed with user convenience and visual clarity in mind.",
        "The goal was to create a clean, intuitive layout with user-friendly navigation, appealing to a wide range of users while maintaining a strong food-brand aesthetic. This design project demonstrates core UI/UX skills such as layout planning, icon usage, color theory, visual hierarchy, and mobile app design principles."],
        tech : ["Figma","Visual Design", "Mobile App UI Design","Layout Design & Spacing","Wireframing" ] ,
        keyPoints : [
            "Designed using Figma for mobile platforms (iOS/Android).",
            "Included key screens: Onboarding, Login, Home/Menu, Product Details, Cart, and Checkout.",
            "Applied UI principles like proper spacing, contrast, and button hierarchy.",
            "Created as a design exercise to strengthen app UI/UX fundamentals."
        ]
    },
    {
        webtype:"Tourism Website",
        route : "Museoedu",
        name : "Museoedu",
        year:2024,
        type:"Group Project",
        role:["Wix Developer"],
        category: "Others",
        siteLink : "https://www.museoedu.com/",
        codeLink : "",
        img : Musedo ,
        breakpoints:['Desktop','Tablet','Mobile'],
        short_discription : "MuseoEdu is a pioneering platform dedicated to transforming traditional museum experiences through digital innovation. The website offers a suite of services, including virtual tours, AI-driven archives, VR exhibits, and interactive educational tools, aiming to make cultural heritage more accessible and engaging for a global audience.",
        long_discription :[ "MuseoEdu is a pioneering platform dedicated to transforming traditional museum experiences through digital innovation. The website offers a suite of services, including virtual tours, AI-driven archives, VR exhibits, and interactive educational tools, aiming to make cultural heritage more accessible and engaging for a global audience.",
        "During my internship at Zuntra Digital Pvt. Ltd., I worked as a Wix Developer on MuseoEdu — a digital platform focused on delivering interactive museum experiences online. The website aims to make art, culture, and heritage accessible to students and educators through features like virtual tours, AI-powered exhibits, and educational resources."],
        tech : ["Figma","Wix","CSS","UI Design" ] ,
        keyPoints : [
            "Built and customized the website using Wix, ensuring a responsive design that adapts seamlessly across devices.",
            "Implemented interactive elements such as virtual tours and AI archives to enhance user engagement.",
            "Structured and organized content to highlight MuseoEdu's services, events, and educational resources effectively.",
            "Collaborating with designers and content managers to align the site with MuseoEdu's educational goals."
        ]
    },
    {
        webtype:'Interactive Visual Demo',
        route : "Glass Animation",
        name : "Glass Animation",
        category: "Front-End",
        type:'Individual Project',
        role:["Front-End Developer"],
        year:2024,
        siteLink : "https://deepshik11.github.io/Glass-Animation/",
        codeLink : "https://github.com/Deepshik11/Glass-Animation",
        img : glass ,
        breakpoints:['Desktop','Tablet','Mobile'],
        short_discription : "    Glass Animation is a personal project where I explored the glassmorphism design trend using HTML, CSS, and JavaScript. I designed a responsive single-page layout with a central glass-like card that interacts with the background and user scroll. The goal was to create a clean, futuristic UI focused purely on visual appeal and animation.",
        long_discription : ["    Glass Animation is a personal project where I explored the glassmorphism design trend using HTML, CSS, and JavaScript. I designed a responsive single-page layout with a central glass-like card that interacts with the background and user scroll. The goal was to create a clean, futuristic UI focused purely on visual appeal and animation.",
            "What makes this project special to me is how I used CSS blur effects and backdrop-filter to create a realistic frosted-glass look. I also added smooth scroll-based animations and color transitions, which helped me understand how visual motion can enhance user experience. This project gave me the chance to focus on aesthetics and fine-tune my front-end design skills.",
            "While I enjoyed building this, I also realized some limitations. The heavy use of CSS filters affects performance on low-end devices, and the glass effect can reduce text readability in some cases. Also, since this project is mainly design-focused, it doesn’t have much functionality or interaction — something I plan to improve in future versions."
        ],
        tech : ["HTML", "CSS", "JavaScript",'Responsive Web Design',"UI/UX Design Principles" ] ,
        keyPoints : [
            "Implements the glassmorphism design trend using modern CSS effects like backdrop-filter and blur.",
            "Features a central glass-like card with smooth scroll-triggered color and background animations.",
            "Serves as a creative design experiment rather than a full-fledged functional website.",
            "Includes a dynamic color change option that alters the card’s hues, enhancing interactivity and visual appeal.",
        ]
    },
]
export default Moreprojects 