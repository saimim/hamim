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
    ODI,
    linkedin,
    twitter,
    facebook,
    instagram,
    kaggle,
    githubx
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
      link: "https://www.openai.com" // Example link, change as needed
    },
    {
      name: "android",
      icon: android,
      link: "https://developer.android.com" // Example link
    },
    {
      name: "arduino",
      icon: arduino,
      link: "https://www.arduino.cc"
    },
    {
      name: "c",
      icon: c,
      link: "https://www.iso.org/standard/74528.html"
    },
    {
      name: "css",
      icon: css,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "git",
      icon: git,
      link: "https://git-scm.com"
    },
    {
      name: "html",
      icon: html,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      name: "java",
      icon: java,
      link: "https://www.java.com"
    },
    {
      name: "pandas",
      icon: pands,
      link: "https://pandas.pydata.org"
    },
    {
      name: "pytorch",
      icon: pytorch,
      link: "https://pytorch.org"
    },
    {
      name: "seaborn",
      icon: seaborn,
      link: "https://seaborn.pydata.org"
    },
    {
      name: "sklearn",
      icon: sklearn,
      link: "https://scikit-learn.org"
    },
    {
      name: "tensorflow",
      icon: tensorflow,
      link: "https://www.tensorflow.org"
    }
  ];
  
  
 const experiences = [
  {
    title: "ML Researcher",
    company_name: "Health Informatics Research Lab (HIRL Lab)",
    icon: HIRL,  // Add path to your lab logo image
    iconBg: "#4A90E2",  // Customize the background color of the logo icon (for example)
    date: "Dec 2022 - Present",
    link: "https://www.facebook.com/hirlab", // Add link to the Facebook page here
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

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/md-saimim-islam-khan-hamim-162537277", // Replace with your LinkedIn URL
    },
    {
      name: "Twitter",
      icon: twitter,
      link: "https://x.com/SaimimK", // Replace with your Twitter/X URL
    },
    {
      name: "Facebook",
      icon: facebook,
      link: "https://www.facebook.com/saimim2001", // Replace with your Facebook URL
    },
    {
      name: "Instagram",
      icon: instagram,
      link: "https://www.instagram.com/saimimkhan", // Replace with your Instagram URL
    },
    {
      name: "Kaggle",
      icon: kaggle,
      link: "https://www.kaggle.com/saimimkhan", // Replace with your Kaggle URL
    },
    {
      name: "GitHub",
      icon: githubx,
      link: "https://github.com/saimim", // Replace with your GitHub URL
    },
  ];
  
  export { services, technologies, experiences, projects, socialMediaLinks };