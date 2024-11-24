import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { socialMediaLinks } from "../constants";

const FollowMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-2xl font-bold mb-4">Follow Me</h2>
      <div
        className={`flex flex-row flex-wrap justify-center gap-10 ${
          isMobile ? "px-4" : "px-10"
        }`}
      >
        {socialMediaLinks.map((link) => (
          <div
            key={link.name}
            className={`${
              isMobile ? "w-12 h-12" : "w-16 h-16"
            } rounded-full overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12`}
            onClick={() => window.open(link.link, "_blank")}
          >
            {/* Displaying static image icons */}
            <img
              src={link.icon}  // Assuming link.icon is a path to an image file
              alt={link.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(FollowMe, "");
