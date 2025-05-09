import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sayeeda Baqt",
  initials: "SB",
  url: "https://github.com/baqt-code",
  location: "Hyderabad, Telangana, IN",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Information Science & Engineering student with a passion for building innovative solutions in web development and machine learning.",
  summary:
    "Final year B.E. student seeking a position in Information Technology to utilize my skills and knowledge effectively, contribute to organizational growth, and embrace opportunities for learning and innovation.",
  avatarUrl: "/avatar.png",
  skills: [
    "Java",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js", 
    "Machine Learning",
    "Computer Networks",
    "Operating Systems",
    "LangChain",
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
      company: "NSS",
      href: "#",
      badges: [],
      location: "RV Institute of Technology & Management",
      title: "Member",
      logoUrl: "/nss-logo.png",
      start: "2021",
      end: "Present",
      description:
        "Active member of the National Service Scheme, participating in community service activities and social initiatives.",
    },
    {
      company: "College Editorial Board",
      href: "#",
      badges: [],
      location: "RV Institute of Technology & Management",
      title: "Editor",
      logoUrl: "/editorial-logo.png",
      start: "2021",
      end: "Present",
      description:
        "Contributed to the college publications as an editor, leveraging creative writing skills to produce high-quality content.",
    },
  ],
  education: [
    {
      school: "RV Institute of Technology & Management",
      href: "https://rvitm.edu.in/",
      degree: "Bachelor of Engineering in Information Science & Engineering",
      logoUrl: "/rvitm-logo.png",
      start: "2021",
      end: "2025",
      description: "CGPA: 7.7"
    },
    {
      school: "Sri Chaitanya Techno School",
      href: "#",
      degree: "12th Grade",
      logoUrl: "/sri-chaitanya-logo.png",
      start: "2020",
      end: "2021",
      description: "Percentage: 84.4%"
    },
    {
      school: "Kendriya Vidyalaya Sanghatan",
      href: "#",
      degree: "10th Grade",
      logoUrl: "/kv-logo.png",
      start: "2018",
      end: "2019",
      description: "Percentage: 94.4%"
    },
  ],
  projects: [
    {
      title: "Pilot Emergency Landing Advisor",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a tool for pilots to find nearby airports and emergency landing locations based on live location. Includes runway availability status.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/baqt-code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
    },
    {
      title: "Equity Research Analysis LLM Model",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed an LLM-based model for equity research analysis using LangChain and Hugging Face. Integrates Streamlit and FAISS index for efficient URL-based content retrieval.",
      technologies: [
        "LangChain",
        "Hugging Face",
        "Streamlit",
        "FAISS",
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/baqt-code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
    },
  ],
  publications: [
    {
      title: "Transformative Potential of Large Language Models in Healthcare: A Comprehensive Review and Analysis",
      type: "Survey Paper",
      journal: "Indiana Journal of Multidisciplinary Research",
      year: "2024",
      link: "#",
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
    "Communication",
    "Problem Solving",
    "Leadership",
    "Creative Writing",
  ],
};