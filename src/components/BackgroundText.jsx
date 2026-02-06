import React from "react";
import { motion, useTransform } from "framer-motion";

const BackgroundText = ({ scrollYProgress }) => {
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10 select-none">
      <motion.h2 style={{ x: xLeft }} className="text-[25vw] font-black whitespace-nowrap leading-none mt-20 text-white">
        CONSTRUCCION • FERRETERIA • DECO • CAFE •
      </motion.h2>
      <motion.h2 style={{ x: xRight }} className="text-[25vw] font-black whitespace-nowrap leading-none italic outline-text text-white">
        ESTILO • CALIDAD • RIGOR • DISEÑO •
      </motion.h2>
    </div>
  );
};

export default BackgroundText;