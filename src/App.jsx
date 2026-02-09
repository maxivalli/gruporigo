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

// ... (tus imports se mantienen igual)

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const [loading, setLoading] = useState(() => !sessionStorage.getItem("loader-visto"));

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      sessionStorage.setItem("loader-visto", "true");
    }
  }, [loading]);

  const getSectionRoute = (seccion) => {
    const title = String(seccion.title || "").toLowerCase();
    const id = String(seccion.id || "").toLowerCase();

    if (title.includes("materiales") || id.includes("materiales")) return "/";
    if (title.includes("ferretería") || title.includes("ferreteria") || id.includes("ferreteria")) return "/";
    if (title.includes("café") || title.includes("cafe") || id.includes("cafe")) return "/cafe";
    if (title.includes("construcción") || title.includes("construccion") || id.includes("construccion")) return "/";
    
    return null; 
  };

  return (
    <>
      {loading && <Loader setFinished={setLoading} />}

      <div
        ref={containerRef}
        className="bg-[#0f0f0f] min-h-screen text-[#f5f5f7] font-sans overflow-x-hidden selection:bg-[#a68a64] selection:text-[#1a1a1a]"
      >
        <BackgroundText scrollYProgress={scrollYProgress} />

        {/* 1. MOVEMOS LA NAVBAR AQUÍ ABAJO, DENTRO DEL MOTION.DIV */}

        <motion.div
          initial={{ opacity: 0 }} // Forzamos siempre a 0 al inicio si es un refresh
          animate={{ opacity: loading ? 0 : 1 }} // Solo se muestra si loading es false
          transition={{ duration: 1 }}
        >
          {/* Al estar aquí, la Navbar esperará a que el Loader termine para aparecer */}
          <Navbar />

          <Hero scrollYProgress={scrollYProgress} />

          <main className="relative z-10 px-4 md:px-10 pb-40 flex flex-col gap-32 md:gap-60">
            {SECCIONES_RIGO.map((seccion, index) => {
              const route = getSectionRoute(seccion);

              return (
                <motion.div
                  key={seccion.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col ${index % 2 === 0 ? "items-start" : "items-end"} w-full`}
                >
                  <div className="w-full md:w-[85%] lg:w-[75%]">
                    {route ? (
                      <Link to={route}>
                        <SectionCard {...seccion} />
                      </Link>
                    ) : (
                      <SectionCard {...seccion} />
                    )}
                  </div>

                  <motion.span
                    className={`absolute font-black select-none pointer-events-none -z-10 leading-none
                      text-[35vw] md:text-[20rem] italic
                      text-[#a68a64] opacity-5
                      ${index % 2 === 0 ? "-right-10" : "-left-10"} 
                      top-1/2 -translate-y-1/2`}
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
