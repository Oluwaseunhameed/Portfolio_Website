import { Monitor, Server, Layers } from "lucide-vue-next";

export const navItems = [
  { label: "Home", hash: "#home" },
  { label: "About Me", hash: "#about" },
  { label: "What I Do", hash: "#services" },
  { label: "Resume", hash: "#resume" },
  { label: "Portfolio", hash: "#portfolio" },
  { label: "Contact", hash: "#contact" },
];

export const socialLinks = [
  {
    icon: "Facebook",
    href: "https://web.facebook.com/seun.hameed1",
    label: "Facebook",
  },
  { icon: "Twitter", href: "#", label: "Twitter" },
  {
    icon: "Linkedin",
    href: "https://www.linkedin.com/in/oluwaseun-hameed-67a90771/",
    label: "LinkedIn",
  },
  {
    icon: "Github",
    href: "https://github.com/Oluwaseunhameed",
    label: "GitHub",
  },
];

export const colors = [
  { name: "indigo", rgb: "103 17 242" },
  { name: "blue", rgb: "1 123 255" },
  { name: "purple", rgb: "111 66 193" },
  { name: "cyan", rgb: "25 162 184" },
  { name: "red", rgb: "220 52 70" },
  { name: "pink", rgb: "232 62 140" },
  { name: "green", rgb: "40 167 68" },
  { name: "yellow", rgb: "255 193 6" },
  { name: "orange", rgb: "253 126 19" },
  { name: "brown", rgb: "121 86 71" },
];

export const COLOR_VAR = "--color-primary";
export const DEFAULT_COLOR = "32 201 150";

export const roles = [
  "I'm a Freelancer.",
  "I'm a Frontend Developer.",
  "I'm a Backend Developer.",
  "I'm a FullStack Developer.",
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "20+", label: "Languages / Frameworks" },
  { value: "10+", label: "Projects Done" },
  { value: "7", label: "Certificates" },
];

// =========== Services data =========== //

export const services = [
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "I build fast, responsive, and accessible user interfaces with clean, scalable component architecture. My focus is on performance, usability, and delivering pixel-perfect designs that translate business goals into great user experiences.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "I develop secure, scalable backend systems and APIs that power modern web applications. I focus on clean architecture, efficient data handling, and real-world performance.",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Solutions",
    description:
      "I deliver end-to-end web applications, handling everything from frontend interfaces to backend logic and databases. This allows me to ship production-ready solutions efficiently and with full ownership of the stack.",
  },
];

// =========== Resume data =========== //

export const education = [
  {
    period: "2007 - 2011",
    title: "Bachelor Degree",
    institution: "Fountain University, Osogbo Nigeria.",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim.",
  },
  // {
  //   period: "2015 - 2016",
  //   title: "Master Degree",
  //   institution: "University of Ibadan",
  //   description:
  //     "Lisque persius interesset his et, in quot quidam persequeris vim.",
  // },
];

export const experience = [
  {
    period: "2021 - Present",
    title: "Software Engineer",
    institution: "Carbon Financial Institute",
    description:
      "Build and maintain RESTful APIs consumed by frontend and mobile teams, supporting thousands of daily users with high reliability.",
  },
  {
    period: "2018 - 2021",
    title: "Frontend Developer",
    institution: "Decagon Software Institute",
    description:
      "Architected frontend application structure using React.js and Next.js, improving code reusability, maintainability and team productivity",
  },
  {
    period: "2013 - 2018",
    title: "Web Developer (Freelance)",
    institution: "Fiverr",
    description:
      "Completed 50+ client projects on Fiverr, delivering responsive websites and web applications using JavaScript, PHP, and MySQL.",
  },
  {
    period: "2011 - 2013",
    title: "Computer Instructor",
    institution: "Qalamtech Institute",
    description:
      "Taught web development courses (HTML, CSS, JavaScript, PHP) to aspiring developers in classroom and workshop settings.",
  },
];

export const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 85 },
  { name: "PHP", level: 85 },
  { name: "Java", level: 80 },
  { name: "React", level: 90 },
  { name: "FastAPI", level: 80 },
  { name: "Vue.js", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "Angular", level: 80 },
  { name: "Laravel", level: 80 },
  { name: "Database", level: 85 },
];

// ============ Portfolio data =========== //

export const portfolioCategories = [
  "All",
  "Frontend",
  "Fullstack",
  "Company Projects",
];

