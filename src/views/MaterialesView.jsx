import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";

const MARCAS = [
  { name: "ACINDAR", desc: "Acero de alta densidad para estructuras críticas.", cat: "HIERRO" },
  { name: "LOMA NEGRA", desc: "El cemento que fundó la arquitectura argentina.", cat: "CEMENTO" },
  { name: "KNAUF", desc: "Sistemas de construcción en seco de alta performance.", cat: "SECO" },
  { name: "TARQUINI", desc: "Revestimientos con textura mineral y protección.", cat: "COLOR" },
  { name: "SIDERAR", desc: "Perfiles y chapas para cubiertas industriales.", cat: "METAL" },
  { name: "TERSUAVE", desc: "Tecnología en protección y acabados finales.", cat: "OBRA" }
];

const MaterialesView = () => {
  return (
    <>
    <Navbar/>
    {/* Agregamos pt-20 (o la altura de tu navbar) para que el Hero no quede tapado */}
    <div className="bg-[#1a1a1a] text-[#f5f5f7] min-h-screen font-sans pt-20">
      
      {/* --- HERO SECTION: BRUTALISMO TIPOGRÁFICO --- */}
      <section className="relative h-[75vh] flex flex-col justify-end p-4 border-b-8 border-[#a68a64]">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10"
        >
          <span className="text-[#a68a64] font-mono text-xs tracking-[0.3em] uppercase">Materia Prima // Rigo</span>
          {/* Eliminamos el stroke y aplicamos color sólido Clay para un look arquitectónico más pesado */}
          <h1 className="text-[18vw] leading-[0.8] font-black italic uppercase tracking-tighter mt-4">
            MATERIAL<br/>
            <span className="text-[#a68a64]">DE OBRA</span>
          </h1>
        </motion.div>
        
        {/* Elemento arquitectónico decorativo */}
        <div className="absolute top-10 right-4 text-right font-mono text-[10px] opacity-30">
          PROYECTO: DIV. MATERIALES<br/>
          UBICACIÓN: SAN CRISTÓBAL<br/>
          COORD: 30.31° S, 61.23° W
        </div>
      </section>

      {/* --- LOGÍSTICA: EL BLOQUE MONOLÍTICO --- */}
      <section className="bg-[#a68a64] text-[#1a1a1a] p-4 flex flex-col gap-8 py-16">
        <h2 className="text-6xl font-black uppercase italic leading-none tracking-tighter">
          LOGÍSTICA<br/>A PIE DE OBRA
        </h2>
        <div className="h-[1px] bg-[#1a1a1a] w-full opacity-20" />
        <p className="text-lg font-bold uppercase leading-tight max-w-[80%]">
          Flota propia. Entrega inmediata. Sin intermediarios.
        </p>
        <div className="flex justify-between items-end">
          <div className="text-[10px] font-mono border border-[#1a1a1a] p-2">
            ESTADO: OPERATIVO 24/7
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-2 border-[#1a1a1a] rounded-full flex items-center justify-center text-[8px] font-black"
          >
            RIGO • RIGO •
          </motion.div>
        </div>
      </section>

      {/* --- MARCAS: GRID DECONSTRUIDO --- */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {MARCAS.map((marca, i) => (
          <div 
            key={i} 
            className={`group relative p-6 border-b border-[#a68a64]/20 flex flex-col justify-between h-[400px] overflow-hidden ${i % 2 !== 0 ? "bg-[#f2f2f2] text-[#1a1a1a]" : "bg-[#1a1a1a]"}`}
          >
            <div className="flex justify-between items-start z-10">
              <span className={`font-mono text-[10px] ${i % 2 !== 0 ? "text-[#a68a64]" : "text-[#a68a64]"}`}>
                [0{i + 1}]
              </span>
              <span className="font-bold text-[10px] tracking-widest uppercase">
                {marca.cat}
              </span>
            </div>

            <motion.h3 
              whileInView={{ x: [ -20, 0 ], opacity: [ 0, 1 ] }}
              className="text-6xl md:text-8xl font-black italic uppercase leading-none z-10 tracking-tighter"
            >
              {marca.name}
            </motion.h3>

            <p className="text-[11px] uppercase tracking-wider font-medium max-w-[200px] z-10 opacity-70">
              {marca.desc}
            </p>

            <div className="absolute -right-10 -bottom-10 text-[30vw] font-black opacity-[0.05] pointer-events-none italic">
              {i + 1}
            </div>
          </div>
        ))}
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="p-4 py-24 flex flex-col items-center justify-center bg-[#f5f5f7] text-[#1a1a1a]">
        <motion.div 
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          className="text-center"
        >
          <h2 className="text-7xl font-black italic uppercase leading-[0.8] mb-12">
            HACÉ QUE<br/>SUCEDA.
          </h2>
          <button className="w-full md:w-auto bg-[#1a1a1a] text-[#f5f5f7] px-12 py-8 text-sm font-black uppercase tracking-[0.5em] hover:bg-[#a68a64] transition-colors duration-500">
            SOLICITAR COTIZACIÓN
          </button>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default MaterialesView;