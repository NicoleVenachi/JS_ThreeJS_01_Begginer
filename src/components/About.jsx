import React from "react";
import Tilt from "react-tilt"; //para efecto de tilt/inclinacion en las cartas 3when hover
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    {/* tilt para la card y tambien una transicion de fade*/}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // tilt options d  la card
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        {/* icono de la skill/service */}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        {/* titulo de la kill */}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {/* head con animated text */}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m an electronic engineer passionate about software development. 1.5 years of hands-on experience in front-end development, designing and implementing user interfaces using React and Redux. Focused on building intuitive and accessible web applications . In my free time, I enjoy learning new technologies and developing machine-learning solutions for diverse situations I face in my daily life.
      </motion.p>
      {/* body, con una animacioncita pa qeu aparezca como de un desvanecido*/}

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* todos mis services */}
    </>
  );
};

export default SectionWrapper(About, "about");