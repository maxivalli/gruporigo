import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";

const MaterialesView = () => {
  const containerRef = React.useRef(null);
  
  // Datos pertinentes para una constructora de alto nivel
  const marcas = ["Acindar", "Loma Negra", "Knauf", "Tarquini", "Tersuave", "Siderar"];
  const servicios = [
    { id: "01", title: "Acopio Programado", desc: "Congelamos precio. Almacenamos tu inversión en nuestros depósitos propios." },
    { id: "02", title: "Cómputo Métrico", desc: "Analizamos tus planos para optimizar cada kilogramo de hierro." },
    { id: "03", title: "Logística Pesada", desc: "Grúas y flota propia de alto tonelaje para descarga directa en obra." }
  ];

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="bg-[#0f0f0f] text-[#f5f5f7] min-h-screen font-sans selection:bg-[#a68a64] selection:text-[#1a1a1a]">
        
        {/* --- 1. HERO MONUMENTAL --- */}
        <section className="relative h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
          {/* El 'Background' es tipografía gigante que se mueve lento */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute text-[50vw] font-black italic select-none pointer-events-none leading-none"
          >
            RAW
          </motion.div>

          <div className="z-10 text-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-[15vw] md:text-[12vw] font-black leading-[0.8] uppercase italic tracking-tighter">
                ESTRUCTURA<br />
                <span className="text-[#a68a64]">PRIMARIA</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.2 }}
              className="mt-8 font-mono text-xs md:text-sm tracking-[0.4em] uppercase"
            >
              Abastecimiento Crítico para Proyectos de Autor
            </motion.p>
          </div>

          {/* Indicador de scroll brutalista */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-[2px] h-20 bg-gradient-to-b from-[#a68a64] to-transparent" />
          </div>
        </section>

        {/* --- 2. MARQUEE DE MARCAS (Partner Tape) --- */}
        <div className="bg-[#a68a64] py-6 overflow-hidden flex border-y-2 border-[#1a1a1a]">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap px-10"
          >
            {[...marcas, ...marcas].map((m, i) => (
              <span key={i} className="text-[#1a1a1a] text-4xl font-black italic uppercase tracking-tighter">{m}</span>
            ))}
          </motion.div>
        </div>

        {/* --- 3. SERVICIOS: EL MANIFIESTO (Grid Asimétrico) --- */}
        <section className="py-32 px-4 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none sticky top-32">
              LA CIENCIA<br />DE LA<br /><span className="text-[#a68a64]">OBRA.</span>
            </h2>
          </div>
          
          <div className="md:col-span-7 space-y-20">
            {servicios.map((s) => (
              <motion.div 
                key={s.id}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                className="group border-l-4 border-[#a68a64] pl-8 py-4"
              >
                <span className="font-mono text-[#a68a64] text-lg">{s.id}</span>
                <h3 className="text-4xl font-black uppercase italic mt-2 group-hover:text-[#a68a64] transition-colors">{s.title}</h3>
                <p className="mt-4 text-[#f5f5f7]/60 leading-relaxed text-lg max-w-md text-justify">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 4. DATA VISUAL: LOGÍSTICA EN NÚMEROS --- */}
        <section className="bg-[#f5f5f7] text-[#1a1a1a] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "+500tn", lab: "Acero Mensual" },
              { id: "FLOTA", val: "24hs", lab: "Respuesta Entrega" },
              { val: "100%", lab: "Trazabilidad" },
              { val: "N°1", lab: "Distribuidor Zona" }
            ].map((d, i) => (
              <div key={i} className="border-4 border-[#1a1a1a] p-6 flex flex-col justify-between h-48">
                <span className="text-3xl md:text-5xl font-black italic leading-none">{d.val}</span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold">{d.lab}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. BLOQUE DE CIERRE: IMPACTO FINAL --- */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=2070')] bg-cover bg-center grayscale opacity-20" />
          
          <div className="relative z-10 text-center px-4">
            <h2 className="text-[10vw] font-black italic uppercase leading-none mb-12">
              ¿CONSTRUIMOS?
            </h2>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#f5f5f7", color: "#1a1a1a" }}
              className="bg-[#a68a64] text-[#f5f5f7] text-1xl font-black italic uppercase px-8 py-8 tracking-tighter"
            >
              Pedir Cotización Ahora
            </motion.button>
          </div>

          <div className="absolute bottom-10 w-full flex justify-between px-10 font-mono text-[10px] opacity-40">
             <span>GRUPO RIGO // 2026</span>
             <span>DIVISIÓN MATERIALES PESADOS</span>
          </div>
        </section>

      </div>
    </>
  );
};

export default MaterialesView;