const about = {
  title: "Hi 👋 , my name is Lunark Vu",
  description:
    "I am a computer science student with experience in frontend and full-stack development. I'm also an avid matcha enjoyer.",
  github: "https://github.com/lunaisfound",
  linkedin: "https://www.linkedin.com/in/lunarkvu/",
  cv: "#",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "FlashCard",
      short: "Features MERN stack.",
      description:
        "An Anki-inspired application that aims to help students improve memorization through flashcards. It features a React frontend, Node.js/Express backend, and MongoDB Atlas, supporting projects, decks, and cards with full CRUD functionality. The app is then deployed on AWS EC2 and performed server performance evaluation using Apache Benchmark. ",
      technologies: [
        "#JavaScript",
        "#React.js",
        "#Express.js",
        "#CSS",
        "#MongoDB",
      ],
      github: "https://github.com/lunaisfound/flashcard",
      demo: "https://drive.google.com/drive/folders/1CKQXdf40M-MOMGOFC4R1r27KLVNYeuHt?usp=sharing",
    },
    {
      title: "Grapevine",
      short:
        "Features React frontend, Firebase authentication, Cloud Firestore database",
      description:
        "A community-driven forum and bulletin board platform that was designed by Figma and Ant Design. It uses Firebase for authentication and database and was a labour of love of 3 college students dury exam week.",
      technologies: [
        "#TypeScript",
        "#React.js",
        "#AntDesign",
        "#Firebase",
        "#Figma",
      ],
      github: "https://github.com/lunaisfound/grapevine",
      demo: "#",
    },
    {
      title: "Cat-A-Log",
      short: "Features file upload, image prcessing, AI intergration",
      description:
        "an AI-powered full-stack web application using Python, Django, React, and JavaScript to analyze and transform user-uploaded cat images into trading cards. The platform processes images with OpenCV for background removal and enhancement, and integrates OpenAI and Replicate APIs to generate detailed breed descriptions and custom AI-generated stickers. ",
      technologies: [
        "#Python",
        "#JavaScript",
        "#Django",
        "#React.js",
        "#OpenAI",
        "#ReplicateAPI",
      ],
      github: "https://github.com/lunaisfound/Cat-A-Log",
      demo: "#",
    },
  ],
};

const experience = {
  title: "Coding Fellowship",
  experiences: [
    {
      title: "Student",
      company: "TechWise by Talentsprint, Supported by Google",
      duration: "February 2024 - August 2025",
      description:
        "Selected for a highly competitive Google-sponsored software engineering program, providing industry-ready skills in Python, Machine Learning, Web Development, Data Structures and Algorithms, and Corporate Proficiency ",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#React.js",
        "#CSS",
        "#JavaScript",
        "#TypeScript",
        "#HTML",
        "#Python",
        "#Node.js",
        "#Express.js",
        "#C++",
      ],
    },
    {
      title: "Databases",
      skills: ["#MongoDB", "#PostgreSQL", "#Firebase"],
    },
    {
      title: "Others",
      skills: ["#Git", "#Figma", "#Jira", "#AWS"],
    },
  ],
};

export { about, projects, experience, skills };
