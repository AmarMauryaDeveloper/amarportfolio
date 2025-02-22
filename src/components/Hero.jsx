import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]   mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#164863]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-[70%]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-blue-600">Amar Maurya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            Passionate Software Developer specializing in React.js, Next.js,
            Node.js, Express.js, Firebase, Google Cloud, and MongoDB.{" "}
            <br className="sm:block hidden" />
            Strong problem-solving skills with a solid foundation in data
            structures, algorithms, and data analytics. Dedicated to building
            innovative and scalable solutions that drive technological
            advancement.
          </p>
        </div>
        <div className="w-[30%]">
          <ComputersCanvas />
          {/* <img src="src/assets/tripguide.png" /> */}
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
