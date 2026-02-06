import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";

const Hero = ({ scrollYProgress }) => {
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0.9]), 
    { stiffness: 100, damping: 30 }
  );

  // Variantes para el contenedor del título
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Espaciado entre la entrada de cada línea
        delayChildren: 0.2,
      }
    }
  };

  // Variantes para cada línea de texto
  const itemVariants = {
    initial: { opacity: 0, y: 50, rotateX: 45 },
    animate: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] // Curva de salida suave
      }
    }
  };

  return (
    <header className="relative h-screen flex flex-col justify-center px-6 md:px-20 z-10">
      <motion.div style={{ scale }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-rigo-clay font-bold tracking-[0.5em] mb-4 text-xs md:text-sm"
        >
          GRUPO RIGO / EST. 2010
        </motion.p>

        <motion.h1 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic"
        >
          <motion.span variants={itemVariants} className="block">
            BIEN
          </motion.span>
          <motion.span variants={itemVariants} className="block">
            VENIDOS 
          </motion.span>
          <motion.span variants={itemVariants} className="outline-text text-white block">
            Future.
          </motion.span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[1px] bg-white/20 mt-10 w-full max-w-2xl" 
        />
      </motion.div>
    </header>
  );
};

export default Hero;