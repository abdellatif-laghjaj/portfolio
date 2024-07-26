import {IServiceItem} from "@/types";

const services: IServiceItem[] = [
    {
        id: 1,
        title: "Mobile App Development",
        icons: [
            "/skills/socket-io.png",
            "/skills/dart.svg",
            "/skills/flutter.svg",
            "/skills/getx.png",
            "/skills/firebase.svg",
        ],
        shortDescription: "Engaging mobile apps for iOS and Android.",
        description:
            "From concept to deployment, I create seamless mobile apps with cutting-edge technologies for an exceptional user experience.",
    },
    {
        id: 2,
        title: "Web Development",
        icons: [
            "/skills/redux.svg",
            "/skills/react.svg",
            "/skills/nextjs.png",
            "/skills/html.svg",
            "/skills/css.svg",
        ],
        shortDescription: "Visually stunning and user-friendly websites.",
        description:
            "I build responsive, SEO-friendly websites tailored to your needs, from simple sites to complex platforms.",
    },
    {
        id: 3,
        title: "Backend Development",
        icons: [
            "/skills/socket-io.png",
            "/skills/docker.png",
            "/skills/nodejs.svg",
            "/skills/express.svg",
            "/skills/aws.svg",
        ],
        shortDescription: "Robust and scalable backend infrastructures.",
        description:
            "I develop efficient backends with strong APIs, databases, and server configurations for high performance and scalability.",
    },
    {
        id: 4,
        title: "Product Strategy",
        icons: [
            "/skills/git.svg",
            "/images/collaboration.png",
            "/images/logical-thinking.png",
            "/images/analytical-skills.png",
            "/skills/ubuntu.png",
        ],
        shortDescription: "Defining goals and roadmaps for product success.",
        description:
            "I help define goals, target audiences, and strategic roadmaps to align your product with market needs and business goals.",
    },
    {
        id: 5,
        title: "DevOps",
        icons: [
            "/skills/docker.svg",
            "/skills/kubernetes.svg",
            "/skills/aws.svg",
            "/skills/jenkins.svg",
            "/skills/terraform.svg",
        ],
        shortDescription: "Streamlining development and operations.",
        description:
            "I implement DevOps practices to enhance workflows with CI/CD pipelines, cloud management, and containerization.",
    },
    {
        id: 6,
        title: "Database Management",
        icons: [
            "/skills/mysql.svg",
            "/skills/postgresql.svg",
            "/skills/mongodb.svg",
            "/skills/redis.svg",
            "/skills/sqlite.svg",
        ],
        shortDescription: "Optimizing and managing database systems.",
        description:
            "I design and optimize databases for performance and security, handling SQL and NoSQL systems for effective data management.",
    },
];

export default services;