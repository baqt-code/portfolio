import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sayeeda Baqt",
  initials: "SB",
  url: "https://github.com/baqt-code",
  location: "Bengaluru, Karnataka, 560034, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Junior Engineer with hands-on experience in backend development, database management, and API integration.",
  summary:
    "Motivated Software Developer with hands-on experience in backend development, database management, and API integration. Strong foundation in programming fundamentals with practical exposure to web applications, data analysis, and cloud technologies. Eager to contribute to legacy system maintenance and improvement while learning modern development practices in a fast-paced environment.",
  avatarUrl: "/avatar.png",
  skills: [
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "C++",
    "Node.js",
    "RESTful API Development",
    "Machine Learning",
    "NLP",
    "MySQL",
    "Database Schema Design",
    "Google Cloud Platform",
    "Git",
    "LangChain",
    "Streamlit",
    "FAISS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sayeedabaqt2711@gmail.com",
    tel: "+919481345728",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/baqt-code",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sb1234567/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sayeedabaqt2711@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "RV Institute of Technology & Management",
      href: "https://rvitm.edu.in/",
      badges: ["Backend Development", "Database Management"],
      location: "Bengaluru, India",
      title: "Pilot Emergency Landing Advisor - Developer",
      logoUrl: "/rvitm-logo.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description:
        "Built a real-time web application helping pilots locate nearby airports and emergency landing sites using geolocation services. Developed backend logic for runway availability calculations and distance optimization algorithms. Designed and implemented SQL database schema for airport data, runway specifications, and location coordinates. Integrated geolocation APIs and created RESTful endpoints for frontend communication.",
    },
    {
      company: "RV Institute of Technology & Management",
      href: "https://rvitm.edu.in/",
      badges: ["Data Processing", "NLP"],
      location: "Bengaluru, India",
      title: "Equity Research Analysis LLM Model - Developer",
      logoUrl: "/rvitm-logo.png",
      start: "Jun 2024",
      end: "Jul 2024",
      description:
        "Developed an intelligent research tool for financial data analysis using machine learning and natural language processing. Built data pipeline for processing large datasets and implemented efficient content retrieval system. Created interactive user interface for research analysts with real-time data visualization. Managed complex data storage and retrieval using vector databases and SQL queries.",
    },
  ],
  education: [
    {
      school: "RV Institute of Technology & Management",
      href: "https://rvitm.edu.in/",
      degree: "B.E in Information Science & Engineering",
      logoUrl: "/rvitm-logo.png",
      start: "Nov 2021",
      end: "Dec 2025",
      description: "GPA: 8.2\nRelevant Coursework: Database Management Systems, Software Engineering, Web Technologies, Cloud Computing"
    },
    {
      school: "Sri Chaitanya Techno School",
      href: "#",
      degree: "Highschool diploma in 12th Grade",
      logoUrl: "/sri-chaitanya-logo.png",
      start: "Jan 2020",
      end: "May 2021",
      description: "GPA: 9.4"
    },
    {
      school: "Kendriya Vidyalaya Sanghatan",
      href: "#",
      degree: "Highschool diploma in 10th Grade",
      logoUrl: "/kv-logo.png",
      start: "Jan 2018",
      end: "May 2019",
      description: "GPA: 9.4"
    },
  ],
  projects: [
    {
      title: "Pilot Emergency Landing Advisor",
      href: "https://aircraft-plum.vercel.app",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "Web-based application designed to provide pilots with real-time information about their current flight. Features pilot and aircraft details, airport data, live location tracking, and emergency landing site suggestions. Fetches pilot/aircraft ID from backend and displays airport runway details with alternative landing sites when runways are full.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "SQL",
        "Geolocation API",
        "RESTful API",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://aircraft-plum.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/baqt-code/aircraft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
    },
    {
      title: "Sahara News Research Tool",
      href: "https://github.com/baqt-code/LLM-MODEL",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Machine learning-powered news research application with user authentication, URL-based article data loading, text chunk processing, and FAISS vector indexing. Features AI-powered question answering system that allows users to process news article URLs and perform intelligent Q&A on processed content.",
      technologies: [
        "Python",
        "Streamlit",
        "FAISS",
        "Machine Learning",
        "NLP",
        "Authentication",
        "Vector Database",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/baqt-code/LLM-MODEL",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
    },
    {
      title: "AI Chatbot",
      href: "https://chatbot-sandy-three-72.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Next.js web application with TypeScript featuring a modern chatbot interface. Built with responsive design principles and optimized for performance. Includes development server capabilities and automated deployment integration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "CSS",
        "Vercel",
        "Geist Font",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatbot-sandy-three-72.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/baqt-code/chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project3.png",
    },
    {
      title: "Personal Portfolio",
      href: "https://github.com/baqt-code/portfolio",
      dates: "2024",
      active: true,
      description:
        "Modern personal portfolio website built with Next.js 14, React, and TypeScript. Features responsive design, integrated blog functionality, and optimized performance. Includes UI libraries like Shadcn/UI and Magic UI with TailwindCSS styling and Framer Motion animations.",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Shadcn/UI",
        "TailwindCSS",
        "Framer Motion",
        "Magic UI",
        "Vercel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/baqt-code/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project4.png",
    },
    {
      title: "Machine Learning Projects",
      href: "https://github.com/baqt-code/1RF21IS048",
      dates: "2024",
      active: true,
      description:
        "Collection of machine learning and data analysis projects including K-Nearest Neighbors (KNN) algorithm implementation, wine quality prediction model, and Walmart data analysis. Built using Jupyter Notebooks with comprehensive data preprocessing and model evaluation.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Machine Learning",
        "KNN Algorithm",
        "Data Analysis",
        "Data Preprocessing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/baqt-code/1RF21IS048",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project5.png",
    },
  ],
  publications: [
    {
      title: "Transformative Potential of LLMs in Healthcare",
      type: "Research Paper",
      journal: "Indiana Journal of Multidisciplinary Research",
      year: "2024",
      link: "#",
      description: "Conducted comprehensive literature review analyzing 50+ research papers on AI applications in medical diagnostics, patient care, and clinical decision support. Investigated technical challenges in implementing LLMs within healthcare systems, including data privacy, model accuracy, and integration with existing hospital infrastructure.",
    },
  ],
  courses: [
    {
      title: "Networking Basics",
      provider: "Cisco Networking Academy",
      year: "2023",
      certificate: "#",
    },
    {
      title: "Web Development",
      provider: "Yhills",
      year: "2023",
      certificate: "#",
    },
    {
      title: "Machine Learning",
      provider: "Acmegrade",
      year: "2022",
      certificate: "#",
    },
  ],
  softSkills: [
    "Legacy code debugging",
    "System troubleshooting",
    "Complex query optimization",
    "Problem Solving",
    "Communication",
    "Leadership",
  ],
};