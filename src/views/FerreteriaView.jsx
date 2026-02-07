import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";

const FerreteriaView = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const items = [
    {
      title: "PODER",
      cat: "Herramientas Eléctricas",
      img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000",
      x: "5%",
      y: "5%",
    },
    {
      title: "FIJACIÓN",
      cat: "Fijaciones Industriales",
      img: "https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      x: "5%",
      y: "5%",
    },
    {
      title: "CORTE",
      cat: "Discos y Abrasivos",
      img: "https://images.unsplash.com/photo-1560846389-956694677531?q=80&w=2074",
      x: "5%",
      y: "15%",
    },
    {
      title: "SOLDADO",
      cat: "Equipos de Soldadura",
      img: "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?q=80&w=2071",
      x: "5%",
      y: "5%",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        ref={containerRef}
        className="bg-[#1a1a1a] text-[#f5f5f7] h-[500vh] font-sans selection:bg-[#a68a64]"
      >
        {/* --- SECTION 1: HERO KINÉTICO --- */}
        <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            style={{
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 15]),
              opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
            }}
            className="absolute z-0 font-black italic text-[25vw] leading-none whitespace-nowrap text-[#a68a64]"
          >
            FERRETERÍA
          </motion.div>

          <motion.div
            className="z-10 text-center"
            style={{ scale: springScale, rotate }}
          >
            <h1 className="text-6xl md:text-[9vw] font-black uppercase italic leading-[0.8] tracking-tighter">
              PRECISIÓN <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #f5f5f7" }}
              >
                ABSOLUTA
              </span>
            </h1>
            <div className="mt-10 flex justify-center gap-4">
              <div className="px-4 py-2 border border-[#a68a64] text-[#a68a64] font-mono text-[10px] animate-pulse">
                SISTEMA: V.2026
              </div>
              <div className="px-4 py-2 border border-white/20 text-white/40 font-mono text-[10px]">
                ORIGEN: STOCK_CENTRAL
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: INVENTARIO FLOTANTE --- */}
        <section className="relative w-full px-6">
          {items.map((item, i) => {
            const range = [0.2 + i * 0.15, 0.4 + i * 0.15];
            const yMove = useTransform(scrollYProgress, range, [400, -400]);
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
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>

                  <div className="absolute -bottom-10 right-10 bg-[#f5f5f7] text-[#1a1a1a] p-8 min-w-[250px] shadow-2xl">
                    <h3 className="text-4xl font-black italic leading-none">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest font-bold opacity-50">
                      {item.cat}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* --- SECTION 3: FICHA TÉCNICA --- */}
        <section className="min-h-screen w-full flex items-center justify-center bg-[#f5f5f7] text-[#1a1a1a] p-6 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl z-10">
            <div className="border-[20px] border-[#1a1a1a] p-10 flex flex-col justify-between">
              <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
                EQUIPO <br /> <span className="text-[#a68a64]">TOTAL</span>{" "}
                <br /> PRO.
              </h2>
              <p className="text-sm font-bold uppercase tracking-[0.2em] mt-20">
                Soluciones para profesionales, talleres y el hogar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["MAKITA", "DEWALT", "BOSCH", "SKIL", "STANLEY", "BAHCO"].map(
                (brand) => (
                  <div
                    key={brand}
                    className="border-2 border-[#1a1a1a] flex items-center justify-center h-32 text-xl font-black italic hover:bg-[#a68a64] transition-colors cursor-crosshair"
                  >
                    {brand}
                  </div>
                ),
              )}
              <div className="col-span-2 border-2 border-[#1a1a1a] p-6 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  Consultar stock de marcas exclusivas
                </span>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 p-10 font-mono text-[20vw] opacity-[0.03] font-black select-none">
            2026
          </div>
        </section>

        {/* --- SECTION 4: LLAMADO A LA ACCIÓN --- */}
        <section className="h-screen flex items-center justify-center bg-[#1a1a1a]">
          <div className="text-center">
            <h2 className="text-[12vw] font-black italic text-[#f5f5f7] uppercase leading-none mb-4">
              ¿QUÉ BUSCAS?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-5 bg-[#a68a64] text-[#1a1a1a] text-3xl font-black italic uppercase overflow-hidden group"
            >
              <span className="relative z-10">CONTÁNOS</span>
              {/* Efecto de barrido brutalista al hover */}
              <motion.div className="absolute inset-0 bg-[#f5f5f7] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FerreteriaView;
