import { Icons } from "@/components/icons";
import {
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDart,
  SiMysql,
  SiFigma,
  SiTypescript,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiKotlin,
} from "react-icons/si";
import { TbBrandFirebase, TbBrandFlutter } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";

export const DATA = {
  name: "LAGHJAJ ABDELLATIF",
  BLUR_FADE_DELAY: 0.02,
  initials: "LA",
  url: "https://your-portfolio-website.com",
  location: "Sebt El Guerdane, Taroudant, Morocco",
  locationLink: "https://goo.gl/maps/R89tV652zC8546tQ7",
  description:
    "Big Data and Artificial Intelligence Master Student, Full Stack Developer, and Tech Enthusiast.",
  summary:
    "As a first-year master's student in Big Data and Artificial Intelligence, I bring a strong foundation in full-stack development, specializing in Vue.js, Laravel, and Flutter, along with expertise in database management. My passion lies in crafting innovative solutions that drive efficiency and enhance user experiences.  Beyond my technical skills, I am a highly motivated individual with a proven ability to quickly adapt to new technologies and collaborate effectively in team environments.",
  keywords:
    "Abdellatif Laghjaj, Abdellatif, Laghjaj, abdelatif-laghjaj, Abdellatif Laghjaj Portfolio, Abdellatif Laghjaj Blog, Abdellatif Laghjaj Resume, Abdellatif Laghjaj CV, Abdellatif Laghjaj Projects, Abdellatif Laghjaj Contact, Abdellatif Laghjaj About, Abdellatif Laghjaj Home, Abdellatif Laghjaj Skills, Abdellatif Laghjaj Education, Abdellatif Laghjaj Work, AbdelLatif Laghjaj Experience, abdelatif, laghjaj, Full Stack Developer",
  avatarUrl: "/me.jpg",
  birthDate: "2002-08-11",
  skills: {
    frontend: {
      label: "Frontend",
      skills: [
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <FaReact /> },
        { name: "Flutter", icon: <TbBrandFlutter /> },
      ],
    },
    backend: {
      label: "Backend",
      skills: [
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Express.js", icon: <FaNodeJs /> },
      ],
    },
    databases: {
      label: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <TbBrandFirebase /> },
        { name: "Supabase", icon: <RiSupabaseLine /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    machineLearning: {
      label: "Machine Learning",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Hadoop", icon: <FaDatabase /> },
        { name: "Apache Kafka", icon: <FaDatabase /> },
        { name: "Apache Spark", icon: <FaDatabase /> },
      ],
    },
    tools: {
      label: "Tools",
      skills: [
        { name: "Git", icon: <FaJs /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
    programmingLanguages: {
      label: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Kotlin", icon: <SiKotlin /> },
      ],
    },
  },
  softSkills: ["Teamwork", "Self-Motivation", "Fast Learning"],
  languages: ["Arabic", "English", "French"],
  navbar: [
    {
      href: "/",
      icon: Icons.home,
      label: "Home",
    },
    {
      href: "/blog",
      icon: Icons.notebook,
      label: "Blog",
    },
  ],
  contact: {
    email: "abdelatiflaghjaj@gmail.com",
    tel: "+212636208825",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abdellatif-laghjaj",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdellatif-laghjaj/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.twitter.com/abdellatif_kira",
        icon: Icons.x,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/212636208825",
        icon: Icons.whatsapp,
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/abdellatif.laghjaj/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abdelatiflaghjaj@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Haut Commissariat au Plan",
      href: "https://www.hcp.ma/",
      badges: [],
      location: "Taroudant",
      title: "Enumerator - 2024 Census",
      logoUrl: "/hcp.png",
      start: "August 2024",
      end: "September 2024",
      description:
        "We collected demographic and socio-economic data from households while ensuring data confidentiality, managing census rounds by planning routes and coordinating with local authorities for optimal geographic coverage. Additionally, we addressed field challenges such as absenteeism and refusal to cooperate, while raising public awareness about the importance of the census for national development.",
    },
    {
      company: "Accesspoint IT Solutions",
      href: "#",
      badges: [],
      location: "Taroudant",
      title: "Full Stack Developer (Internship)",
      logoUrl: "/accesspoint.png",
      start: "June 2023",
      end: "September 2023",
      description:
        "Designed and developed a comprehensive business management system, encompassing a desktop application, mobile application, and website, along with an e-commerce platform. Leveraged Vue.js, Laravel, and MySQL for robust functionality and seamless user experience.",
    },
    {
      company: "Accesspoint IT Solutions",
      href: "#",
      badges: [],
      location: "Taroudant",
      title: "Full Stack Developer (Internship PFE)",
      logoUrl: "/accesspoint.png",
      start: "April 2023",
      end: "June 2023",
      description:
        "Engineered a restaurant management system featuring a point-of-sale interface, accessible through a desktop application, mobile application, and website. Utilized Flutter, Vue.js, Laravel, and MySQL to deliver a comprehensive solution tailored for the restaurant industry.",
    },
    {
      company: "Multidisciplinary Faculty of Taroudant",
      href: "#",
      badges: [],
      location: "Taroudant",
      title: "Full Stack Developer (Internship)",
      logoUrl: "/fpt.png",
      start: "July 2022",
      end: "September 2022",
      description:
        "Integrated a final project with a dedicated discussion platform, facilitating seamless communication between students and supervisors within the faculty's digital space. Managed course changes, student diploma uploads, and ensured optimal platform performance while addressing feedback, assessments, security enhancements, and bug fixes. Utilized Vue.js, Laravel, and MySQL for effective development and maintenance.",
    },
  ],
  education: [
    {
      school: "Multidisciplinary Faculty of Taroudant",
      href: "http://www.fpt.ac.ma/",
      degree:
        "Research Master's Degree in Big Data and Artificial Intelligence",
      logoUrl: "/fpt.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Multidisciplinary Faculty of Taroudant",
      href: "http://www.fpt.ac.ma/",
      degree: "Professional Bachelor's Degree in Computer Engineering",
      logoUrl: "/fpt.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Multidisciplinary Faculty of Taroudant",
      href: "http://www.fpt.ac.ma/",
      degree:
        "Diploma of Professional University Studies (DEUP) in Computer Engineering",
      logoUrl: "/fpt.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "El Irfane High School, Sebt El Guerdane",
      href: "#",
      degree: "Baccalaureat in Physical and Chemical Sciences",
      logoUrl: "",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "VisioCraft",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Revolutionizing education by harnessing the power of Big Data and Image Processing techniques.  This innovative project aims to streamline and enhance educational processes through data-driven insights and advanced image analysis.",
      technologies: [
        "Machine Learning",
        "Python",
        "Hadoop",
        "Apache Kafka",
        "Apache Spark",
        "Image Processing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdellatif-laghjaj/big-data-project",
          icon: <Icons.source className="size-3" />,
        },
      ],
      image: "/projects/visioncraft.png",
      video: "",
    },
    {
      title: "Rental Management System",
      href: "#",
      dates: "2023 - Present",
      active: true,
      description:
        "Developed a robust Rental Management System to streamline the complexities of managing rental properties. The system efficiently handles tenant information, lease agreements, payments, and maintenance requests, ensuring a seamless experience for property owners and tenants alike.",
      technologies: ["Java", "Spring Boot", "Vue.js", "Daisy UI", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/MaryamBouchhar/rentahome",
          icon: <Icons.source className="size-3" />,
        },
      ],
      image: "/projects/rentahome.jpg",
      video: "",
    },
    {
      title: "Absence Management App",
      href: "#",
      dates: "2023 - Present",
      active: true,
      description:
        "Designed and implemented a user-friendly mobile application that simplifies the often-tedious task of tracking student absences. This intuitive app empowers teachers to efficiently manage attendance records and generate comprehensive reports with ease.",
      technologies: ["Kotlin", "Android", "Firebase", "Figma"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdellatif-laghjaj/absence-management-app",
          icon: <Icons.source className="size-3" />,
        },
      ],
      image: "/projects/absentify.png",
      video: "",
    },
    {
      title: "NUVAQUA",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed an Electronic water consumption device with a management system",
      technologies: ["Electronics", "Embedded Systems", "Water Management"],
      links: [
        {
          type: "Website",
          href: "nuvaqua.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/nuvaqua.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Healthteach Metaverse Hackathon",
      dates: "Mai 24th - 26th, 2024",
      location: "Agadir, Morocco",
      description:
        "Healthteach Metaverse Hackathon is a 48-hour event that brings together developers, designers, and entrepreneurs to create innovative solutions that address the challenges of the healthcare industry. Participants will have the opportunity to collaborate with industry experts and mentors to develop cutting-edge solutions that improve patient care, streamline operations, and enhance the overall healthcare experience.",
      image: "/hackathons/healthteach-metaverse.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
