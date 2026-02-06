import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionCard = ({ title, description, badge, image, colorOverlay }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax cruzado: la imagen sube, el título se desplaza lateralmente
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const xTitle = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center bg-transparent group overflow-hidden md:overflow-visible"
    >
      {/* 1. ELEMENTO FLOTANTE DE FONDO (TEXTURA/COLOR) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`absolute inset-15 md:inset-10 ${colorOverlay} opacity-10 blur-2xl rounded-full z-0`}
      />

      {/* 2. MARCO DE IMAGEN DECONSTRUIDO */}
      <motion.div
        style={{ y: yImage, rotate: rotateImage }}
        className="relative z-10 w-[70%] h-[60%] md:w-[45%] md:h-[70%] border border-white/10 p-2 bg-white/5 backdrop-blur-sm shadow-2xl"
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.div
            style={{ 
              backgroundImage: `url(${image})`,
              scale: 1.2
            }}
            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          {/* Overlay interno */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
        </div>
        
        {/* Badge flotando sobre el borde del marco */}
        <span className="absolute -top-3 -left-3 bg-white text-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] z-30">
          {badge}
        </span>
      </motion.div>

      {/* 3. TIPOGRAFÍA DISRUPTIVA (Fuera de eje) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center">
        <motion.h2 
          style={{ x: xTitle }}
          className="text-[12vw] md:text-[9vw] font-black text-white mix-blend-difference leading-none uppercase italic tracking-tighter opacity-90"
        >
          {title}
        </motion.h2>
        
        {/* Descripción desplazada hacia un lateral */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 right-10 md:right-20 max-w-[200px] md:max-w-[350px] text-right"
        >
          <div className="w-12 h-px bg-white ml-auto mb-4" />
          <p className="text-white/70 text-xs md:text-sm font-light uppercase tracking-widest leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* 4. ELEMENTO DECORATIVO (Geometría) */}
      <div className="absolute top-10 left-10 text-white/10 font-mono text-[10px] hidden md:block">
        ESTU. RIGO // 2024 <br />
        VANGUARDIA & ESTILO
      </div>
    </motion.div>
  );
};

export default SectionCard;