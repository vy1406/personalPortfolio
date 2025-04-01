import ReactIcon from "./assets/react.svg";
import NextJs from "./assets/nextjs-icon.svg";
import AngularIcon from "./assets/angular-icon.svg";
import VueIcon from "./assets/vue.svg";
import ReduxIcon from "./assets/redux.svg";
import TailwindIcon from "./assets/tailwindcss-icon.svg";
import MaterialUi from "./assets/material-ui.svg";
import PWA from "./assets/pwa.svg";
import Mobx from "./assets/mobx.svg";

import NodeIcon from './assets/nodejs-icon.svg';
import ExpressIcon from "./assets/express.svg";
import DotNet from "./assets/dotnet.svg";
import Spring from "./assets/spring-icon.svg";
import GoIcon from "./assets/gopher.svg";
import NestJs from "./assets/nestjs.svg";

import MongoDB from "./assets/mongodb-icon.svg";
import Sqlite from "./assets/sqlite.svg";
import MySql from "./assets/mysql-icon.svg";
import Supabase from "./assets/supabase-icon.svg";
import DynamoDB from "./assets/aws-dynamodb.svg";
import PostgreSQL from "./assets/postgresql.svg";

import Docker from "./assets/docker-icon.svg";
import Kubernetes from "./assets/kubernetes.svg";
import Lambda from "./assets/aws-lambda.svg";
import Azure from "./assets/microsoft-azure.svg";
import Git from "./assets/git-icon.svg";

