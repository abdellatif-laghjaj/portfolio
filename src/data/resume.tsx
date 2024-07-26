import {Icons} from "@/components/icons";
import {
    CodeIcon,
    HomeIcon,
    NotebookIcon,
    PencilLine,
} from "lucide-react";

export const DATA = {
    name: "LAGHJAJ ABDELLATIF",
    initials: "LA",
    url: "https://your-portfolio-website.com",
    location: "Sebt El Guerdane, Taroudant, Morocco",
    locationLink: "https://goo.gl/maps/R89tV652zC8546tQ7",
    description:
        "Big Data and Artificial Intelligence Master Student, Full Stack Developer, and Tech Enthusiast.",
    summary:
        "As a first-year master's student in Big Data and Artificial Intelligence, I bring a strong foundation in full-stack development, specializing in Vue.js, Laravel, and Flutter, along with expertise in database management. My passion lies in crafting innovative solutions that drive efficiency and enhance user experiences.  Beyond my technical skills, I am a highly motivated individual with a proven ability to quickly adapt to new technologies and collaborate effectively in team environments.",
    avatarUrl: "/me.jpg",
    skills: [
        "Vue.js", "React.js", "Next.js",
        "Laravel", "Express.js",
        "MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB",
        "Flutter", "Kotlin",
        "Git", "Docker", "Figma",
        "Python",
    ],
    softSkills: ["Teamwork", "Self-Motivation", "Fast Learning"],
    languages: ["Arabic", "English", "French"],
    navbar: [
        {href: "/", icon: HomeIcon, label: "Home"},
        {href: "/blog", icon: NotebookIcon, label: "Blog"},
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
                navbar: true,
            },
            WhatsApp: {
                name: "WhatsApp",
                url: "https://wa.me/212636208825",
                icon: Icons.whatsapp,
                navbar: false,
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
            title: "Full Stack Developer (Stage)",
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
            href: "#",
            degree: "Research Master's Degree in Big Data and Artificial Intelligence",
            logoUrl: "/fpt.png",
            start: "2023",
            end: "Present",
        },
        {
            school: "Multidisciplinary Faculty of Taroudant",
            href: "#",
            degree: "Professional Bachelor's Degree in Computer Engineering",
            logoUrl: "/fpt.png",
            start: "2022",
            end: "2023",
        },
        {
            school: "Multidisciplinary Faculty of Taroudant",
            href: "#",
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
            logoUrl: "/high-school-logo.png",
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
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "#",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "",
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
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "#",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "",
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
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "#",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "AQUANOVA",
            href: "#",
            dates: "2024 - Present",
            active: true,
            description:
                "Developed an Electronic water consumption device with a management system",
            technologies: [
                "Electronics",
                "Embedded Systems",
                "Water Management",
            ],
            links: [
                {
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "#",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "",
            video: "",
        },
    ],
} as const;