import { ProjectData } from "../types/project-data";

export type route = {
  name: string;
  hash: string;
};

export const routes = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

const myData = {
  name: "Muthulingam Thanoraj",
  cv: {
    python:
      "https://firebasestorage.googleapis.com/v0/b/intruder-detector-ef9ab.appspot.com/o/my-portfolio%2FThanoraj_python_engineer.pdf?alt=media&token=955c0947-bf2f-46f7-a7d8-80450b5e892e",
  },
  profile_image:
    "https://firebasestorage.googleapis.com/v0/b/intruder-detector-ef9ab.appspot.com/o/my-portfolio%2F1732883822820.jpeg?alt=media&token=81d63184-7fd8-4569-8061-bad0fedfb161",
};

export const introData = {
  p1: "Hi, I'm Thanoraj!",
  p2: "I'm a passionate ",
  p3: "AI & Full stack Engineer ",
  p4: "with ",
  p5: "3 years ",
  p6: "of experience in development. I thrive on crafting intuitive and engaging user experiences and building scalable, high-performing applications. With a strong foundation in ",
  p7: "React, Next.js, Flutter and Python.",
};

export const aboutData = {
  p1: "Motivated and adaptable Python developer with hands-on experience in ",
  p2: "Python, SQL, NoSQL databases, and AWS",
  p3: ". Skilled in developing data-driven solutions and working in Agile environments to deliver high-quality results. Passionate about learning new technologies and expanding skill sets, with a strong foundation in ",
  p4: "cloud computing and data management",
  p5: ". Eager to apply existing knowledge and grow further in data processing and ETL development. Committed to delivering scalable, efficient data solutions that drive business insights and success.",
};

