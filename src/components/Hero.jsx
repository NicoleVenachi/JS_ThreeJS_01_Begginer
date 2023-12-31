import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* punto y linea */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Nicole </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces, <br className='sm:block hidden' />
            web applications and ML solutions
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* "giff" para to show the slider, it was madeed with motion to animate it. absolute para ponerlo en el centro*/}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          {/* lo creo como anchor tag para que me lleve a esa seccion, scroll down */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* borde rectangular de afuera */}
            <motion.div
              animate={{
                y: [0, 24, 0], //se meuve solo en y, va de 0 a 24 px para abajoy vuelve a 0
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' //le doy la fo
            />
            {/* simplemente un motion para crear el circuilito moeindose */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;