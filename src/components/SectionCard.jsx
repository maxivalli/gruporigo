import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionCard = ({ title, description, badge, image, colorOverlay }) => {
  const cardRef = useRef(null);

  // 1. Seguimos el progreso del scroll específicamente para ESTA tarjeta
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // 2. Transformamos el scroll en movimiento vertical (Y)
  // Cuando la card entra, la imagen está a -10%, cuando sale, a 10%
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={cardRef}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-3xl h-[420px] md:h-[480px] shadow-lg bg-zinc-900 group"
    >
      {/* CONTENEDOR DE IMAGEN PARALLAX */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ 
            backgroundImage: `url(${image})`,
            y: y // Aquí aplicamos el movimiento
          }}
          className="absolute inset-0 bg-cover bg-center scale-110" // scale-110 evita bordes vacíos al moverse
        />
      </div>

      {/* Filtro de color */}
      <div className={`absolute inset-0 ${colorOverlay} opacity-70 z-[1] transition-opacity duration-500 group-hover:opacity-50`} />

      {/* CONTENIDO */}
      <div className="relative flex flex-col h-full justify-between z-10 p-6 md:p-8">
        <div>
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-white">
            {badge}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-black text-white mt-4 leading-[0.9] tracking-tight italic uppercase pr-2 break-words"
            style={{ hyphens: 'auto', overflowWrap: 'break-word' }}
          >
            {title}
          </h2>
        </div>
        
        <p className="text-white/90 max-w-[280px] text-sm md:text-base font-light leading-snug text-justify">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionCard;