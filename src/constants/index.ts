import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Android Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {   // java
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {   //python
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {     //xml
    name: "MongoDB",
    icon: mongodb,
  },
  // {   //firebase
  //   name: "Three JS",
  //   icon: threejs,
  // },
  
  { //firebase
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Industrial Training Internship",
    companyName: "ThinkNEXT",
    icon: tesla,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining Android  Applications using JAVA and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "freelancing",
    companyName: "Android Development",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Created 10+ Android apps for freelance clients, including projects for schools, gyms, and various other domains.",
      "Developed versatile Android applications, ranging from school management systems to gym workout trackers, demonstrating adaptability across different project requirements",
      
    ],
  },
 
 
];

const testimonials: TTestimonial[] = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a Application as beautiful as our product, but Saheb proved me wrong.",
  //   name: "Maryam Rahat",
  //   designation: "Software Engineer",
  //   company: "VMware",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  {
    testimonial:
      "I've never met a Android developer who truly cares about their clients' success like Saheb does.",
    name: "Sajeet Kumar",
    designation: "Software Engineer",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
];

const projects: TProject[] = [
  {
    name: "CGC Ebooks App",
    description:
      "Designed and developed an ebook application catering to college students' academic needs. Included features like comprehensive ebook library, previousyear questions, and MST questions.Live on PlayStore with 2T+ Downloads with 200+ daily active Users .",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://play.google.com/store/apps/details?id=com.universityNotes.universityBooks",
  },
  {
    name: "CGC Admin App & CGC College App",
    description:
    "Developed two Android applications to enhance administrative and academic functions in the college ecosystem, featuring notice sections, faculty management, ebook and video lecture repositories, and a payment gateway",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Xml",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
