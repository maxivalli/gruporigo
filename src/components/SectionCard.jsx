import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionCard = ({ title, description, badge, image }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Efectos de movimiento pesados
  const yImage = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  const xText = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center bg-transparent group"
    >
      {/* 1. MARCO BRUTALISTA (Sustituye al blur) */}
      <motion.div
        style={{ y: yImage }}
        className="relative z-10 w-[85%] h-[60%] md:w-[50%] md:h-[75%] border-4 border-[#a68a64] bg-[#0f0f0f] p-0 shadow-[20px_20px_0px_#1a1a1a]"
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.div
            style={{ 
              backgroundImage: `url(${image})`,
              scale: 1.1
            }}
            className="absolute inset-0 bg-cover bg-center brightness-50 group-hover:brightness-100 transition-all duration-1000 ease-out"
          />
        </div>
        
        {/* Badge Sólido Estilo Rigo */}
        <span className="absolute -top-1 -left-1 bg-[#a68a64] text-[#1a1a1a] px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] z-30">
          {badge}
        </span>
      </motion.div>

      {/* 2. TIPOGRAFÍA MASIVA (Mix-Blend) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center">
        <motion.h2 
          style={{ x: xText }}
          className="text-[12vw] md:text-[9vw] font-black text-[#f5f5f7] mix-blend-difference leading-[0.8] uppercase italic tracking-tighter"
        >
          {title}
        </motion.h2>
        
        {/* Descripción en Bloque Sólido */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute bottom-4 right-4 md:bottom-10 md:right-10 max-w-[220px] md:max-w-[380px] bg-[#f5f5f7] p-6 border-l-8 border-[#a68a64]"
        >
          <p className="text-[#1a1a1a] text-[10px] md:text-xs font-black uppercase tracking-widest leading-relaxed text-justify">
            {description}
          </p>
        </motion.div>
      </div>

      {/* 3. COORDENADAS DECORATIVAS */}
      <div className="absolute top-10 left-10 text-[#a68a64] font-mono text-[10px] hidden lg:block opacity-40">
        RIGO_UNIT // SECTION_ID <br />
        STRICTLY_INDUSTRIAL_GRADE
      </div>
    </motion.div>
  );
};

export default SectionCard;