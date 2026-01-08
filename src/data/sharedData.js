import {
  Monitor,
  PenTool,
  Smartphone,
  BarChart,
  Settings,
  Megaphone,
} from "lucide-vue-next";

export const navItems = [
  { label: "Home", hash: "#home" },
  { label: "About Me", hash: "#about" },
  { label: "What I Do", hash: "#services" },
  { label: "Resume", hash: "#resume" },
  { label: "Portfolio", hash: "#portfolio" },
  { label: "Testimonial", hash: "#testimonials" },
  { label: "Contact", hash: "#contact" },
];

export const socialLinks = [
  { icon: "Facebook", href: "#", label: "Facebook" },
  { icon: "Twitter", href: "#", label: "Twitter" },
  { icon: "Linkedin", href: "#", label: "LinkedIn" },
  { icon: "Github", href: "#", label: "GitHub" },
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
  { value: "32+", label: "Projects Done" },
  { value: "38", label: "Certificates" },
];

// =========== Services data =========== //

export const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: BarChart,
    title: "Business Analysis",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: Settings,
    title: "SEO Marketing",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

// =========== Resume data =========== //

export const education = [
  {
    period: "2010 - 2014",
    title: "Bachelor Degree",
    institution: "University of Lagos",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim.",
  },
  {
    period: "2015 - 2016",
    title: "Master Degree",
    institution: "University of Ibadan",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim.",
  },
];

export const experience = [
  {
    period: "2018 - Present",
    title: "Senior FullStack Developer",
    institution: "Carbon Financial",
    description:
      "Developed scalable backend services and modern frontend applications.",
  },
  {
    period: "2016 - 2018",
    title: "Frontend Developer",
    institution: "Tech Startup",
    description: "Built responsive UI components and optimized performance.",
  },
];

export const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Vue.js", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Database", level: 70 },
];

// ============ Portfolio data =========== //

export const portfolioCategories = ["All", "Design", "Brand", "Photos"];

export const portfolioItems = [
  {
    id: 1,
    title: "Project Title",
    category: "Design",
    image: "/blog.png",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim.",
    client: "Mauri Lindberg",
    industry: "Books & Reference",
    technologies: "Vue, Tailwind, PHP",
    date: "Sep 29, 2019",
    url: "https://example.com",
    gallery: ["/blog.png", "/chat.png"],
  },
  {
    id: 2,
    title: "Project Title",
    category: "Brand",
    image: "/chat.png",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim.",
    client: "Mauri Lindberg",
    industry: "Books & Reference",
    technologies: "Vue, Tailwind, PHP",
    date: "Sep 29, 2019",
    url: "https://example.com",
    gallery: ["/blog.png", "/chat.png"],
  },
  {
    id: 3,
    title: "Project Title",
    category: "Photos",
    image: "/job.png",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim.",
    client: "Mauri Lindberg",
    industry: "Books & Reference",
    technologies: "Vue, Tailwind, PHP",
    date: "Sep 29, 2019",
    url: "https://example.com",
    gallery: ["/blog.png", "/chat.png"],
  },
  {
    id: 4,
    title: "Project Title",
    category: "Design",
    image: "/lms.png",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim.",
    client: "Mauri Lindberg",
    industry: "Books & Reference",
    technologies: "Vue, Tailwind, PHP",
    date: "Sep 29, 2019",
    url: "https://example.com",
    gallery: ["/blog.png", "/chat.png"],
  },
  {
    id: 5,
    title: "Project Title",
    category: "Brand",
    image: "/store.png",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim.",
    client: "Mauri Lindberg",
    industry: "Books & Reference",
    technologies: "Vue, Tailwind, PHP",
    date: "Sep 29, 2019",
    url: "https://example.com",
    gallery: ["/blog.png", "/chat.png"],
  },
  {
    id: 6,
    title: "Project Title",
    category: "Photos",
    image: "/store2.png",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim.",
    client: "Mauri Lindberg",
    industry: "Books & Reference",
    technologies: "Vue, Tailwind, PHP",
    date: "Sep 29, 2019",
    url: "https://example.com",
    gallery: ["/blog.png", "/chat.png"],
  },
];
