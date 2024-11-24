import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas"; // Assuming this component handles the 3D ball animation
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState({}); // Store the clicked state for each technology

  // Dynamically detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBallClick = (name, link) => {
    if (isMobile) {
      // On mobile, just open the link immediately
      window.open(link, "_blank");
    } else {
      // On desktop, toggle the "clicked" state for the ball
      if (!clicked[name]) {
        setClicked((prevState) => ({
          ...prevState,
          [name]: true, // First click, allow routing
        }));
      } else {
        window.open(link, "_blank"); // Second click, open the link
      }
    }
  };

  return (
    <div
      className={`flex flex-row flex-wrap justify-center gap-10 ${
        isMobile ? "px-4" : "px-10"
      }`}
    >
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className={`${
            isMobile ? "w-16 h-16" : "w-28 h-28"
          } cursor-pointer`} // Added cursor-pointer for clickable effect
          onClick={() => handleBallClick(technology.name, technology.link)} // Handle the click for toggling or routing
        >
          {/* Render BallCanvas with 3D effect for desktop, static on mobile */}
          <BallCanvas
            icon={technology.icon}
            isMobile={isMobile}
            isClicked={clicked[technology.name]} // Pass clicked state to the canvas
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
