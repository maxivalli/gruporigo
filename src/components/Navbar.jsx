import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // BLOQUEO DE SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const secciones = [
    { nombre: "Home", path: "/", disponible: true },
    { nombre: "Construcción", path: "#", disponible: false },
    { nombre: "Ferretería", path: "#", disponible: false },
    { nombre: "Showroom", path: "#", disponible: false },
    { nombre: "Café & Deco", path: "/cafe", disponible: true },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-[110] mix-blend-difference">
        <div className="text-xl font-black tracking-tighter text-white">
          <Link to="/" onClick={() => setIsOpen(false)}>GR.</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black px-6 py-2 rounded-full font-black text-[10px] tracking-[0.3em] uppercase transition-transform active:scale-95"
        >
          {isOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {/* MENÚ OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-screen z-[105] bg-[#f4ece1] w-full md:w-1/3 flex flex-col justify-center items-center md:items-start md:pl-16 shadow-2xl"
          >
            <div className="flex flex-col gap-6 md:gap-8">
              <span className="text-[10px] font-black tracking-[0.5em] text-[#8b5a2b] uppercase mb-4 block opacity-60 text-center md:text-left">
                Navegación
              </span>
              
              {secciones.map((seccion, index) => (
                <div key={index}>
                  {seccion.disponible ? (
                    <Link
                      to={seccion.path}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl md:text-5xl font-black text-[#2a2a2a] uppercase italic tracking-tighter hover:text-[#8b5a2b] transition-colors inline-block"
                    >
                      {seccion.nombre}
                    </Link>
                  ) : (
                    <span className="text-3xl md:text-5xl font-black text-[#2a2a2a] opacity-10 uppercase italic tracking-tighter cursor-not-allowed inline-block">
                      {seccion.nombre}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0">
              <p className="text-[10px] font-bold tracking-widest text-[#8b5a2b] uppercase italic">
                San Cristóbal, Santa Fe.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;