export const DATA = {
    aboutMe: "AWS Certified | Full-stack developer skilled in seamless user experiences, efficient backend systems, & cloud integration. Proficient in React & Node.js. Delivering solutions that drive growth & elevate platforms.",
    welcomeMsg: "Vladimir Elisavetsky",
    roles: [
        "Debugger of Bugs Nobody Can Reproduce",
        "Destroyer of Console Logs",
        "Debugging is like being a detective in a crime movie where you're also the murderer.",
        "Months of testing and bug fixes can save you hours of planning.",
        "I don’t always test my code, but when I do, it’s in production.",
        "Give a man a program, and he’ll be frustrated for a day. Teach a man to program, and he’ll be frustrated for a lifetime.",
        "Why waste 2 hours reading documentation when you can spend 4 days debugging through trial and error?"
    ],
    links: {
        github: "https://github.com/vy1406",
        linkedin: "https://www.linkedin.com/in/vladimir-elisavetsky/",
        cv: "https://drive.google.com/file/d/1Baxf4RjydHXrGxN2HajIO6lBQRbdoYDK/view?usp=sharing"
    },
    contact: {
        email: "vladimir.elisavetsky@gmail.com"
    },
    experience: [
        {
            company: "Contract",
            title: "Full Stack Developer",
            startDate: "April 2023",
            endDate: "Present",
            length: "Present",
            description: "Consulted on over 10 projects across healthcare, finance, and e-commerce sectors. Implemented secure authentication with MSAL, eliminating password-based logins and enhancing user experience by 50%. Optimized UI responsiveness by 30% by integrating Material UI and Tailwind CSS. Deployed WebRTC solutions to reduce latency by 50%. Utilized AWS services for cloud scalability and efficiency. Integrated Google Analytics to track and analyze user engagement, leading to a 25% increase in data-driven decisions. Conducted workshops on best coding practices and security improvements, enhancing team collaboration and code quality.",
            isCurrent: true
        },
        {
            company: "eWave (Contracted to Leading Healthcare Provider)",
            title: "Full Stack Technical Lead",
            startDate: "Sep 2023",
            endDate: "Oct 2024",
            length: "1 yr 1 mo",
            description: "Led the transition to micro frontends using Webpack5, reducing site build times by 50% and optimizing loading speeds from 15MB to 2.4MB. Introduced Progressive Web Applications (PWAs) to allow offline data access for field doctors, enhancing operational efficiency by 35%. Spearheaded migration to Next.js, achieving a 40% boost in response time. Conducted regular code reviews and introduced reusable Material UI components for improved consistency. Provided technical mentorship to junior developers and established documentation guidelines to improve onboarding efficiency.",
            isCurrent: false
        },
        {
            company: "eWave (Contracted to Leading Healthcare Provider)",
            title: "Full Stack Developer",
            startDate: "Apr 2021",
            endDate: "Sep 2023",
            length: "2 yrs 5 mos",
            description: "Developed and maintained full-stack solutions using .NET Core, Node.js, and React. Improved system reliability by 35% with Server-Side Rendering (SSR) and Kafka. Established robust CI/CD pipelines to streamline deployment processes. Developed custom modules and npm packages, contributing to internal libraries with JFrog and Nexus. Successfully refactored legacy code to improve performance and maintainability, reducing technical debt by 20%. Collaborated closely with product owners to define project requirements and deliver feature-rich applications.",
            isCurrent: false
        },
        {
            company: "Spectory",
            title: "Full Stack Developer",
            startDate: "Sep 2019",
            endDate: "Apr 2021",
            length: "1 yr 8 mos",
            description: "Led projects from inception to delivery, ensuring alignment with client goals and timelines. Developed scalable and maintainable solutions using React, Angular, and Node.js. Mentored junior developers, fostering best coding practices and problem-solving skills. Collaborated with cross-functional teams to enhance UI/UX designs, ensuring customer satisfaction. Researched and implemented performance optimizations that improved app loading times by 25%."
        }
    ],

    certificates: [
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0b7dd7d2-774a-4f02-a60c-3e8ab4608fe6.pdf",
            "title": "NGINX: Intro"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-60ef4236-ea00-404a-9dfb-60bc78c7ac98.pdf",
            "title": "Microservices | .NET | Next.js"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-36fee718-7d7b-4f2c-ad4d-414807f6dfc5.pdf",
            "title": "ES6, ES7 & ES8"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-9064d175-54f0-4375-a844-6d0b1974317a.jpg",
            "title": "GraphQL by Example"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-cb08b41f-9690-44df-b7b4-788febcf95ec.pdf",
            "title": "Next JS"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-98ee093d-27c8-4b77-8952-fef9e1c6d7b1.jpg",
            "title": "Progressive Web Apps"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-215c9e85-6f60-40dd-9308-2a350a555622.pdf",
            "title": "ChatGPT & LangChain"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-160e5918-872f-49d6-9d67-b49f74f1f86d.pdf",
            "title": "Go: Tutorial"
        },
        {
            "certificateLink": "https://www.credly.com/badges/4d5ba5e6-7072-45c0-b800-215676258afc/linked_in_profile",
            "title": "AWS Developer – Associate"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3e70c68a-5ec2-4ff7-ba53-ff87786a50c7.pdf",
            "title": "React Native: Guide"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-082abf40-3e89-46b9-be05-62894dd435e8.jpg",
            "title": "Microfrontends with React"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-ba8b1456-4504-4466-a9eb-242de151402b.jpg",
            "title": "Event Driven Architecture"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3f934552-676a-4af5-a35c-152ec6338289.pdf",
            "title": "Angular Core (Angular 16)"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-60ef4236-ea00-404a-9dfb-60bc78c7ac98.jpg",
            "title": "Multithreading & Asynchronous | C#/.NET"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-573cd851-9109-4020-a84d-bfadedcf9335.pdf",
            "title": "JavaScript: Weird Parts"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-04afbaa7-2b70-47f7-821c-bd080dc2a383.pdf",
            "title": "Docker & Kubernetes: Guide"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-7eab7aed-8df4-4727-b01b-608fcf97f704.jpg",
            "title": "Sass & SCSS from zero to hero"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-61483154-1f2d-48a4-96d3-4548193d391a.jpg",
            "title": "Productivity and Time Management"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a4bedf72-d003-4337-b3d2-6df2bfde650e.pdf",
            "title": "Reactive Angular (RxJs, Angular 16)"
        },
        {
            "certificateLink": "https://udemy-certificate.s3.amazonaws.com/image/UC-e12bd914-1db0-48ad-b491-0e25c665d097.jpg",
            "title": "Microservices Architecture"
        }
    ],
    education: [
        {
            "school": "Netanya College",
            "degree": "B.Sc. Computer Science and Mathematics",
            "startDate": "January 2016",
            "endDate": "April 2019",
            "description": "Specialized in computer science and mathematics, focusing on software engineering, algorithms, and data structures."
        },
        {
            "school": "Elevation School",
            "degree": "Full-Stack Certified",
            "startDate": "January 2019",
            "endDate": "April 2019",
            "description": "Completed an intensive bootcamp specializing in the MERN stack, developing multiple end-to-end projects showcasing proficiency in OOP principles."
        }
    ],
    skills: {
        frontEnd: {
            title: "Front End",
            "list": [
                {
                    name: "React",
                    src: ReactIcon
                },
                {
                    name: "NextJS",
                    src: NextJs
                },
                {
                    name: "Angular",
                    src: AngularIcon
                },
                {
                    name: "Vue",
                    src: VueIcon
                },
                {
                    name: "Redux",
                    src: ReduxIcon
                },
                {
                    name: "Tailwind",
                    src: TailwindIcon
                },
                {
                    name: "Material UI (MUI)",
                    src: MaterialUi
                },
                {
                    name: "PWA",
                    src: PWA
                },
                {
                    name: "MobX",
                    src: Mobx
                }
            ]
        },
        "backEnd": {
            "title": "Back End",
            "list": [
                {
                    "name": "Node.js",
                    "src": NodeIcon
                },
                {
                    "name": "Express.js",
                    "src": ExpressIcon
                },
                {
                    "name": ".NET Core",
                    "src": DotNet
                },
                {
                    "name": "Nest.js",
                    "src": NestJs
                },
                {
                    "name": "Spring",
                    "src": Spring
                },
                {
                    "name": "GoLang",
                    "src": GoIcon
                }
            ]
        },
        "databases": {
            "title": "Databases",
            "list": [
                {
                    "name": "MySql",
                    "src": MySql
                },
                {
                    "name": "SQLite",
                    "src": Sqlite
                },
                {
                    "name": "PostgreSQL",
                    "src": PostgreSQL
                },
                {
                    "name": "MongoDB",
                    "src": MongoDB
                },
                {
                    "name": "Supabase",
                    "src": Supabase
                },
                {
                    "name": "DynamoDB",
                    "src": DynamoDB
                }
            ]
        },
        "tools": {
            "title": "Development Tools",
            "list": [
                {
                    "name": "Docker",
                    "src": Docker
                },
                {
                    "name": "Kubernetes",
                    "src": Kubernetes
                },
                {
                    "name": "AWS",
                    "src": Lambda
                },
                {
                    "name": "Azure DevOps",
                    "src": Azure
                },
                {
                    "name": "Git",
                    "src": Git
                }
            ]
        },
    },
    randoms: [
        {
            "description": "Medium Article about Monorepo architecture and how Lerna helped us. It covers the benefits of using Lerna for managing multiple packages within a single repository, including improved code sharing, versioning, and dependency management.",
            "title": "Monorepos & Lerna",
            "link": "https://vladimir-elistavetski.medium.com/stop-copy-pasting-shared-code-how-lerna-helped-us-build-smarter-monorepos-5cdeac73e4c2"
        },
        {
            "description": "Criteria Workplace Insights report on my personality traits, communication style, and work preferences. The report highlights my strengths in problem-solving, adaptability, and collaboration, providing valuable insights for team dynamics and project management.",
            "title": "Personality Insights Report",
            "link": "https://www.ondemandassessment.com/workplace-insights/GHecumX0V7wJlZ%2BU79ZYfw/EqXBVWVKrvaVfj%2BM2zQnRw"
        },
        {
            "description": "Designed a reusable template for uploading small and large files to AWS S3. The template handles progress bar updates, chunked uploads, and serverless deployment, ensuring scalability and simplicity. Read the full walkthrough in my Medium article!",
            "title": "AWS S3 Upload Template",
            "link": "https://vladimir-elistavetski.medium.com/uploading-small-and-large-files-to-aws-s3-a-walkthrough-c10393e53ac1"
        },
        {
            "description": "Mentored seven aspiring developers, guiding them from foundational learning to securing professional roles. Helped them gain hands-on experience and build real-world projects.",
            "title": "Mentorship",
            "link": ""
        },
        {
            "description": "Developed OWP Statistics (owp-statistics.vercel.app), a mobile-first application built with Next.js, designed to help new immigrants monitor their applications. The app garnered 150 active users within weeks of launch.",
            "title": "OWP Statistics Project",
            "link": "https://owp-statistics.vercel.app"
        },
        {
            "description": "Completed a framework-agnostic event-handling template for microfrontend architectures, simplifying communication between React, Vue, and Angular using a custom EventBus and other browser APIs. This lightweight, error-resilient approach includes an ErrorBoundary for remote failures. Check out the full implementation in my Medium article!",
            "title": "Simplifying Microfrontend Events",
            "link": "https://vladimir-elistavetski.medium.com/simplifying-microfrontends-events-425685c97789"
        },
        {
            "description": "Actively volunteering in Calgary local projects, including CalgaryCrafters and Calgary Projects Free Developers, to collaborate on community-driven software solutions. We meet weekly to develop real-world applications that support local initiatives.",
            "title": "Community Volunteering & Local Projects",
            "link": "https://www.linkedin.com/posts/scuba-seasons_after-a-busy-4-months-im-happy-to-announce-activity-7302400373774852096-vPkb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACX2jCABFQ-EZTuF00NMw96yXCsX78KOcjg"
        },
        {
            "description": "Built a fully managed microservices-based application from scratch using .NET and Next.js. Implemented service-to-service communication with RabbitMQ and gRPC, IdentityServer for authentication, and YARP for API gateway management. Successfully tackled version differences while debugging between .NET 8 and .NET 9. Watch the full walkthrough in my video!",
            "title": "Microservices Architecture with .NET & Next.js",
            "link": "https://drive.google.com/file/d/1s5wMPh-RgzU1n8HVXSld_0FQCUehjfj1/view?usp=drive_link"
        }
    ],

}