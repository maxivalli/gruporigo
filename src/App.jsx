import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { SECCIONES_RIGO } from "./data";

// Componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundText from "./components/BackgroundText";
import SectionCard from "./components/SectionCard";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Estado del loader: se inicializa chequeando si ya se vio en esta sesión
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("loader-visto");
  });

  // Efecto para manejar el scroll del body y persistir el estado del loader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      sessionStorage.setItem("loader-visto", "true");
    }
  }, [loading]);

  return (
    <>
      {/* El Loader solo se renderiza si no se ha visto en la sesión actual */}
      {loading && <Loader setFinished={setLoading} />}

      <div
        ref={containerRef}
        className="bg-[#0f0f0f] min-h-screen text-white font-sans overflow-x-hidden"
      >
        <BackgroundText scrollYProgress={scrollYProgress} />

        <Navbar />

        {/* El contenido principal no parpadea si ya se cargó previamente */}
        <motion.div
          initial={{ opacity: loading ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero scrollYProgress={scrollYProgress} />

          <main className="relative z-10 px-6 md:px-20 pb-0 flex flex-col gap-40 md:gap-80">
            {SECCIONES_RIGO.map((seccion, index) => {
              // Identificamos la sección de Café & Deco por ID o Título
              const isCafe =
                seccion.id === "CAFÉ & DECO" ||
                seccion.title?.toLowerCase().includes("café");

              // Contenido base de la tarjeta
              const CardContent = (
                <div
                  className={`w-full md:w-[60%] z-10 ${seccion.featured ? "md:w-full" : ""}`}
                >
                  <SectionCard {...seccion} />
                </div>
              );

              return (
                <motion.div
                  key={seccion.id}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                    rotate: index % 2 === 0 ? -10 : 10,
                    scale: 0.8,
                  }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1,
                  }}
                  className={`relative flex flex-col ${index % 2 === 0 ? "items-start" : "items-end"} w-full`}
                >
                  {/* Si es Café, envolvemos la card en un Link a /cafe */}
                  {isCafe ? (
                    <Link
                      to="/cafe"
                      className="w-full flex flex-col items-inherit contents"
                    >
                      {CardContent}
                    </Link>
                  ) : (
                    CardContent
                  )}

                  {/* NÚMERO DE FONDO (Indicador de sección) */}
                  <motion.span
                    className={`absolute font-black select-none pointer-events-none -z-10 leading-none
    text-[25vw] md:text-[14rem] 
    opacity-20 md:opacity-10 
    ${index % 2 === 0 ? "-right-4 md:-right-10" : "-left-4 md:-left-10"} 
    -top-20 md:-top-40`}
                    whileInView={{ y: [30, 0], opacity: [0, 0.2] }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    0{index + 1}
                  </motion.span>
                </motion.div>
              );
            })}
          </main>

          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default App;
