import bravery from '@/public/clientPicture/bravery.png'
import edges from '@/public/clientPicture/edges.png'
import sesame from '@/public/clientPicture/sesame.png'
import earrins from '@/public/clientPicture/earrins.png'
import ledger from '@/public/clientPicture/ledger.png'
import california from '@/public/clientPicture/califarnia.png'
import teplo from '@/public/clientPicture/teplo.png'
import harry from '@/public/clientPicture/harry.png'
import uiux from '@/public/portfolioImage/uiuxDesign.png'
import webdesign from '@/public/portfolioImage/webDesign.png'
import mobileApp from '@/public/portfolioImage/mobileAppDesign.png'
import frontend from '@/public/portfolioImage/frontend.png'
import branding from '@/public/portfolioImage/brandingDesign.png'
import prototype from '@/public/portfolioImage/prototype.png'
import alexander from '@/public/persons/Alexander Carter.jpg'
import sophia from '@/public/persons/Sophia Martinez.jpg'
import benjamin from '@/public/persons/Benjamin Thomps.jpg'
import nathan from '@/public/persons/Nathan Roberts.jpg'
import samuel from '@/public/persons/Samuel Lewis.jpg'
import olivia from '@/public/persons/Olivia Scott.jpg'
import daniel from '@/public/persons/Daniel Harris.jpg'
import isabella from '@/public/persons/Isabella Clark.jpg'

export const clients = [
  {
    id: 1,
    logo: bravery,
    name: 'Alexander Carter',
    role: 'Product Manager',
    avatar: alexander,
  },
  {
    id: 2,
    logo: edges,
    name: 'Sophia Martinez',
    role: 'Marketing Director',
    avatar: sophia,
  },
  {
    id: 3,
    logo: sesame,
    name: 'Benjamin Thomps',
    role: 'Ceo & Funder',
    avatar: benjamin,
  },
  {
    id: 4,
    logo: earrins,
    name: 'Nathan Roberts',
    role: 'Creative Director',
    avatar: nathan,
  },
  {
    id: 5,
    logo: ledger,
    name: 'Samuel Lewis',
    role: 'Software Engineer',
    avatar: samuel,
  },
  {
    id: 6,
    logo: california,
    name: 'Olivia Scott',
    role: 'Product Designer',
    avatar: olivia,
  },
  {
    id: 7,
    logo: teplo,
    name: 'Daniel Harris',
    role: 'Ceo & Funder',
    avatar: daniel,
  },
  {
    id: 8,
    logo: harry,
    name: 'Isabella Clark',
    role: 'UX Lead',
    avatar: isabella,
  },
]

export const portfolioItems = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences.',
    image: uiux,
  },
  {
    title: 'Web Design',
    description: 'Designing responsive websites.',
    image: webdesign,
    arrow: true,
  },
  {
    title: 'Mobile App Design',
    description: 'Creating seamless and engaging app interfaces.',
    image: mobileApp,
  },
  {
    title: 'Frontend Development',
    description: 'Interactive and user-friendly web interfaces.',
    image: frontend,
  },
  {
    title: 'Branding Design',
    description: 'Developing strong and cohesive brand identities.',
    image: branding,
  },
  {
    title: 'Interactive Prototypes',
    description: 'Clickable interactive designs.',
    image: prototype,
  },
]

export const services = [
  {
    title: 'UI/UX Design',
    desc: 'Creating user-centered interfaces that are both visually appealing and easy to navigate.',
  },
  {
    title: 'Web Design',
    desc: 'Designing responsive and modern websites that reflect your brand and engage visitors.',
  },
  {
    title: 'Mobile App Design',
    desc: 'Crafting sleek, intuitive app interfaces that offer seamless experiences on any device.',
  },
  {
    title: 'Wireframes & Prototypes',
    desc: 'Building clear blueprints and interactive prototypes to visualize ideas before development.',
  },
  {
    title: 'User Interface (Frontend)',
    desc: 'Designing clean, responsive, and intuitive interfaces for seamless user experiences.',
  },
  {
    title: 'User Research & Testing',
    desc: 'Understanding user behavior through research and testing to improve design decisions.',
  },
]

export const skills = {
  design: [
    { name: 'Figma', level: 100 },
    { name: 'Adobe XD', level: 95 },
    { name: 'Adobe In-Design', level: 90 },
    { name: 'Photoshop', level: 80 },
    { name: 'Illustrator', level: 85 },
  ],
  development: [
    { name: 'HTML 5', level: 100 },
    { name: 'CSS 3', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'React.Js', level: 100 },
    { name: 'Next.Js', level: 100 },
  ],
}

export const experienceData = {
  education: [
    {
      title: 'Computer Science & Engineering',
      institution: 'Uttora University (2017 – 2021)',
      gpa: '3.85/4',
      desc: 'The curriculum focused on developing strong problem-solving skills, programming expertise, and preparing students for careers in software development and IT sectors.',
    },
    {
      title: 'Higher Secondary Certificate',
      institution: 'Uttora Collage (2014 – 2016)',
      gpa: '4.50/5',
      desc: 'Focused on Mathematics, Physics, and Chemistry to build analytical skills and prepare for higher studies in science and technology.',
    },
  ],
  jobs: [
    {
      title: 'UI/UX Designer',
      company: 'BUYCEX (2021 – 2022)',
      location: 'India',
      desc: 'Designed and optimized user-friendly interfaces, improved user experience across web and mobile platforms, and collaborated with developers to deliver client-focused digital solutions.',
    },
    {
      title: 'Frontend Developer',
      company: 'Ipixel (2021 – 2025)',
      location: 'Bangladesh',
      desc: 'Developed and maintained responsive web applications using modern frameworks, optimized performance for scalability with cross-functional teams to deliver high-quality user experiences.',
    },
  ],
}

export const testimonials = [
  {
    id: 1,
    name: 'Michael Anderson',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'UI/UX and frontend development at Pixell BD is exceptional. He transformed our concepts into a seamless digital experience, delivering a polished product ahead of schedule.',
  },
  {
    id: 2,
    name: 'Sophia Carter',
    role: 'CEO, StartupHub',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Working with Pixell BD was a game-changer for our business. The team is professional, creative, and always delivered beyond expectations.',
  },
  {
    id: 3,
    name: 'David Johnson',
    role: 'Tech Lead, InnovateX',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    review:
      'The frontend solutions were pixel-perfect, fast, and scalable. Highly recommended for anyone looking to elevate their digital products.',
  },
  {
    id: 4,
    name: 'Emily Parker',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'Pixell BD brought our vision to life with outstanding UI/UX design. The attention to detail and delivery speed were unmatched.',
  },
]
