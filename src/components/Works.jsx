import React from "react";
import { Tilt } from "react-tilt"; // Tilt component for the hover effect
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets"; // Import only the GitHub logo
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link, // Live project link passed as a prop
}) => {
  // Handle click on the whole card to open the live project link
  const handleCardClick = () => {
    console.log("Opening live project:", live_project_link); // Debugging
    if (live_project_link) {
      window.open(live_project_link, "_blank");
    } else {
      console.log("Live project link is not available!");
    }
  };

  // Handle click on the GitHub icon to open the source code link
  const handleGitHubClick = (event) => {
    event.stopPropagation(); // Prevent triggering card click event
    console.log("Opening source code:", source_code_link); // Debugging
    if (source_code_link) {
      window.open(source_code_link, "_blank");
    } else {
      console.log("Source code link is not available!");
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          onClick={handleCardClick} // Clicking the whole card opens the live project link
          className="relative w-full h-[230px] cursor-pointer"
        >
          {/* Image portion of the card */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub link */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={handleGitHubClick} // Clicking the GitHub icon opens the source code link
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