export const portfolioItems = [
  {
    id: 1,
    title: "Penora Blog Hub",
    category: "Fullstack",
    image: "/penora.png",
    description:
      "A refined blogging hub where stories come alive, idea flourish, and communities connect through the power of words.",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "Pyhton, Tailwind, FastAPI, MongoDB, Typescript",
    date: "Sep 29, 2025",
    url: "https://penora-frontend.onrender.com/",
  },
  {
    id: 2,
    title: "Learnify",
    category: "Fullstack",
    image: "/lms.png",
    description: "Learning Management System Platform",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "Next.js v15, Tailwind, PostgreSQL, Typescript",
    date: "Sep 1, 2025",
    url: "https://learnify-theta-blue.vercel.app/",
  },
  {
    id: 3,
    title: "E - Mart",
    category: "Fullstack",
    image: "/store2.png",
    description: "It's a multi-vendor ecommerce platform",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "Next.js v15, Tailwind, MongoDB",
    date: "December 29, 2024",
    url: "https://oh-e-mart.vercel.app/",
  },
  {
    id: 4,
    title: "Job Hub",
    category: "Fullstack",
    image: "/job.png",
    description: "A job portal web application",
    client: "Oluwaseun Hameed",
    industry: "Fullstack",
    technologies: "React.js, Tailwind, Express.js, MongoDB",
    date: "March 21, 2024",
    url: "https://oh-job-hub.onrender.com/",
  },
  {
    id: 5,
    title: "OH Admin Dashboard",
    category: "Fullstack",
    image: "ecommerce-admin-panel.png",
    description: "An ecommerce admin dashboard",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "Next.js v14, Tailwind, MongoDB",
    date: "Feb 11, 2024",
    url: "https://oh-store-admin.onrender.com/",
  },
  {
    id: 6,
    title: "Oh-ChatApp",
    category: "Fullstack",
    image: "/chat.png",
    description: "A mini chat web application",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "React.js, Tailwind, MongoDB, Express.js",
    date: "August 21, 2024",
    url: "https://oh-chatapp.onrender.com/",
  },
  {
    id: 7,
    title: "OH Store",
    category: "Frontend",
    image: "/dashboard.png",
    description: "An ecommerce dashboard",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "Vue3, Tailwind",
    date: "Jan 2, 2026",
    url: "https://ohstore-ecommerce-panel.netlify.app/",
  },
  {
    id: 8,
    title: "OH Portfolio",
    category: "Frontend",
    image: "/portfolio.png",
    description: "Portfolio Website",
    client: "Oluwaseun Hameed",
    industry: "Personal",
    technologies: "React.js, Tailwind",
    date: "Jan 1, 2025",
    url: "https://oh-portfolio.onrender.com/",
  },
  {
    id: 9,
    title: "Carbon",
    category: "Company Projects",
    image: "/carbon.png",
    description:
      "Developed and maintained the backend services for the mobile application, focusing on the onboarding process flow (KYC) and the loan management section, ensuring secure, efficient, and reliable data handling.",
    client: "Carbon",
    industry: "Carbon Fintech Mobile Application",
    technologies: "Node.js, Express.js, Java, Spring-boot, e.t.c",
    url: "https://getcarbon.co/",
  },
  {
    id: 10,
    title: "Decagon",
    category: "Company Projects",
    image: "/decagon.png",
    description:
      "Revamped the Decagon website by refactoring class components into modern React functional components with TypeScript and TailwindCSS, while integrating APIs to enhance interactivity and maintain seamless frontend performance.",
    client: "Decagon",
    industry: "Decagon Software Institute",
    technologies: "React.js, React Native, Tailwind, Typescript, Node.js",
    url: "https://decagonhq.com/",
  },
  {
    id: 11,
    title: "Zenfipay",
    category: "Company Projects",
    image: "/zenfipay.png",
    description:
      "Led the complete frontend development of Zenfipay, a modern finance web application, delivering a responsive, user-friendly, and visually engaging interface that streamlines financial interactions for users.",
    client: "Zenfipay",
    industry: "Zenfipay",
    technologies: "Next.js, Tailwind, Typescript",
    url: "https://zenfipay.com/",
  },
];

// ============ Testimonials data =========== //

export const testimonials = [
  {
    id: 1,
    name: "Jay Shah",
    role: "Founder at Icomatic Pvt Ltd",
    image: "/profile.jpeg",
    message:
      "Easy to work with and delivered everything on time. Highly recommended for professional web projects.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dennis Jacques",
    role: "User from USA",
    image: "/profile.jpeg",
    message:
      "Fantastic experience working together. Communication was clear and results exceeded expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "CEO at Webflow",
    image: "/profile.jpeg",
    message:
      "A highly skilled developer with strong attention to detail and performance.",
    rating: 5,
  },
];
