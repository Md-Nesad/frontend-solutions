import bravery from "@/public/clientPicture/bravery.png";
import edges from "@/public/clientPicture/edges.png";
import sesame from "@/public/clientPicture/sesame.png";
import earrins from "@/public/clientPicture/earrins.png";
import ledger from "@/public/clientPicture/ledger.png";
import california from "@/public/clientPicture/califarnia.png";
import teplo from "@/public/clientPicture/teplo.png";
import harry from "@/public/clientPicture/harry.png";
import alexander from "@/public/persons/Alexander Carter.jpg";
import sophia from "@/public/persons/Sophia Martinez.jpg";
import benjamin from "@/public/persons/Benjamin Thomps.jpg";
import nathan from "@/public/persons/Nathan Roberts.jpg";
import samuel from "@/public/persons/Samuel Lewis.jpg";
import olivia from "@/public/persons/Olivia Scott.jpg";
import daniel from "@/public/persons/Daniel Harris.jpg";
import isabella from "@/public/persons/Isabella Clark.jpg";

export const clients = [
  {
    id: 1,
    logo: bravery,
    name: "Alexander Carter",
    role: "Product Manager",
    avatar: alexander,
  },
  {
    id: 2,
    logo: edges,
    name: "Sophia Martinez",
    role: "Marketing Director",
    avatar: sophia,
  },
  {
    id: 3,
    logo: sesame,
    name: "Benjamin Thomps",
    role: "Ceo & Funder",
    avatar: benjamin,
  },
  {
    id: 4,
    logo: earrins,
    name: "Nathan Roberts",
    role: "Creative Director",
    avatar: nathan,
  },
  {
    id: 5,
    logo: ledger,
    name: "Samuel Lewis",
    role: "Software Engineer",
    avatar: samuel,
  },
  {
    id: 6,
    logo: california,
    name: "Olivia Scott",
    role: "Product Designer",
    avatar: olivia,
  },
  {
    id: 7,
    logo: teplo,
    name: "Daniel Harris",
    role: "Ceo & Funder",
    avatar: daniel,
  },
  {
    id: 8,
    logo: harry,
    name: "Isabella Clark",
    role: "UX Lead",
    avatar: isabella,
  },
];

export const services = [
  {
    title: "Custom Web Application Development",
    desc: "Build secure, scalable, and high-performance web applications tailored to your business requirements using modern full-stack technologies and industry best practices.",
  },
  {
    title: "Custom Business Software Development",
    desc: "Develop business management systems, internal tools, CRM, ERP, dashboards, booking platforms, and workflow automation solutions that improve operational efficiency.",
  },
  {
    title: "Full-Stack Development",
    desc: "Deliver end-to-end solutions, from responsive frontend interfaces to robust backend APIs, databases, authentication, and cloud deployment.",
  },
  {
    title: "API Development & System Integration",
    desc: "Design and integrate secure REST APIs, third-party services, payment gateways, authentication providers, and external business platforms for seamless connectivity.",
  },
  {
    title: "UI Implementation & Frontend Engineering",
    desc: "Transform Figma and design prototypes into responsive, accessible, and pixel-perfect user interfaces with a strong focus on performance and user experience.",
  },
  {
    title: "Application Maintenance & Scaling",
    desc: "Provide long-term support through feature development, bug fixing, performance optimization, security improvements, and scalable architecture enhancements.",
  },
];

// export const services = [
//   {
//     title: "Custom Business Software",
//     desc: "Tailored software solutions for businesses including CRM, ERP, HRM, inventory, POS, booking systems, and internal management platforms.",
//   },
//   {
//     title: "SaaS Product Development",
//     desc: "Build scalable SaaS platforms with secure authentication, subscription workflows, multi-tenant architecture, and modern cloud-ready infrastructure.",
//   },
//   {
//     title: "Web Application Development",
//     desc: "Develop fast, secure, and scalable web applications with modern frontend, backend, database, and API architecture.",
//   },
//   {
//     title: "API & Third-Party Integrations",
//     desc: "Develop secure APIs and integrate payment gateways, authentication, cloud services, AI services, and external business platforms.",
//   },
//   {
//     title: "Frontend Development",
//     desc: "Create responsive, accessible, and high-performance user interfaces from Figma designs using modern frontend technologies and best practices.",
//   },
//   {
//     title: "Maintenance & Product Scaling",
//     desc: "Continuous product improvement through feature development, code refactoring, performance optimization, security updates, and long-term technical support.",
//   },
// ];

export const skills = {
  frontend: [
    { name: "Figma", level: 90 },
    { name: "Tailwindcss", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Redux", level: 90 },
    { name: "TenStack Query", level: 85 },
    { name: "Shadcn/UI", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 95 },
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 87 },
    { name: "Prisma", level: 90 },
    { name: "REST API", level: 95 },
    { name: "Redis", level: 95 },
    { name: "Socket", level: 90 },
    { name: "Docker", level: 90 },
  ],
};

export const experienceData = {
  education: [
    {
      title: "Frontend Developer",
      company: "Frontend Solutions",
      location: "Remote",
      desc: "Developed responsive and high-performance UIs using React, Next.js, and Tailwind CSS. Focused on pixel-perfect design and smooth user experience.",
    },

    {
      title: "Course Instructor - Frontend Development",
      company: "Pacific Computer Academy",
      location: "On-site",
      desc: "Taught students modern frontend technologies including HTML, CSS, JavaScript,React and Next.js. Developed practical exercises, projects, and assessments to help learners gain hands-on experience.",
    },
  ],
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Freelance / Project Based",
      location: "Remote",
      desc: "Developed high performance web application and custom business software for different different client's business needs that help them to turn their business from offline to online.",
    },
    {
      title: "Project & Commission Based Work",
      company: "Independent",
      location: "Remote",
      desc: "Delivered multiple freelance projects including portfolios, business websites, and eCommerce apps. Managed client communication, project planning, and delivery.",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Full Stack development at Full Stack Solutions is exceptional. The team transformed our concepts into a seamless digital experience, delivering a polished product ahead of schedule.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "CEO, StartupHub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Working with Full Stack Solutions was a game-changer for our business. The team is professional, creative, and always delivered beyond expectations.",
  },
  {
    id: 3,
    name: "David Johnson",
    role: "Tech Lead, InnovateX",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Full Stack Solutions were pixel-perfect, fast, and scalable. Highly recommended for anyone looking to elevate their digital products.",
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Full Stack Solutions brought our vision to life with outstanding responsive and pixel-perfect design. The attention to detail and delivery speed were unmatched.",
  },
];
