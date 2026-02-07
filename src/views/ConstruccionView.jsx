import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ConstruccionView = () => {
  const pilaresVivienda = [
    { 
      title: "PROYECTO INTEGRAL", 
      desc: "Desde la concepción del plano arquitectónico hasta la última mano de pintura. Gestionamos la dirección de obra de punta a punta, garantizando que el diseño original se respete hasta en el más mínimo detalle técnico." 
    },
    { 
      title: "SISTEMA LLAVE EN MANO", 
      desc: "Eliminamos la incertidumbre del costo de construcción. Presupuestamos tu vivienda con materiales de primera línea de nuestra propia cantera, asegurando stock y congelando precios desde el día cero de la firma del contrato." 
    },
    { 
      title: "ESTRUCTURAS SÓLIDAS", 
      desc: "Especialistas en hormigón visto y grandes luces. Aplicamos ingeniería de naves industriales a la arquitectura residencial, logrando espacios abiertos, modernos y estructuralmente indestructibles." 
    },
    { 
      title: "GESTIÓN COMUNAL", 
      desc: "Nos encargamos de toda la burocracia técnica. Presentación de planos, aprobaciones municipales y finales de obra en San Cristóbal y comunas aledañas. Tu única responsabilidad es elegir los acabados." 
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#0f0f0f] text-[#f5f5f7] min-h-screen font-sans selection:bg-[#a68a64]">
        
        {/* --- 1. HERO: EL SUEÑO ESTRUCTURAL --- */}
        <section className="relative h-screen flex flex-col justify-end p-6 md:p-20 overflow-hidden border-b-[1px] border-[#a68a64]/30">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
              alt="Arquitectura moderna hormigón"
              className="w-full h-full object-cover grayscale brightness-[0.3]"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-20 right-0 text-[30vw] font-black leading-none italic pointer-events-none uppercase"
          >
            HOME
          </motion.div>

          <div className="relative z-10 max-w-5xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-[#a68a64] text-xs tracking-[0.5em] uppercase mb-6 block"
            >
              Arquitectura Residencial // Llave en Mano
            </motion.span>
            <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.8] uppercase italic tracking-tighter mb-10">
              TU CASA <br />
              <span className="text-[#a68a64]">PROPIA.</span>
            </h1>
            <p className="text-lg md:text-xl font-light uppercase tracking-widest leading-tight opacity-70 max-w-2xl text-justify">
              Construimos el refugio definitivo. Fusionamos la solidez del hormigón industrial con la calidez de un hogar diseñado para perdurar por generaciones.
            </p>
          </div>
        </section>

        {/* --- 2. EL MANIFIESTO DE VIVIENDA (Texto Justificado) --- */}
        <section className="py-20 md:py-40 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#a68a64]/20">
          {pilaresVivienda.map((p, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="bg-[#0f0f0f] p-10 md:p-20 border border-[#a68a64]/10 group hover:bg-[#1a1a1a] transition-colors duration-700"
            >
              <span className="font-mono text-[#a68a64] text-sm block mb-10 tracking-[0.3em]">MÓDULO_0{i + 1}</span>
              <h3 className="text-3xl md:text-5xl font-black italic uppercase leading-none mb-8 group-hover:text-[#a68a64] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#f5f5f7]/60 leading-relaxed text-justify font-light text-lg">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* --- 3. SECCIÓN TÉCNICA: GRANDES ESTRUCTURAS --- */}
        <section className="bg-[#f5f5f7] text-[#1a1a1a] py-32 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12">
                INGENIERÍA <br />DE GRAN <br /> ESCALA.
              </h2>
              <p className="text-lg font-bold uppercase text-justify leading-snug">
                Más allá de la vivienda, Grupo Rigo es sinónimo de infraestructura pesada. Diseñamos y montamos tinglados industriales, naves de logística y estructuras de premoldeado para el sector público y privado. Nuestra escala de trabajo no tiene límites.
              </p>
            </div>
            <div className="flex-1 border-[15px] border-[#1a1a1a] relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                alt="Estructura industrial"
              />
            </div>
          </div>
        </section>

        {/* --- 4. CTA: EL COMIENZO --- */}
        <section className="py-40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl md:text-[10vw] font-black italic uppercase leading-none mb-16 tracking-tighter">
            ¿EMPEZAMOS <br />EL <span className="text-[#a68a64]">PLANO?</span>
          </h2>
          
          <motion.button 
            whileHover={{ backgroundColor: "#a68a64", color: "#1a1a1a", scale: 1.05 }}
            className="border-4 border-[#a68a64] text-[#a68a64] px-10 py-5 text-1xl font-black italic uppercase transition-all"
          >
            Agendar Reunión
          </motion.button>
        </section>

        {/* --- FOOTER DIVISIONAL --- */}
        <div className="p-10 border-t border-[#a68a64]/20 flex justify-center items-center font-mono text-[8px] uppercase opacity-40 italic">
          <span>EST. 2026 // PROYECTOS LLAVE EN MANO</span>
        </div>
      </div>
    </>
  );
};

export default ConstruccionView;