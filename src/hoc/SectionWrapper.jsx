import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";


//hoc como wrapper de cualquier seccion para darl espacido y tales

const StarWrapper = (Component, idName) =>
  //recibo el component original a wap y el idName para el scroll

  //HOC -> return another funcion
  function HOC() {

    // returna un motion section que render/wraps el inner component
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* En el wrap le doy a todos el caontainer que los ajusta-espaciarlos, yles doy estilos/animaciones de motions. Esa aniamcion es con el stagger*/}

        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        {/* Además, en este "middleware" creo unspan con un empy space, para hacer scroll a este componente/seccion */}

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
