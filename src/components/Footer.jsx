import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-12 md:px-20 md:py-32 rounded-t-[3rem] md:rounded-t-[10rem] z-20 relative">
      {/* Contenedor Principal */}
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between md:min-h-[70vh]">
        
        {/* BLOQUE SUPERIOR: Título de impacto */}
        <div className="w-full mb-12 md:mb-0">
          <h2 className="text-[15vw] md:text-[15vw] font-black leading-[0.75] tracking-tighter uppercase italic">
            Hablemos<span className="text-gray-300">.</span>
          </h2>
        </div>

        {/* BLOQUE MEDIO: Manifiesto y CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mt-8 md:mt-16">
          
          {/* Texto Manifiesto: Con más aire y margen superior en escritorio */}
          <div className="w-full md:w-1/2 md:mt-16">
            <p className="text-xl md:text-3xl font-medium leading-[1.1] max-w-[400px] md:max-w-[600px] uppercase tracking-tight text-justify">
              Construimos proyectos que definen una era.
            </p>
            <p className="mt-6 md:mt-10 text-sm md:text-lg opacity-60 max-w-[400px] md:max-w-[600px] leading-relaxed text-justify">
              Unite a la experiencia de Grupo Rigo y transformemos tu visión en una estructura sólida.
            </p>
          </div>

          {/* Call to Action: WhatsApp */}
          <div className="w-full md:w-auto flex flex-col items-start md:items-end md:self-end mt-4 md:mt-0">
            <a
              href="#"
              className="group relative inline-flex items-center gap-4 text-3xl md:text-5xl font-black italic uppercase tracking-tighter hover:text-gray-500 transition-colors"
            >
              <span>WhatsApp</span>
              <svg
                className="w-8 h-8 md:w-14 md:h-14 transform group-hover:rotate-45 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 mt-2 md:mt-4">
              Disponible ahora
            </span>
          </div>
        </div>

        {/* BLOQUE INFERIOR: Metadata / Créditos */}
        <div className="mt-16 md:mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-1">
              <span className="opacity-50 text-[8px]">Localización</span>
              <span>Santa Fe, Argentina</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-50 text-[8px]">Social</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-black transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="md:text-right pb-4 md:pb-0">
            <p>© 2026 GRUPO RIGO — TODOS LOS DERECHOS</p>
            <p className="mt-1 opacity-50 italic lowercase">Focus Future.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;