export const siteConfig = {
  name: "Engineering Portfolio",
  description: "HI",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Education",
      href: "/education",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Certificates",
      href: "/certificates",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/suyash-ambule",
    linkedin: "https://linkedin.com/in/suyash-ambule",
    twitter: "https://twitter.com/yourusername",
    facebook: "https://facebook.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    whatsapp: "https://wa.me/yourphonenumber",
    email: "mailto:youremail@example.com",
    phone: "tel:+1234567890",
  },
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    title: "AI/ML Research Intern",
    company: "House of Couton",
    location: "Lucknow, India",
    startDate: "May 2023",
    endDate: "Aug 2023",
    description: [
      "Worked on developing and testing software components for embedded systems",
      "Collaborated with senior engineers on project planning and execution",
      "Implemented test procedures for quality assurance",
    ],
    technologies: ["C++", "Python", "MATLAB", "Git"],
  },
  {
    title: "AI/ML Intern",
    company: "Chedo Tech",
    location: "Pune, India",
    startDate: "Jan 2023",
    endDate: "Apr 2023",
    description: [
      "Assisted in research focusing on advanced materials for mechanical applications",
      "Conducted literature reviews and compiled research findings",
      "Performed data analysis and visualization of experimental results",
    ],
    technologies: ["MATLAB", "CAD", "Data Analysis", "Python"],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Intent Classifier with DeBERTa",
    description:
      "Built a multi-domain intent classification model using DeBERTa and Hugging Face Transformers for conversational AI.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    tags: ["NLP", "DeBERTa", "Hugging Face", "Transformers"],
    repo: "https://github.com/your-username/intent-classifier",
  },
  {
    title: "Data Science Automation",
    description:
      "Automated end-to-end data science workflows using CrewAI agents for data preprocessing, model training, and reporting.",
    image: "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg",
    tags: ["Python", "CrewAI", "Agentic AI", "Automation", "Generative AI"],
    repo: "https://github.com/your-username/data-science-automation",
  },

  {
    title: "Phishing URL Detection",
    description:
      "Built and deployed an ML model with MLOps pipeline to detect phishing URLs using automated training, testing, and monitoring.",
    image: "https://images.pexels.com/photos/6483587/pexels-photo-6483587.jpeg",
    tags: [
      "Python",
      "MLOps",
      "Machine Learning",
      "Deployment",
      "Cybersecurity",
    ],
    repo: "https://github.com/your-username/phishing-url-detection",
  },
];

export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor in Computer Science",
    field: "Computer Science Engineering",
    institution: "Vishwakarma University",
    location: "Pune, India",
    startDate: "Sep 2021",
    endDate: "May-2025",
    gpa: "7.04/10.0",
    achievements: [
      "Dean's List (All Semesters)",
      "Academic Excellence Scholarship",
      "Senior Design Project Award",
    ],
  },
  {
    degree: "Junior College",
    field: "Science and Mathematics",
    institution: "High School Name",
    location: "Kharghar, India",
    startDate: "Sep 2018",
    endDate: "Jun 2020",
    gpa: "83.30",
    achievements: [
      "Valedictorian",
      "National Mathematics Competition Finalist",
      "Science Fair Gold Medal",
    ],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  url?: string;
  pdf?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Complete Agentic AI Bootcamp With LangGraph and Langchain",
    issuer: "Udemy",
    date: "Aug 2025",
    id: "UC-8d8e8fa0-c49f-44d9-aa66-3a698d42759b",
    url: "https://www.udemy.com/certificate/UC-8db8e1a0-c49f-4d49-aa66-3a698142759b/",
    pdf: "public/certificates/Agentic_AI.pdf",
  },
  {
    title: "CAD Design Specialist",
    issuer: "Autodesk",
    date: "Jun 2023",
    id: "CERT-67890",
    url: "https://www.autodesk.com/certification",
    pdf: "/certificates/Agentic_AI.pdf",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "Project Management Institute",
    date: "Mar 2023",
    id: "CERT-24680",
    url: "https://www.pmi.org/certifications",
    pdf: "/certificates/Agentic_AI.pdf", // Using available PDF for now
  },
];

export type Skill = {
  name: string;
  level: number; // 1-10
  category: "technical" | "software" | "soft" | "cloud";
};

export const skills: Skill[] = [
  // Technical Skills
  { name: "Machine Learning", level: 9, category: "technical" },
  { name: "Deep Learning", level: 8, category: "technical" },
  {
    name: "Natural Language Processing (NLP)",
    level: 9,
    category: "technical",
  },
  { name: "Large Language Models (LLMs)", level: 8, category: "technical" },
  { name: "Data Structures & Algorithms", level: 7, category: "technical" },

  // Software & Tools
  { name: "Python", level: 9, category: "software" },
  { name: "TensorFlow", level: 8, category: "software" },
  { name: "PyTorch", level: 7, category: "software" },
  { name: "Hugging Face", level: 9, category: "software" },
  { name: "FastAPI", level: 8, category: "software" },
  { name: "Docker", level: 7, category: "software" },
  { name: "Git & GitHub", level: 8, category: "software" },
  { name: "MLflow", level: 7, category: "software" },
  { name: "LangChain / LangGraph", level: 7, category: "software" },

  // Cloud & MLOps
  { name: "AWS SageMaker", level: 7, category: "cloud" },
  { name: "CI/CD (GitHub Actions)", level: 7, category: "cloud" },
  { name: "DVC", level: 7, category: "cloud" },
  { name: "Prometheus & Grafana", level: 6, category: "cloud" },

  // Soft Skills
  { name: "Problem Solving", level: 9, category: "soft" },
  { name: "Collaboration", level: 8, category: "soft" },
  { name: "Project Management", level: 7, category: "soft" },
  { name: "Technical Writing", level: 8, category: "soft" },
  { name: "Presentation", level: 7, category: "soft" },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Advances in Renewable Energy Technologies",
    excerpt:
      "Exploring the latest innovations in renewable energy and their impact on sustainable development.",
    date: "Mar 15, 2024",
    author: "Your Name",
    image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
    slug: "advances-in-renewable-energy",
  },
  {
    title: "The Future of Robotics in Manufacturing",
    excerpt:
      "How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.",
    date: "Feb 22, 2024",
    author: "Your Name",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    slug: "future-of-robotics-manufacturing",
  },
  {
    title: "Sustainable Building Materials in Modern Construction",
    excerpt:
      "An analysis of eco-friendly building materials and their applications in contemporary architecture.",
    date: "Jan 10, 2024",
    author: "Your Name",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    slug: "sustainable-building-materials",
  },
];