export const projectData: {
  projects: ProjectData[];
} = {
  projects: [
    // {
    //   name: "AI Assisted Slide Editing Tool",
    //   description:
    //     "Developed an AI-assisted content generator for creating slides, including a collaborative slide editor with animation support. Implemented functionality to render animated slides as MP4 files and integrated a scheduled mail delivery system for seamless content sharing.",
    //   keywords: [
    //     "Python",
    //     "JavaScript",
    //     "FabricJS",
    //     "MySQL",
    //     "AWS Ec2",
    //     "ReactJS",
    //   ],
    //   image: "https://picsum.photos/id/237/200/300",
    //   id: "qwe",
    // },
    {
      name: "Intruder Detection for Night Surveillance",
      description:
        "Developed an AI-powered real-time intruder detection and face recognition system using Flask, deployed on AWS EC2. Built a Flutter-based mobile app with Firebase integration for real-time monitoring and notifications. Utilized image processing techniques and AI models on Raspberry Pi for efficient edge computing, enabling robust and responsive performance.",
      keywords: [
        "Python",
        "Flutter",
        "Firebase",
        "Flask",
        "Linux",
        "Tensorflow",
        "OpenCV",
        "GIT",
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/intruder-detector-ef9ab.appspot.com/o/my-portfolio%2Fintruder-detector.jpeg?alt=media&token=bd20434d-51d9-4785-af77-534da0c1344f",
      id: "1qws",
    },

    {
      name: "Movie Suggester",
      description:
        "Designed and developed a personalized movie recommendation system where users can select genres and languages. Built a secure backend with Go, utilizing MySQL for data storage and JWT for authentication. Created a cross-platform mobile application using Flutter to deliver an intuitive and engaging user experience.",
      keywords: ["GO", "Flutter", "MySQL", "GeminiAI", "Riverpod", "GIT"],
      image:
        "https://external-preview.redd.it/tWkYFRTFlq1fwO9BmAdtXVIQas1Hljzsl3iyZFGSNhg.jpg?width=640&crop=smart&auto=webp&s=9abdf1392c1eb187b1182b47cf678c78382c59dc",
      id: "azx",
    },

    {
      name: "Concertika",
      description:
        "Developed an event management system for musical band owners as a React web application. Implemented data analytics and visualization features for past events, along with song suggestions based on event types. Integrated a RESTful backend API for seamless data handling and operations.",
      keywords: ["NextJS", "TailwindCSS", "NodeJS", "Redux", "GIT"],
      image:
        "https://cdn.dribbble.com/users/2569465/screenshots/16552923/media/b0fac879c5d829680c8434ffa1cdcddf.jpg?resize=400x300&vertical=center",
      id: "aqaw",
    },
  ],
};

const skills = {
  core: [
    "All",
    "Python",
    "JavaScript",
    "ReactJS",
    "Flutter",
    "GO",
    "NodeJS",
    "Databases",
    "R",
    "C",
    "AI/ML",
    "Data Science",
    "Frontend developement",
    "Backend developement",
  ],
  all: [
    "DSA",
    "Python",
    "JavaScript",
    "ReactJS",
    "Flutter",
    "GO",
    "HTML",
    "CSS",
    "Node.JS",
    "ExpressJS",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Pydantic",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "OpenAI",
    "Numpy",
    "OpenCV",
    "Flask",
    "FastAPI",
    "Tensorflow",
    "Scikit-Learn",
    "LangChain",
    "LlamaIndex",
    "TypeScript",
    "AWS EC2",
    "GIT",
    "CI/CD",
    "FFMPEG",
    "Linux",
    "Tkinter",
    "R",
    "C",
    "PySpark",
    "RAG modelling",
    "Agile",
    "Scrum",
    "google-tts",
    "OOP",
    "NextJS",
    "AI/ML",
    "Image Processing",
    "Computer vision",
    "Project management",
    "Streamlit",
  ],
  python: [
    "iPython",
    "DSA",
    "Pydantic",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Numpy",
    "OpenCV",
    "Flask",
    "FastAPI",
    "Tensorflow",
    "Scikit-Learn",
    "LangChain",
    "LlamaIndex",
    "OOP",
    "Tkinter",
    "PySpark",
    "AI/ML",
    "Image Processing",
    "Computer vision",
    "Streamlit",
  ],
  javascript: [
    "DSA",
    "ReactJS",
    "NodeJS",
    "TypeScript",
    "NextJS",
    "AI/ML",
    "FabricJS",
  ],
  "frontend developement": [
    "ReactJS",
    "Flutter",
    "HTML",
    "CSS",
    "Tkinter",
    "NextJS",
    "Streamlit",
  ],
  "backend developement": ["GO", "Node.JS", "ExpressJS", "Flask", "FastAPI"],
  "data science": [
    "DSA",
    "Python",
    "JavaScript",
    "GO",
    "MySQL",
    "Pydantic",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "OpenAI",
    "Numpy",
    "Tensorflow",
    "Scikit-Learn",
    "LangChain",
    "LlamaIndex",
    "TypeScript",
    "R",
    "PySpark",
    "Streamlit",
  ],
  "ai/ml": [
    "DSA",
    "Python",
    "JavaScript",
    "GO",
    "MySQL",
    "Pydantic",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "OpenAI",
    "Numpy",
    "Tensorflow",
    "Scikit-Learn",
    "LangChain",
    "LlamaIndex",
    "TypeScript",
    "R",
    "PySpark",
    "Streamlit",
    "ChromaDB",
    "RAG modelling",
    "Propmt Engineering",
  ],
  reactjs: [
    "Redux",
    "Context API",
    "NextJS",
    "Tailwind css",
    "SSR",
    "SSG",
    "NextAuth",
    "app routing",
  ],
  flutter: ["dart", "Riverpod", "Provider", "MVVM"],
  go: ["Rest API", "Concurrent Programming"],
  nodejs: ["Rest API", "ExpressJS"],
  databases: ["SQL", "MySQL", "MongoDB", "Firebase"],
};

export const sectionsData = {
  my_data: myData,
  intro: {
    data: introData,
  },
  about: {
    data: aboutData,
  },
  projects: {
    data: projectData,
  },
  skills: {
    data: skills,
  },
};
