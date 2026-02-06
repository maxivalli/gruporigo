import React from "react";
import { motion } from "framer-motion";

const Loader = ({ setFinished }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 3, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setFinished(false)}
    >
      <div className="overflow-hidden px-4 md:px-10">
        <motion.h1
          // Cambiamos flex-col por flex-row siempre y ajustamos el text-size
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter italic flex flex-row gap-2 md:gap-4 text-gray-400 justify-center"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span>GRUPO</span> 
          <span className="text-white">RIGO</span>
        </motion.h1>
        
        <motion.div 
          className="h-[2px] bg-rigo-clay mt-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
        />
        
        <motion.p
          className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase mt-6 text-center opacity-50 text-white whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Construyendo el futuro
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;