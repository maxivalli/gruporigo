import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PALABRAS = ["CAFÉ & DECO", "MATERIALES", "FERRETERÍA", "CONSTRUCCIÓN"];

const Loader = ({ setFinished }) => {
  const [index, setIndex] = useState(0);
  const [showGrupo, setShowGrupo] = useState(false);

  useEffect(() => {
    if (index < PALABRAS.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 400); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowGrupo(true), 600);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 3, duration: 1, ease: [0.85, 0, 0.15, 1] }}
      onAnimationComplete={() => setFinished(false)}
    >
      <div className="relative flex flex-col items-center justify-center w-full">
        <motion.div 
          layout
          className="flex items-center justify-center relative"
          animate={{ x: showGrupo ? 0 : -60 }} 
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {/* PALABRA: GRUPO */}
          <AnimatePresence>
            {showGrupo && (
              <motion.span
                initial={{ x: -20, opacity: 0, filter: "blur(10px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter italic mr-1 md:mr-2 text-gray-500"
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                GRUPO
              </motion.span>
            )}
          </AnimatePresence>

          {/* PALABRA: RIGO */}
          <motion.h1
            layout
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter italic text-white z-10"
          >
            RIGO
          </motion.h1>

          {/* PALABRAS DINÁMICAS */}
          <div className="absolute left-full pl-4 md:pl-6 flex items-center h-full">
            <AnimatePresence mode="wait">
              {!showGrupo && (
                <motion.span
                  key={PALABRAS[index]}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg sm:text-xl md:text-3xl font-light italic text-[#a68a64] whitespace-nowrap"
                >
                  {PALABRAS[index]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* LÍNEA DECORATIVA: Aparece de izquierda a derecha tras aparecer GRUPO */}
        <div className="h-[2px] w-48 md:w-96 mt-4 overflow-hidden">
          <AnimatePresence>
            {showGrupo && (
              <motion.div 
                className="h-full bg-white/20"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;