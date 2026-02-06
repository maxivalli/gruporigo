import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";

const FerreteriaView = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animaciones de escala y rotación para sensación de profundidad
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const items = [
    { title: "POWER", cat: "Herramientas Eléctricas", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000", x: "-10%", y: "10%" },
    { title: "FIX", cat: "Fijaciones Industriales", img: "https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", x: "15%", y: "20%" },
    { title: "CUT", cat: "Discos y Abrasivos", img: "https://images.unsplash.com/photo-1560846389-956694677531?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", x: "-5%", y: "15%" },
    { title: "WELD", cat: "Equipos de Soldadura", img: "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", x: "10%", y: "5%" }
  ];

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="bg-[#1a1a1a] text-[#f5f5f7] h-[500vh] font-sans selection:bg-[#a68a64]">
        
        {/* --- SECTION 1: KINETIC HERO (Sticky) --- */}
        <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Fondo Dinámico: Texto que se expande al scrollear */}
          <motion.div 
            style={{ scale: useTransform(scrollYProgress, [0, 0.2], [1, 15]), opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            className="absolute z-0 font-black italic text-[25vw] leading-none whitespace-nowrap text-[#a68a64]"
          >
            HARDWARE
          </motion.div>

          <motion.div 
            className="z-10 text-center"
            style={{ scale: springScale, rotate }}
          >
            <h1 className="text-7xl md:text-[9vw] font-black uppercase italic leading-[0.8] tracking-tighter">
              PRECISION <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f5f5f7" }}>UNLOCKED</span>
            </h1>
            <div className="mt-10 flex justify-center gap-4">
              <div className="px-4 py-2 border border-[#a68a64] text-[#a68a64] font-mono text-[10px] animate-pulse">
                SYS_VER: 2.0.26
              </div>
              <div className="px-4 py-2 border border-white/20 text-white/40 font-mono text-[10px]">
                LOC: STOCK_HUB
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: FLOATING INVENTORY --- */}
        <section className="relative w-full px-6">
          {items.map((item, i) => {
            const range = [0.2 + i * 0.15, 0.4 + i * 0.15];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const yMove = useTransform(scrollYProgress, range, [400, -400]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, range, [0, 1]);

            return (
              <motion.div 
                key={i}
                style={{ y: yMove, x: item.x, opacity }}
                className="relative my-[20vh] md:my-[40vh] max-w-xl mx-auto group"
              >
                <div className="absolute -left-10 top-0 text-[#a68a64] font-mono text-4xl font-black">
                  0{i + 1}
                </div>
                
                <div className="relative border-4 border-[#f5f5f7] p-2 bg-[#1a1a1a] transition-all duration-700 group-hover:border-[#a68a64]">
                  <div className="h-[300px] md:h-[500px] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 bg-[#f5f5f7] text-[#1a1a1a] p-8 min-w-[250px] shadow-2xl">
                    <h3 className="text-5xl font-black italic leading-none">{item.title}</h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest font-bold opacity-50">{item.cat}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* --- SECTION 3: THE SPEC SHEET --- */}
        <section className="min-h-screen w-full flex items-center justify-center bg-[#f5f5f7] text-[#1a1a1a] p-6 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl z-10">
            <div className="border-[20px] border-[#1a1a1a] p-10 flex flex-col justify-between">
              <h2 className="text-8xl font-black italic uppercase leading-none tracking-tighter">
                FULL <br /> <span className="text-[#a68a64]">TOOL</span> <br /> KIT.
              </h2>
              <p className="text-sm font-bold uppercase tracking-[0.2em] mt-20">
                Soluciones para industria pesada, talleres de precisión y hobbistas avanzados.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {["MAKITA", "DEWALT", "BOSCH", "SKIL", "STANLEY", "BAHCO"].map((brand) => (
                <div key={brand} className="border-2 border-[#1a1a1a] flex items-center justify-center h-32 text-xl font-black italic hover:bg-[#a68a64] transition-colors cursor-crosshair">
                  {brand}
                </div>
              ))}
              <div className="col-span-2 border-2 border-[#1a1a1a] p-6 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Consultar por marcas exclusivas</span>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
          
          {/* Decoración de fondo */}
          <div className="absolute bottom-0 right-0 p-10 font-mono text-[20vw] opacity-[0.03] font-black select-none">
            2026
          </div>
        </section>

        {/* --- SECTION 4: CALL TO ACTION RADICAL --- */}
        <section className="h-screen flex items-center justify-center bg-[#1a1a1a]">
          <motion.div 
            whileHover={{ scale: 0.95 }}
            className="cursor-pointer group relative"
          >
            <h2 className="text-[15vw] font-black italic text-transparent stroke-white opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ WebkitTextStroke: "2px #f5f5f7" }}>
              CONTACT
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#a68a64] text-[#1a1a1a] text-2xl md:text-4xl font-black italic uppercase px-12 py-6 shadow-[20px_20px_0px_#f5f5f7] group-hover:shadow-none group-hover:translate-x-4 group-hover:translate-y-4 transition-all">
                PEDIR COTIZACIÓN
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default FerreteriaView;