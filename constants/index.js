import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FullStackIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineer",
    icon: <FullStackIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Part-time Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  // 	title: "Backend Developer",
  // 	icon: backend
  // }
  // {
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },

    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Langchain",
      icon: "/assets/tech/langchain-seeklogo.svg",
      link: "https://www.google.com/search?client=safari&rls=en&q=lanchain&ie=UTF-8&oe=UTF-8",
    },
  ],

  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Postgres",
      icon: "/assets/tech/postgresql-logo.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
  "Certification&Awards": [
    {
      name: "Big Data Mastery certificate from IBM",
      icon: "/assets/tech/certificate.svg",
      link: "https://www.youracclaim.com/badges/8741793b-92bc-4eec-96c2-a494a4d504f7/linked_in_profile",
    },
    {
      name: "Youngest Acheiver Award",
      icon: "/assets/tech/award.svg",
      link: "",
    },
  ],
};

const experiences = [
  {
    title: "Software Engineer",
    company_name: "TestingXperts",
    icon: "/assets/company/tx-logo.png",
    iconBg: "#E6DEDD",
    date: "July 2021 - Present",
    points: [
      `I currently serve as the technical lead and full-stack engineer in an innovation project, I leverage React for responsive UI development and construct an Express server for
       frequent user API requests. Alongside, 
       I've crafted a utility backend with Django, managing heavy operations like AI/ML 
       model executions for identifying affected test cases and maintaining a MongoDB cluster for user data. 
       Spearheading an AI/ML initiative, our aim is to analyze unit and regression test cases based on
        incremental commits. Advocating for its integration into the pipeline, we've notably slashed regression test execution time, enhancing efficiency and productivity.`,

      `Worked as a MERN full-stack developer on a CMS for a South Africa based client. 
      Converted Figma design to reusable react components.
      Built an express app to handle APIs and NoSql MongoDB to store and manage content and user data.
      Deployed application on AWS with pm2 for managing express server and NGINX to bind redirect requests.`,

      `Built a modern survey and maturity assessment Web portal, Using the following tech stack:-
      Frontend- Typescript, react, and redux.
      Backend- Python, Django, and Postgres.  `,

      `Managing and mentoring interns of the 2024 session on GenAI and MERN stack for further innovation initiatives.
      Managed and trained GETs and interns of the 2022 session.`,
    ],
  },
  {
    title: "Intern node.js Developer ",
    company_name: "PMIDC",
    icon: "/assets/company/pmidc.jpg",
    iconBg: "#E6DEDD",
    date: "May 2021 to July 2021 (3 months)",
    points: [
      `Worked on REST APIs for a Whatsapp Covid chatbot during the pandemic. ( Our chatbot was featured in the national news channel)`,
      `Assisted the project manager and worked alongside senior developers to prepare an implementation plan from a technical perspective.`,
      `Cooperated with front-end developers and other team members to design more cohesive and functional code and tested software applications.`,
    ],
  },
];


const projects = [
  {
    name: "TubeTrend: Discover and Filter Trending YouTube Videos Worldwide!",
    description:
      "Built as a hobby project, this fully-responsive web application leverages Next.js to collect data from Google YouTube APIs. Users can explore trending YouTube videos and apply filters by category and country. Utilizing skeleton components, the app ensures a seamless user experience by displaying placeholders while data is being fetched.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "google-yt-apis",
        color: "orange-text-gradient",
      },

    ],
    image: "/assets/projects/yt-trending-2.png",
    source_code_link: "https://github.com/coderaptor071/yt-trend",
    deployed_link: "https://yt-trend-zu4u.vercel.app",
  },
  {
    name: "Freelance: Company porfolio website",
    description:
      "This freelance project involves the development of a portfolio page for a Canadian-based trucking company. The website is crafted using Next.js with TypeScript, Tailwind CSS, and Framer Motion to ensure a seamless and visually appealing user experience. The goal is to showcase the company's services, expertise, and portfolio in the transportation industry.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/trucking-company-portfolio.png",
    source_code_link: "https://github.com/coderaptor071/client-courier-site-project/tree/“Canadian-trucking-client",
    deployed_link: "https://client-courier-site-project.vercel.app",
  },
  {
    name: "Freelance: Herbal products Ecommerce site",
    description:"This freelance project caters to a small-scale client based in the UK, offering a platform to sell herbal products. Developed using the MERN(MongoDB, Express.js, React, Node.js) stack, the project encompasses comprehensive admin page with role-based access control, an intuitive store interface, and paypal payment gateway.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDb",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/jk_herbal.jpeg",
    source_code_link: "https://github.com/coderaptor071/Jk_backend",
    deployed_link: "https://jk-backend.vercel.app/",
  }
]

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/coderaptor071",
  },
  // {
  //   id: "linkedin",
  //   icon: <LinkedInIcon />,
  //   link: "",
  // },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/ocatne071",
  },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "",
  // },
];

const heroTexts = [
  "Full Stack engineer",
  500,
  "Freelancer",
  500,
  "AI and LLM application developer",
  500,
  "Innovator",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
};
