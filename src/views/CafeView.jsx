import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import { PRODUCTOS } from "../prodcuts";

const CafeView = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="relative bg-[#f4ece1] text-[#2a2a2a] overflow-x-hidden selection:bg-[#8b5a2b] selection:text-white"
      style={{
        minHeight: "100vh",
        transition: "min-height 0.3s ease-out",
      }}
    >
      {/* CAPA DE GRANO DE PELÍCULA */}
      <div
        className="fixed top-0 left-0 z-[99] pointer-events-none opacity-[0.05]"
        style={{
          width: "100vw",
          height: "100vh",
          transition: "height 0.3s ease-out, width 0.3s ease-out",
        }}
      >
        <svg className="w-full h-full">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* TEXTURA DE MADERA DE FONDO */}
      <div
        className="fixed top-0 left-0 pointer-events-none opacity-20 mix-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346325/photo-1525947088131-b701cd0f6dc3_cyrw0t.avif')",
          width: "100vw",
          height: "100vh",
          transition: "height 0.3s ease-out, width 0.3s ease-out",
        }}
      />

      <Navbar />

      {/* HERO */}
      <section
        className="relative flex flex-col justify-center px-6 md:px-16 overflow-hidden"
        style={{
          height: "100vh",
          transition: "height 0.3s ease-out",
        }}
      >
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-[#8b5a2b] mb-4 block"
          >
            EXPERIMENTÁ EL SABOR
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] md:text-[14vw] font-black leading-[0.75] uppercase italic tracking-tighter"
          >
            CAFÉ <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[#8b5a2b] block md:inline"
            >
              & DECO.
            </motion.span>
          </motion.h1>

          {/* --- NUEVO TEXTO DESCRIPTIVO --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-5 text-sm md:text-lg font-medium leading-relaxed uppercase italic text-justify text-[#2a2a2a]/80 max-w-xs md:max-w-3xl border-l-2 border-[#8b5a2b] pl-6"
          >
            La culminación de nuestro ecosistema constructivo. En Café & Deco,
            el diseño de interiores se fusiona con
            el aroma del café de especialidad.
          </motion.p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          style={{
            y: useTransform(smoothProgress, [0, 0.2], [0, -100]),
            rotate: 15,
          }}
          src="https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346260/palmleaf_u9q7hk.png"
          className="absolute -right-20 bottom-0 w-[80vw] md:w-[40vw] blur-[1px]"
        />
      </section>

      {/* PRODUCTOS */}
      <section className="relative px-4 md:px-12 py-20 flex flex-col gap-40 md:gap-80">
        {PRODUCTOS.map((item, index) => (
          <SeccionProducto
            key={item.id}
            item={item}
            index={index}
            scrollProgress={smoothProgress}
          />
        ))}
      </section>

      {/* FOOTER */}
      <footer
        className="flex flex-col items-center justify-center text-center relative px-6"
        style={{
          height: "100vh",
          transition: "height 0.3s ease-out",
        }}
      >
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.8, 1], [0, 1]) }}
          className="flex flex-col items-center"
        >
          <h4 className="text-6xl md:text-9xl font-black italic uppercase mb-12 leading-none">
            Tomá <br /> una pausa
          </h4>
          <div className="w-px h-24 bg-[#8b5a2b] opacity-40" />
        </motion.div>
      </footer>
    </div>
  );
};

const SeccionProducto = ({ item, index, scrollProgress }) => {
  const isRight = item.side === "right";
  const xMove = useTransform(
    scrollProgress,
    [0, 1],
    isRight ? ["-20%", "10%"] : ["20%", "-10%"],
  );

  return (
    <div
      className={`relative flex flex-col ${isRight ? "md:items-end" : "md:items-start"} w-full`}
    >
      <motion.h2
        style={{ x: xMove }}
        className="absolute top-1/2 -translate-y-1/2 text-[35vw] md:text-[25vw] font-black opacity-[0.07] italic uppercase pointer-events-none whitespace-nowrap z-0"
      >
        {item.name}
      </motion.h2>

      <div
        className={`relative z-10 flex flex-col ${isRight ? "items-end text-right" : "items-start text-left"} max-w-2xl`}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-2"
        >
          <span className="text-[10px] font-black bg-[#8b5a2b] text-white px-2 py-1 uppercase">
            {item.id}
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
            {item.deco}
          </span>
        </motion.div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-[70vw] h-[70vw] md:w-[35vw] md:h-[35vw]"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)] transition-transform duration-700"
            />
          </motion.div>
        </div>

        <div className="mt-[-70px] md:mt-[-50px] relative z-20">
          <motion.h3
            initial={{ opacity: 0, x: isRight ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-2"
          >
            {item.name}
          </motion.h3>

          <div
            className={`flex flex-col ${isRight ? "items-end" : "items-start"}`}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-3xl md:text-6xl font-black italic tracking-tighter text-[#8b5a2b] block leading-none"
            >
              Simple {item.price}
            </motion.span>

            {item.priceDoble && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-2xl md:text-5xl italic tracking-tighter text-black opacity-60 block leading-none mt-2"
              >
                Doble {item.priceDoble}
              </motion.span>
            )}
          </div>
        </div>
      </div>

      {index % 2 === 0 && (
        <motion.img
          src="https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346380/Bush-PNG-Photo_fb4jmp.png"
          className="absolute -right-20 top-0 w-64 md:w-96 opacity-15 pointer-events-none rotate-[200deg] blur-[2px]"
          style={{ y: useTransform(scrollProgress, [0, 1], [150, -150]) }}
        />
      )}
    </div>
  );
};

export default CafeView;
