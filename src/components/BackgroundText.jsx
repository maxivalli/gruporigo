import React from "react";
import { motion, useTransform } from "framer-motion";

const BackgroundText = ({ scrollYProgress }) => {
  // xLeft: De 0 a -500 (Se mueve hacia la izquierda)
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // xRight: De -50% a 0% (Empieza "atrás" y viene hacia adelante/derecha)
  // O podés probar de [0, 500] si preferís que simplemente se crucen.
  const xRight = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-5 select-none">
      <div className="flex flex-col justify-center h-full">
        <motion.h2 
          style={{ x: xLeft }} 
          className="text-[50vw] md:text-[30vw] font-black whitespace-nowrap leading-none text-white uppercase italic"
        >
          CONSTRUCCION • FERRETERIA • DECO • CAFE •
        </motion.h2>
        
        <motion.h2 
          style={{ x: xRight }} 
          className="text-[50vw] md:text-[30vw] font-black whitespace-nowrap leading-none text-white uppercase italic mt-[-5vw]"
        >
          ESTILO • diseño • SABORES •
        </motion.h2>
      </div>
    </div>
  );
};

export default BackgroundText;