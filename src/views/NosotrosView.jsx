import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";

const NosotrosView = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const xMove = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xMoveReverse = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="bg-[#0f0f0f] text-[#f5f5f7] min-h-screen font-sans selection:bg-[#a68a64] overflow-x-hidden">
        
        {/* --- 1. HERO KINÉTICO: EL ADN --- */}
        <section className="h-[80vh] flex flex-col justify-center relative border-b-8 border-[#a68a64] overflow-hidden">
          <motion.div style={{ x: xMove }} className="absolute top-10 whitespace-nowrap">
            <span className="text-[18vw] font-black opacity-5 italic uppercase leading-none">
              EVOLUCIÓN ESTRATÉGICA • DESDE 1994 • EVOLUCIÓN ESTRATÉGICA •
            </span>
          </motion.div>

          <div className="px-6 md:px-20 z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-[#a68a64] text-xs md:text-sm tracking-[0.5em] uppercase mb-4 block"
            >
              Rigo // San Cristóbal // Santa Fe
            </motion.span>
            <h1 className="text-[15vw] md:text-[11vw] font-black leading-[0.8] uppercase italic tracking-tighter">
              NUESTRA <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #a68a64" }}>HISTORIA.</span>
            </h1>
          </div>

          <motion.div style={{ x: xMoveReverse }} className="absolute bottom-10 whitespace-nowrap">
            <span className="text-[18vw] font-black opacity-5 italic uppercase leading-none">
              SOLIDEZ PROYECTADA • SOLIDEZ PROYECTADA •
            </span>
          </motion.div>
        </section>

        {/* --- 2. EL ORIGEN: MATERIALES --- */}
        <section className="py-20 md:py-40 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] sticky top-32">
              EL CIMIENTO <br /> <span className="text-[#a68a64]">1994.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-7 space-y-16">
            <div className="border-l-8 border-[#a68a64] pl-8">
              <p className="text-xs md:text-2xl text-justify font-light uppercase italic leading-snug">
                Grupo Rigo inició su recorrido hace más de tres décadas como una respuesta a la necesidad de insumos base en el norte santafesino. En aquel entonces, la distribución de materiales pesados —cemento, hierro y áridos— sentó las bases de nuestra identidad: el compromiso con la entrega inmediata y el stock inagotable. Fuimos el primer nexo real entre las grandes cementeras y el desarrollo urbano de San Cristóbal.
              </p>
            </div>

            {/* SECCIÓN FERRETERÍA & CONSTRUCCIÓN */}
            <div className="bg-[#f5f5f7] text-[#1a1a1a] p-10 md:p-16">
              <h3 className="text-3xl font-black uppercase mb-6 italic italic tracking-tighter text-[#a68a64]">EXPANSIÓN TÉCNICA</h3>
              <p className="text-xs md:text-xl text-justify font-bold uppercase italic leading-tight">
                Con el cambio de milenio, la empresa detectó la demanda de herramientas de precisión y tecnología aplicada. Así nació nuestra división de Ferretería Industrial, incorporando marcas líderes internacionales para abastecer no solo al particular, sino a la gran industria regional. Este crecimiento natural nos llevó a la creación de nuestra división de Construcción, donde pasamos de proveer el material a proyectar y ejecutar naves industriales y viviendas de autor llave en mano.
              </p>
            </div>

            {/* SECCIÓN CAFÉ & DECO */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">CAFÉ & <span className="text-[#a68a64]">DECO.</span></h3>
              <p className="text-xs md:text-2xl text-justify font-light uppercase italic leading-snug">
                La visión de Grupo Rigo alcanzó su madurez con nuestra última unidad de negocio. Entendimos que la obra no termina en el hormigón, sino en la experiencia de habitarla. Café & Deco es la culminación de este ecosistema: un espacio de vanguardia donde el diseño de interiores, el mobiliario de alta gama y el café de especialidad convergen para ofrecer el detalle final. De la base estructural al placer del entorno.
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. RESUMEN DE ÁREAS (GRILLE BRUTALISTA) --- */}
        <section className="py-20 md:py-40 px-6 md:px-20 border-y border-[#a68a64]/20 bg-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { t: "MATERIALES", d: "DISTRIBUCIÓN MAYORISTA DE INSUMOS PESADOS Y ESTRUCTURAS DE BASE." },
              { t: "FERRETERÍA", d: "SUMINISTROS INDUSTRIALES TÉCNICOS Y HERRAMIENTAS DE PRECISIÓN." },
              { t: "CONSTRUCCIÓN", d: "INGENIERÍA CIVIL, NAVES INDUSTRIALES Y VIVIENDAS LLAVE EN MANO." },
              { t: "CAFÉ & DECO", d: "DISEÑO DE AUTOR, MOBILIARIO Y EXPERIENCIA DE ESPECIALIDAD." }
            ].map((area, i) => (
              <div key={i} className="flex flex-col border-b md:border-b-0 md:border-r border-[#a68a64]/20 pb-10 md:pb-0 md:pr-10 last:border-none">
                <span className="text-[#a68a64] font-mono text-2xl mb-4 font-black italic">MOD_{i+1} //</span>
                <h3 className="text-3xl font-black italic uppercase mb-6 leading-none">{area.t}</h3>
                <p className="text-sm text-justify font-light uppercase italic leading-tight opacity-70">
                  {area.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. CIERRE --- */}
        <section className="py-40 px-6 text-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-[10vw] font-black italic uppercase leading-[0.8] tracking-tighter mb-10">
              SOLIDEZ <br /> <span className="text-[#a68a64]">INTEGRAL.</span>
            </h2>
            <div className="h-[10px] w-full bg-[#f5f5f7] mb-10" />
            <p className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase opacity-40">
              GRUPO RIGO // TRES DÉCADAS DE INFRAESTRUCTURA
            </p>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default NosotrosView;