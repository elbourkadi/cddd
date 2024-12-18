import {
    mobile,
    backend,
    creator,
    web,
    crmm,
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
    crm,
    cabinet,
    tdl,
    luxedrive,
    astralis,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Bubble Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FrontEnd Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abderrazzak proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abderrazzak does.",
      name: "Mohamed Chaoui ",
      designation: "COO",
      company: "TE",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Abdo optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lina samed",
      designation: "client",
      company: " Enterprise",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    
    {
      name: "T-lix",
      description:
        "tlix.app is an advanced mobile application for taxi booking, designed to offer seamless real-time reservation capabilities. It is complemented by a robust web management system that facilitates driver document verification, ride history tracking, and resolution of user-reported issues. This comprehensive solution ensures a secure, efficient, and reliable service for both drivers and passengers.",
      tags: [
        {
          name: "Webflow",
          color: "pink-text-gradient",
        },
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: crm,
      source_code_link: "https://www.tlix.app/",
    },
    {
      name: "Beautify",
      description:
        "Beautify is a SaaS platform designed to streamline the management of beauty salons. It includes a subscription and payment system for purchasing and managing SaaS plans and features a mobile application for customers to book appointments with salons subscribed to the platform, ensuring a seamless and efficient experience for both salon owners and clients.",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        },
        {
          name: "Flutterflow",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: tdl,
      source_code_link: "https://marvestglobal.bubbleapps.io/version-test",
    },
    {
      name: "Cloud Learning",
      description:
        "CloudLearning is an interactive e-learning platform designed to deliver engaging and accessible online education. It supports real-time collaboration between students and instructors through live sessions, interactive content, and a user-friendly interface, providing an efficient and dynamic learning experience.",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        },
        {
          name: "Make",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
        
      ],
      image: astralis,
      source_code_link: "https://livecloudlearning.com/version-test/",
    },
    
    {
      name: "Luxe Drive",
      description:
        "Visit this link https://clipchamp.com/watch/7u5t0ptH2xq to visualize the project. Led the development of LuxeDrive's rental car website, enhancing user experience and streamlining the booking process. Utilized front-end and back-end development skills to create a visually appealing and functional platform. Implemented features such as real-time availability, secure payment processing, and intuitive navigation, resulting in increased customer satisfaction and conversion rates. Contributed to the success of LuxeDrive by delivering a user-friendly online platform tailored to the luxury car rental industry.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Spring-boot",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: luxedrive,
      source_code_link: "https://github.com/elbourkadi/Projet-_fin-_module-Python-Java-CItBD-2023",
    },
    {
      name: "Cabinet Kine",
      description:
        "Developed and launched a robust web application for Cabinet Kine, a management consulting firm, facilitating strategic planning, operations management, and organizational development. Leveraged expertise in web development to create an intuitive platform, empowering clients to access resources, case studies, and insights tailored to their needs. Implemented innovative features and ensured seamless functionality, contributing to the firm's digital transformation and client engagement efforts.",
      tags: [
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        }
      ],
      image: cabinet,
      source_code_link: "https://github.com/elbourkadi/Application_kine_Tarmiz",
    },
    {
      name: "CRM Rental car",
      description:
        "Developed a comprehensive CRM web application tailored for a rental car company, streamlining customer relationship management and operational efficiency. Leveraged front-end and back-end development skills to create a user-friendly interface for managing reservations, customer inquiries, and vehicle inventory. Integrated features such as booking management, payment processing, and reporting functionalities, optimizing business processes and enhancing customer satisfaction. Contributed to the success of the rental car company by delivering a customized CRM solution aligned with their specific needs and requirements.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Spring-boot",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: crmm,
      source_code_link: "https://github.com/elbourkadi/Projet-_fin-_module-Python-Java-CItBD-2023",
    },
    {
      name: "Doctor App",
      description:
        "Web-based platform that is a mobile application designed to assist doctors with patient management, including appointment scheduling, patient communication, electronic medical records, and prescription management. It provides a convenient and efficient way for doctors to manage their practice and improve patient care. users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Php",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mini Market",
      description:
        " is a mobile application that allows users to browse and purchase groceries, household essentials, and other everyday items from a local mini market. It offers a convenient and efficient way for users to shop for everyday items from the comfort of their own homes.application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Sql",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Clone Glovo",
      description:
        "is a web app that offers is a web app that offers on-demand delivery services for a variety of products, including food, groceries, pharmacy items, and more. It allows users to order from local stores and have items delivered to their doorstep in a timely and convenient manner.on-demand delivery services for a variety of products, including food, groceries, pharmacy items, and more. It allows users to order from local stores and have items delivered to their doorstep in a timely and convenient manner.is a mobile app that offers on-demand delivery services for a variety of products, including food, groceries, pharmacy items, and more. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "eclipse",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    }
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };