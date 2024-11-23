import {
    aii,
    android,
    arduino,
    c,
    css,
    git,
    html,
    java,
    pands,
    pytorch,
    seaborn,
    sklearn,
    tensorflow,
    AI,
    NLP,
    HIRL,
    ODI
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
      title: "AI Researcher",
      icon: AI,
    },
    {
      title: "Natural Language Processing",
      icon: NLP,
    },
  ];
  
  const technologies = [
    {
      name: "ai",
      icon: aii,
    },
    {
      name: "android",
      icon: android,
    },
    {
      name: "arduino",
      icon: arduino,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "html",
      icon: html,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "pandas",
      icon: pands,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "seaborn",
      icon: seaborn,
    },
    {
      name: "sklearn",
      icon: sklearn,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
  ];
  
  const experiences = [
    {
      title: "ML Researcher",
      company_name: "Health Informatics Research Lab (HIRL Lab)",
      icon: HIRL,  // Add path to your lab logo image
      iconBg: "#4A90E2",  // Customize the background color of the logo icon (for example)
      date: "Dec 2022 - Present",
      points: [
        "Developing cutting-edge Health Informatics-based research and frameworks.",
        "Leading projects in machine learning, AI, and data-driven healthcare solutions.",
        "Collaborating with cross-disciplinary teams to advance healthcare research.",
        "Presenting findings and contributing to publications in the health informatics field."
      ],
    },
  ];
  
  const projects = [
    {
      name: "ODI Winning Probability Prediction",  // New Project
      description:
        "A machine learning project that predicts the probability of winning for a team in an ODI (One Day International) match based on historical data and team performance metrics.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machinelearning",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: ODI,  // Replace with actual image path (e.g., imported image)
      source_code_link: "https://github.com/saimim/SODIWinPredMLProject/tree/main/ODIWinPred",  // GitHub repo link
      live_project_link: "https://odi-match-win-prediction.onrender.com/",  // Live project link
    }
  ];
  
  export { services, technologies, experiences, projects };