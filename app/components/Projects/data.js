const projects = [
  {
    id: 1,
    title: "Inventory Manager Pro",
    description:
      "Inventory Manager Pro is a sleek and efficient web application designed to streamline inventory management. Developed using ReactJS and hosted on Vercel, this project offers a user-friendly interface for easy tracking and organization of inventory. Check out the live demo to explore its seamless functionality.",
    link: "https://inventory-manager-pro.vercel.app/",
    skills: [
      "ReactJS",
      "NextJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
    ],
    code: {
      fullCode: "https://github.com/Amdadullah-Raihan/inventory-manager-pro",
    },
    myContributions: [
      "Developed an inventory management solution with TypeScript, NextJS, ReactJS, ExpressJs, Mongoose, Framer Motion, and Firebase, optimizing tracking, reducing errors, and enhancing efficiency.",
      "Designed an intuitive user registration system for seamless onboarding, featuring responsive UI elements.",
      "Implemented strong security with authentication, data encryption, and optimized scalability for consistent performance as product inventories and user traffic grow",
    ],
    imgUrl:
      "https://i.ibb.co/zHzZ57r/screencapture-inventory-manager-pro-vercel-app-2024-02-29-21-34-29.png",
  },
  {
    id: 2,
    title: "Roberto Hotel & Resort",
    description:
      "Embark on a virtual journey with the Tourism Roberto website. Crafted using ReactJS and hosted on Firebase, this platform invites you to explore exciting destinations and plan your dream vacation. Immerse yourself in a visually captivating experience, complete with dynamic content and smooth navigation. Visit the live site to start your adventure.",
    link: "https://tourism-roberto.web.app/",
    skills: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
      ,
    ],
    code: {
      clientCode:
        "https://github.com/Amdadullah-Raihan/digital-fashion-store-client",
      serverCode: "https://github.com/Amdadullah-Raihan/tourism-roberto-server",
    },
    myContributions: [
      "Built a full-stack platform using ReactJS, ExpressJS, MongoDB Atlas, TailwindCSS, and Firebase.",
      "Designed and implemented a user-friendly booking and blog platform.",
      "Added admin capabilities for adding/modifying rooms and blogs and managing bookings.",
    ],
    imgUrl: "https://i.ibb.co/Wtznx20/roberto.png",
  },
  {
    id: 3,
    title: "Digital Fashion Store",
    description:
      "Digital Fashion Store is a vibrant e-commerce website built with ReactJS and hosted on Firebase. Dive into a visually appealing and user-friendly online shopping experience. Explore the latest fashion trends and enjoy smooth navigation. Visit the live site to browse the collections and witness the seamless integration of design and functionality.",
    link: "https://digital-fashion-store.web.app/",
    skills: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
    ],
    code: {
      clientCode:
        "https://github.com/Amdadullah-Raihan/digital-fashion-store-client",
      serverCode:
        "https://github.com/Amdadullah-Raihan/digital-fashion-store-server",
    },
    myContributions: [
      "Created a dynamic e-commerce platform using ReactJS, ExpressJS, MongoDB, and Firebase to offer an engaging online shopping experience for fashion enthusiasts.",
      "Designed an intuitive user interface with a focus on user experience, incorporating responsive design principles to ensure a seamless shopping journey across various devices.",
      "Implemented secure authentication and data storage mechanisms to protect customer information.",
    ],
    imgUrl:
      "https://i.ibb.co/sKTdrPW/screencapture-digital-fashion-store-web-app-2024-02-29-21-36-28.png",
  },
  {
    id: 4,
    title: "GetDone",
    description:
      "Experience productivity at its best with the Todo App. This minimalist task management web application, developed using ReactJS and hosted on Vercel, offers a clean and intuitive interface. Easily add, edit, and check off tasks with real-time updates. Explore the live demo to simplify your to-do list today.",
    link: "https://todo-app-qtech.vercel.app/",
    skills: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
    ],
    code: {
      fullCode: "https://github.com/Amdadullah-Raihan/getDone-todo-app",
    },
    myContributions: [],
    imgUrl:
      "https://i.ibb.co/N1T4wdL/screencapture-todo-app-qtech-vercel-app-2024-02-29-21-23-53.png",
  },
];

const skills = [
  "All",
  "ReactJS",
  "NextJS",
  "TypeScript",
  "JavaScript",
  "ExpressJS",
  "NodeJS",
  "Redux",
  "MongoDB",
  "TailwindCSS",
];

const data = () => {
  return [projects, skills];
};

export default data;
