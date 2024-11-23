import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left decoration */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" /> {/* White color */}
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-gray-300" /> {/* Subtle gradient */}
        </div>

        {/* Hero Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="font-bold text-white">Saimim</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop AI models, <br className="sm:block hidden" />
            and AI-based web applications
          </p>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90" />
    </section>
  );
};

export default Hero;
