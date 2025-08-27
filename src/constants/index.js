export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Arthika – Banking & Payments Web App',
    desc: 'Arthika is a modern banking and payments platform that empowers users to connect with 3,000+ financial institutions through Plaid, manage multiple accounts, and seamlessly track balances.',
    subdesc:
      'With integrated Dwolla-powered payments, it enables secure money transfers up to $10K. Built with Next.js, React, and Tailwind CSS, and powered by Appwrite authentication and Sentry monitoring, Arthika delivers a scalable, reliable, and user-friendly experience for digital finance.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
     
    ],
  },
  {
    title: 'Youtube Focus Mode',
    desc: 'YouTube Focus Mode is a productivity-focused Chrome extension that helps users stay distraction-free by hiding Shorts, comments, and irrelevant recommendations while watching videos.',
    subdesc:
      'Built with JavaScript, Tailwind CSS, and Chrome Extension APIs (Manifest v3), it offers customizable strictness levels, focus scheduling, dark mode, motivational reminders, and keyboard shortcuts. Helps you aim for focused learning and work sessions.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/typescript.png',
      },
     
    ],
  },
  {
    title: 'Pagemint - AI Website Generator',
    desc: 'Pagemint is an innovative AI-powered website generator that simplifies the process of creating stunning websites. With its user-friendly interface and advanced features, users can easily design and launch their websites without any coding knowledge.',
    subdesc:
      'By leveraging the power of AI, Pagemint automates various aspects of web design, from layout suggestions to content generation, ensuring a seamless and efficient workflow. Built with Next.js, Tailwind CSS, and OpenAI API, it delivers a cutting-edge solution for modern web development.',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
     
    ],
  },
  {
    title: 'LOG KYA KAHENGE - A DESI SURVIVAL GUIDE ',
    desc: 'Log Kya Kahenge is a quirky, desi-themed digital newsletter hosted by the fictional character Babli Aunty, delivering witty, relatable commentary on careers, money, relationships, and adulting.',
    subdesc:
       'Published weekly on Beehiv, the newsletter combines taunting advice, memes, playlists, and mental health rants into a bold, entertaining format. With a strong visual identity, social media promotion, and a growing community called the “Ghanta Gang,” it builds a unique cultural brand that resonates with young adults navigating modern life.',
    href: 'https://bablis-newsletter.beehiiv.com/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
     
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Bit Mesra, Ranchi',
    pos: 'Research Intern - AI/NLP & Computational Poetics',
    duration: 'May 2025 - July 2025',
    title: "In this project, I built and evaluated NLP models to classify poetic structures, achieving over 85% accuracy by combining linguistic features with rule-based logic. I processed a dataset of 1000+ structured poetic samples using Python, NumPy, and scikit-learn to recognize stylistic patterns. Alongside this, I applied prompt engineering, algorithmic design, and API integration to explore research at the intersection of language and computing, bridging creativity with computational analysis.",
    // icon: '/assets/logo.svg',
    animation: 'victory',
  },
  // {
  //   id: 2,
  //   name: 'Figma',
  //   pos: 'Web Developer',
  //   duration: '2020 - 2022',
  //   title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //   icon: '/assets/figma.svg',
  //   animation: 'clapping'
  // },
  {
    id: 3,
    name: '',
    pos: '',
    duration: '-',
    title: "",
    // icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
