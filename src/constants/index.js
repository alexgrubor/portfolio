import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  shopify,
  jobit,
  tripguide,
  threejs,
  express,
  bootstrap,
  sass,
  vscode,
} from "../assets";
import dci from '../assets/company/dci.png'
import upwork from '../assets/company/upwork.png'
import nextjs from '../assets/tech/next-js.png'
import wordpress from '../assets/tech/wordpress.png'
import photoshop from '../assets/tech/photoshop.png'

import dcidrinks from '../assets/dcidrinks.png'
import weatherapp from '../assets/weatherapp.png'
import hangman from '../assets/Hangmangame.png'

export const navLinks = [
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
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
   
  },
  {
    name: "wordPress",
    icon: wordpress,

  },
  {
    name:"photoshop",
    icon: photoshop,
  }, 
  {
    name: "express",
    icon: express,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "sass",
    icon: sass,
  }, 
  {
    name: "vscode",
    icon: vscode,
  }, 
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

];

const experiences = [
  {
    title: "Tutor",
    company_name: "Digital Career Institute DCI gmbH ",
    icon: dci,
    iconBg: "#383E56",
    date: "October 2022 - ",
    points: [
      "Supporting my classmates on topics such as JavaScript, CSS, and Node.js, in 1:1 consulting formats and in projects.",
      "Doing coding exercises and helping with debugging.",
      "Giving feedback on code and helping with problem-solving.",

    ],
  },
  {
    title: "Freelancer as Virtual Assistant",
    company_name: "Upwork and Fiver",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "March 2017 - March 2022",
    points: [
      "Maintaining the social media accounts of several small business owners.",
      "Creating and editing content for social media posts.",
      "Increasing monthly productivity by 20%",
      "Adding content to the WordPress site and maintaining the website.",
    ],
  },
  {
    title: "Administrator",
    company_name: "B&S service ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2016 - March 2017",
    points: [
      "Maintaining and organizing documents",
      "Writing correspondence",
      "Answering phones and taking messages",
      "Providing customer service",
    ],
  },
  
];
const education = [
  {
    title: "Full Stack Web Developer",
    company_name: "Digital Career Institute DCI gmbH",
    icon: dci,
    iconBg: "#383E56",
    date: "Jun 2022 - ",
    points: [
      "Front-end: HTML, CSS,  Understanding of ideation and sketching in UI/UX Design  Bootstrap5, JavaScropt, Dom Manipulation, React.js, Context API, React Routing, REST API",
      "Back-end: Node.js, Express.js, MongoDB, Mongoose, REST API,  Authentication, Authorization, Testing, Deployment",
      "Creating dynamic and responsive web applications.",
      "Understanding of the full software development lifecycle.",
      "working on individual and group projects (Git Version).",
      "German: B2 class"
    ]
  },
  {
    title: "B1 German",
    company_name: "Telc",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "October 2021 - March 2022",
    points: [
      'German grammar',
      'German vocabulary',
      'German writing',
      'German reading',
      'German listening',
      'German speaking',
    ]
  },
  {
    title: "Bachelor of Law",
    company_name: "University of Banja Luka",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "October 2012 - April 2017",
    points: [
      'Legal research',
      'Legal writing',
      'Legal analysis',
      'Communication',
      'Teamwork',
      'Problem-solving',
      'Time management',
    ]
  }
]

const testimonials = [
  {
    testimonial:" Aleksandra is an incredibly curious person, passionate about programming and web development, and very dedicated to what she does. She would be a great asset to any developer team.",
    name: "Carlo Trimarchi",
    designation: "Teacher",
    company: "DCI",
    image: "https://media.licdn.com/dms/image/C4E03AQHZZwBn4jc-5Q/profile-displayphoto-shrink_800_800/0/1517761276213?e=1683763200&v=beta&t=ONtKiTf8c2mpWRdZpfF7eGlw3uupCqodGoonitJ0bTE",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DCI DRINKS",
    description:
    "Web application that enables users to browse and search for cocktail recipes based on different name, ingredients. Also, the web app has a today's recommendation section and top 5 non-alcoholic and top-5 alcoholic suggestions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dcidrinks,
    source_code_link: "https://github.com/alexgrubor/DCIDRINKS",
  },
  {
    name: "Weather App",
    description:"The app allows users to search for the current weather conditions in any location around the world by entering a city name.It displays additional information such as the current temperature, humidity, wind speed. Background comes from Unsplesh API",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/alexgrubor/weather-app",
  },
  {
    name: "Hangman Game",
    description:"The game starts by selecting a random word from a list of words stored in a text file. The player then has to guess the letters in the word one by one. For each incorrect guess, a part of the hangman figure is drawn. If the player guesses the word before the figure is complete, they win. If not, they lose. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hangman,
    source_code_link: "https://github.com/alexgrubor/hangman",
  },
];

export { services, technologies, experiences, testimonials, projects, education };
