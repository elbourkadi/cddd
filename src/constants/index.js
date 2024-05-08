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
      name: "Elecriborne",
      description:
        "This project is an advanced web application tailored for charging station companies. It offers a comprehensive suite of features to efficiently manage various aspects. From creating and tracking installation quotes to handling inventory, customer relations, technician assignments, and invoicing. Additionally, it includes a messaging system for seamless communication with clients, integrated payment processing, supplier management functionalities, and a built-in blogging feature to keep stakeholders informed and engaged. ",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        }
      ],
      image: crm,
      source_code_link: "https://elc-71921.bubbleapps.io/version-test/dashboard?tab=tab4",
    },
    {
      name: "TDL FORMATION",
      description:
        "Our project involves building a user-friendly website on Bubble.io for professional training courses in Taxi, VTC, ECSR, SIAPP, CACES, and Employée Commercial. The platform offers easy course selection, registration, and payment processing, with personalized profiles and interactive scheduling. Our goal is to provide convenient and efficient access to quality training, empowering users to advance their careers seamlessly.",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        }
      ],
      image: tdl,
      source_code_link: "https://tdlformation.com/version-test/acceuil3",
    },
    {
      name: "ASTRALIS GROUPE",
      description:
        "Astralis is a premier engineering consultancy in France, specializing in electric vehicle charging station installations. Our team delivers personalized studies and innovative solutions to businesses, municipalities, and condominiums. With a robust network of partners, we ensure flawless installations and comprehensive client support, making us the ideal partner for turnkey electric mobility solutions.",
      tags: [
        {
          name: "Softr",
          color: "green-text-gradient",
        },
        {
          name: "low-code",
          color: "pink-text-gradient",
        },
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        }
      ],
      image: astralis,
      source_code_link: "https://www.astralisgroupe.fr/",
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
        "is a mobile app that offers is a mobile app that offers on-demand delivery services for a variety of products, including food, groceries, pharmacy items, and more. It allows users to order from local stores and have items delivered to their doorstep in a timely and convenient manner.on-demand delivery services for a variety of products, including food, groceries, pharmacy items, and more. It allows users to order from local stores and have items delivered to their doorstep in a timely and convenient manner.is a mobile app that offers on-demand delivery services for a variety of products, including food, groceries, pharmacy items, and more. ",
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
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };