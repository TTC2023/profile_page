import {
    hpu,
    codingDojo,
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
    brotherbeans,
    ocwen,
    carrent,
    jobit,
    tripguide,
    threejs,
    corpEssentials,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "High Point University - Business Admin",
      icon: hpu,
    },
    {
      title: "Coding Dojo Full-Stack Bootcamp",
      icon: codingDojo,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Managing Partner",
      company_name: "Brother Beans",
      icon: brotherbeans,
      iconBg: "#383E56",
      date: "February 2019 - April 2023",
      points: [
        "Co-founded and oversaw day-to-day operations of e-commerce, equipment rental, and beverage delivery service in Northern NJ. Manage roasting, delivery, and fulfillment operations in 1,400 SF facility.",
        "E-Commerce: Built out website and full e-commerce store in Squarespace. Created password protected wholesale site to provide differentiated experiences for retail and wholesale buyers.",
        "SEO/SEM: Improved organic search results to #8 for high-value keywords with commercial intent via on- and off-page SEO optimization. Self-taught through Coursera course and extensive research.",
        "Customer Acquisition: Launched and managed email marketing program – grew opt-in database to upwards of 40% and devised a series of monthly newsletters and seasonal/holiday promotions.",
        "Strategic Agility: Rapidly pivoted during COVID, transitioning from initial target of industrial and office to multiple revenue streams, including wholesale subscriptions, seasonal cold brew delivery agreements, e-commerce retail."
      ],
    },
    {
      title: "Service Technician",
      company_name: "Corporate Essentials",
      icon: corpEssentials,
      iconBg: "#E6DEDD",
      date: "Jan 2016 - Feb 2019",
      points: [
        "Performed preventive maintenance, scheduled repair, and break-fix service on industrial coffee equipment for established provider of breakroom solutions to corporate accounts. Consistently met and exceeded all service goals, providing timely, efficient, and accurate recommendations to meet customer needs.",
      ],
    },
    {
      title: "Cash Management / Analyst",
      company_name: "Ocwen Loan Servicing",
      icon: ocwen,
      iconBg: "#383E56",
      date: "Jan 2015 - Jan 2016",
      points: [
        "Partnered with India-based teams on $126M in wire transfers for upwards of $1B monthly loan volume—2,500+ deals monthly—between bank-to-bank custodial accounts. Delivered projections, cash flow reports, and various ad hoc analyses for senior leadership.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };