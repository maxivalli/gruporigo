import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";

const PRODUCTOS = [
  {
    id: "01",
    name: "Expresso",
    price: "$3.200",
    img: "https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346261/expresso_fqzscn.png",
    side: "left",
    deco: "Tip de diseño: El mármol y los tonos oscuros realzan la intensidad del café.",
  },
  {
    id: "02",
    name: "Largo",
    price: "$5.800",
    img: "https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346265/largo_i5rbga.png",
    side: "right",
    deco: "Tip de diseño: Las vetas de madera natural crean un entorno de lectura cálido.",
  },
  {
    id: "03",
    name: " Café con leche",
    price: "$2.100",
    img: "https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346262/latte_an4f0a.png",
    side: "left",
    deco: "Tip de diseño: Cerámicas artesanales aportan textura y alma a tu mesa.",
  },
  {
    id: "04",
    name: "Té con limón",
    price: "$3.500",
    img: "https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346263/tea_nefvot.png",
    side: "right",
    deco: "Tip de diseño: Luz natural y textiles de lino para un rincón de calma absoluta.",
  },
  {
    id: "05",
    name: "Jugo exprimido",
    price: "$3.500",
    img: "https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346262/juice_inypmr.png",
    side: "left",
    deco: "Tip de diseño: Plantas de hoja ancha refrescan visualmente espacios neutros.",
  },
  {
    id: "06",
    name: "Medialuna",
    price: "$1.000",
    img: "https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346263/luna_tv8ya5.png",
    side: "right",
    deco: "Tip de diseño: El dorado de la masa destaca sobre platos de piedra volcánica.",
  },
];

const CafeView = () => {
  const { scrollYProgress } = useScroll();
  // Suavizamos el scroll para los efectos de movimiento
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-[#f4ece1] min-h-screen text-[#2a2a2a] overflow-x-hidden selection:bg-[#8b5a2b] selection:text-white">
      {/* CAPA DE GRANO DE PELÍCULA */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.05]">
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
        className="fixed inset-0 pointer-events-none opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dy1ll1azp/image/upload/f_auto,q_auto/v1770346325/photo-1525947088131-b701cd0f6dc3_cyrw0t.avif')",
        }}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-[#8b5a2b] mb-4 block"
          >
            Nuestra carta
          </motion.span>

          {/* TITULO ANIMADO */}
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
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#8b5a2b] block md:inline"
            >
              & DECO.
            </motion.span>
          </motion.h1>
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
      <footer className="h-screen flex flex-col items-center justify-center text-center relative px-6">
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

  // Efecto Parallax para el texto de fondo (se mueve horizontalmente al scrollear)
  const xMove = useTransform(
    scrollProgress,
    [0, 1],
    isRight ? ["-20%", "10%"] : ["20%", "-10%"],
  );

  return (
    <div
      className={`relative flex flex-col ${isRight ? "md:items-end" : "md:items-start"} w-full`}
    >
      {/* TIPOGRAFÍA DE FONDO CON PARALLAX */}
      <motion.h2
        style={{ x: xMove }}
        className="absolute top-1/2 -translate-y-1/2 text-[35vw] md:text-[25vw] font-black opacity-[0.07] italic uppercase pointer-events-none whitespace-nowrap z-0"
      >
        {item.name}
      </motion.h2>

      <div
        className={`relative z-10 flex flex-col ${isRight ? "items-end text-right" : "items-start text-left"} max-w-2xl`}
      >
        {/* ETIQUETA DECO */}
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

        {/* CONTENEDOR DE IMAGEN CON REVEAL */}
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

        {/* NOMBRE Y PRECIO */}
        <div className="mt-[-70px] md:mt-[-50px] relative z-20">
          <motion.h3
            initial={{ opacity: 0, x: isRight ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-2"
          >
            {item.name}
          </motion.h3>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-[-10px] text-3xl md:text-6xl font-black italic tracking-tighter text-[#8b5a2b] block leading-none"
          >
            {item.price}
          </motion.span>
        </div>
      </div>

      {/* DECO: ARBUSTOS CON PARALLAX INVERSO */}
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