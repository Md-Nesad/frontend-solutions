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
    title: "Figma to React, Next.js",
    desc: "Convert your Figma or design files into fully functional, pixel-perfect React or Next.js applications with responsive UI and clean code.",
  },
  {
    title: "Landing page",
    desc: "High-converting, SEO-friendly landing pages built with modern design and fast performance to boost your sales and customer engagement.",
  },
  {
    title: "Business website",
    desc: "Professional, responsive websites tailored for your business, helping you build trust, showcase services, and attract potential clients online.",
  },

  {
    title: "Dashboard (Admin panel)",
    desc: "Custom dashboards and admin panels with real-time data visualization, easy management tools, and responsive design for smooth operations.",
  },
  {
    title: "Wireframes & Prototypes",
    desc: "Bring your ideas to life with interactive wireframes and prototypes, helping you visualize the flow and validate concepts before full development.",
  },
  {
    title: "API Integration",
    desc: "Seamless integration of third-party APIs (payment, maps, authentication and more...) to extend your website’s functionality and improve user experience.",
  },
];

export const skills = {
  frontend: [
    { name: "Figma", level: 90 },
    { name: "Tailwindcss", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
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
      title: "WordPress Developer",
      company: "Freelance / Project Based",
      location: "Remote",
      desc: "Customized WordPress themes and plugins according to client needs. Optimized performance and SEO for better reach and user engagement.",
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
      "Frontend development at Frontend Solutions is exceptional. He transformed our concepts into a seamless digital experience, delivering a polished product ahead of schedule.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "CEO, StartupHub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Working with Frontend Solutions was a game-changer for our business. The team is professional, creative, and always delivered beyond expectations.",
  },
  {
    id: 3,
    name: "David Johnson",
    role: "Tech Lead, InnovateX",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "The frontend solutions were pixel-perfect, fast, and scalable. Highly recommended for anyone looking to elevate their digital products.",
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Frontend Solutions brought our vision to life with outstanding responsive and pixel-perfect design. The attention to detail and delivery speed were unmatched.",
  },
];
