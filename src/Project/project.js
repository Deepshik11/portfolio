import examShelfImg from '../assets/project1.png'
import BoroImg from '../assets/project2.png'
import Figma from '../assets/figma1.png'
const projects = [
  {
    id: 1,
    subtitle:"Exam Shelf - 2025",
    title: "Education Platform",
    description1: "Built an in-house tool to generate and access past question papers easily.",
    description2: "A web app where teachers create and students view question papers.",
    description3: "Helps faculty design papers and students prepare with past exams.",
    link: "/project/examshelf",
    imageUrl:examShelfImg
  },
  {
    subtitle:"Borocelle - 2023",
    id: 2,
    title: "E-commerce Website",
    description1: "Designed for desktop only with fixed 1440px width to maintain consistent visual presentation.",
    description2: "Clean UI highlighting product images, descriptions, and pricing to enhance user engagement.",
    description3: "Utilized HTML5 and CSS3 to build semantic, accessible markup with modern styling techniques.",
    link: "/project/Borocelle",
    imageUrl:BoroImg
  },
  {
    id: 3,
    subtitle:"Pizza App - 2024",
    title: "Delivery App Design",
    description1: "Included key screens: Onboarding, Login, Home, Products, Cart, and Checkout.",
    description2: "Applied UI principles like proper spacing , contrast, and button hierarchy.",
    description3: "Created as a design exercise to strengthen app UI/UX fundamentals.",
    link: "/project/Pizza-app-design",
    imageUrl:Figma
  },

];

export default projects;
