import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="md:w-[280px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className="px-4 pt-20" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 px-4 text-secondary text-xl md:max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with expertise in React.js, Next.js,
        Node.js, Express.js, Firebase, Google Cloud, and MongoDB. With strong
        problem-solving abilities and a solid foundation in data structures,
        algorithms, and data analytics, I build efficient, scalable, and
        user-friendly solutions. I'm a quick learner and collaborate closely
        with clients to turn ideas into reality. Let’s build something amazing
        together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 px-4 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
