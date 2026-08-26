import Sen from '../assets/image/Sen.jpg'
import Project1 from '../assets/image/C.png'
import A from '../assets/image/A.png'
import M1 from '../assets/image/M1.png'
import M2 from '../assets/image/M2.PNG'
import ETF from '../assets/image/ETF.png'
import MS from '../assets/image/MS.png'
import P from '../assets/image/P.png'
import HND from '../assets/image/HND.jpg'
import PM from '../assets/image/PM.png'
import G from '../assets/image/Ball.png'
export const LINKS = [
    { href: "#Profile", label: "Profile" },
    { href: "#Education", label: "Education" },
    { href: "#Projects", label: "Projects" },
    { href: "#Skills", label: "Skills" },
    { href: "#ContactMe", label: "Contact Me" },
];

export const PROFILE = {
    name: "SENARA VINHARIE JAYAWARDENA",
    introduction: "I am an undergraduate student in Information Technology at SLIIT City University, passionate about creating intuitive and engaging digital experiences. With a strong foundation in front-end development, UI/UX design, and problem-solving, I enjoy transforming ideas into user-centered interfaces that are both functional and visually appealing. Currently building my expertise as a UI/UX Engineer, I bring analytical thinking and creativity to every project I work on—from wireframes to interactive prototypes. My academic background has strengthened my skills in design thinking, usability testing, and modern development tools. Looking ahead, I’m excited to explore the intersection of design and cybersecurity. I am currently pursuing my Bachelor's degree in Computer Science at the University of Bedfordshire, UK.",
    image: Sen,
    resumeLinkText: "Download Resume",
    resumeLink: "/Senara jayawardena CV (1).pdf",
};

export const EDUCATION = [
    {
        level: "Higher National Diploma in Information Technology",
        school: "SLIIT City University",
        image: HND,
        year: "2023-2025",
    },
    {
        level: "G.C.E. Advanced Level",
        school: "Visakha Vidyalaya, Colombo 05.",
        image: A,
        year: "2020-2023",
    },
    {
        level: "Programming for Everybody (Getting Started with Python)",
        school: "University Of Michigan",
        image: M1,
        year: "2025-Oct",
    },
    {
        level: "Python Data Structures",
        school: "University Of Michigan",
        image: M2,
        year: "2025-Dec",
    },
    {
        level: "Foundations of Project Management",
        school: "Google",
        image: PM,
        year: "2026-Jul",
    },
];

export const PROJECTS = [
    {
        name: "SenaRts Cosmetic",
        description: "An E-commerce platform for high-quality cosmetic products with seamless user experience and secure transactions.",
        image: Project1,
        tools: "Adobe Dreamweaver, WAMP Server, MySQL",
        languages: "HTML, CSS, PHP, Bootstrap, JavaScript",
        link: "https://github.com/Senara-R",
    },
    {
        name: "Student Management System",
        description: "A comprehensive system designed to manage student records, course enrollments, and academic performance efficiently.",
        image: ETF,
        tools: "Adobe Dreamweaver, MySQL",
        languages: "HTML, CSS, Ajax, JQuery, JSON, MongoDb, Bootstrap, PHP",
        link: "https://github.com/Senara-R/Student-Management_System",
    },
    {
        name: "Project Management Tool",
        description: "A collaborative tool built to track project progress, assign tasks, and manage deadlines effectively.",
        image: MS,
        tools: "MySQL, WAMP Server, Visual Studio",
        languages: "HTML, CSS, PHP, SQL, Bootstrap, JavaScript",
        link: "https://github.com/Senara-R/Project-Management-Tool",
    },
    {
        name: "Professional Portfolio",
        description: "My personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
        image: P,
        tools: "Visual Studio Code",
        languages: "ReactJs, NodeJs, Tailwind CSS, Framer Motion",
        link: "https://github.com/Senara-R/My_Portfolio",
    },
     {
        name: "The Ball",
        description: "A game developed using PhaserJs, showcasing interactive gameplay and engaging graphics.",
        image: G,
        tools: "Adobe Dreamweaver, WAMP Server, MySQL",
        languages: "ReactJs, NodeJs, Firebase, PhaserJs",
        link: "https://github.com/Senara-R/Heart-Game",
    },
];

export const SKILLS = [
    { name: "HTML5", icon: "FaHtml5", color: "text-orange-500" },
    { name: "CSS3", icon: "FaCss3Alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "TbBrandJavascript", color: "text-yellow-400" },
    { name: "React", icon: "FaReact", color: "text-blue-400" },
    { name: "Node.js", icon: "FaNodeJs", color: "text-green-600" },
    { name: "Tailwind CSS", icon: "RiTailwindCssFill", color: "text-cyan-400" },
    { name: "PHP", icon: "FaPhp", color: "text-purple-600" },
    { name: "Python", icon: "FaPython", color: "text-blue-500" },
    { name: "Java", icon: "FaJava", color: "text-red-500" },
    { name: "MySQL", icon: "SiMysql", color: "text-blue-600" },
    { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
    { name: "Figma", icon: "FaFigma", color: "text-purple-500" },
];

export const CONTACT = {
    headline: "Let's Connect",
    description: "I'm always open to new opportunities, collaborations, or just a friendly chat about tech and design.",
    number: "+94 71 967 9463",
    email: "senaravinharie@gmail.com",
    address: "Malabe, Colombo",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/Senara-R",
            ariaLabel: "Follow me on GitHub",
            icon: "FaSquareGithub",
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/senara-jayawardena-554a66372/",
            ariaLabel: "Follow me on LinkedIn",
            icon: "CiLinkedin",
        },
    ],
    footerText: `@ ${new Date().getFullYear()} Senara Vinharie. All rights reserved.`,
};
