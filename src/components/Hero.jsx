import ContactButton from "./ContactButton";
import SlidesCarrousel from "./SlidesCarrousel";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 py-12 lg:px-8 overflow-hidden"
    >
      {/* === FONDO === */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/70 via-black/80 to-[#020202]" />

      {/* Contenedor Principal */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full z-10 items-center">
        {/* === COLUMNA IZQUIERDA: Texto Principal === */}
        <div className="text-left animate-fade-in-up">
          <small className="inline-block font-mono text-brand-cyan text-xs sm:text-sm mb-6 tracking-wider bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            &lt; diseño - desarrollo - producción /&gt;
          </small>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white leading-tight mb-6">
            Construimos tu <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple animate-pulse">
              presencia digital 
            </span>
          </h1>

          <p className="text-gray-300 font-mono text-base sm:text-lg mb-10 leading-relaxed max-w-lg">
            Webs corporativas, landing pages, e-commerce y aplicaciones web. <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple animate-pulse">
              CONFIABILIDAD ASEGURADA PARA TU EMPRESA.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="bg-linear-to-r from-brand-cyan to-brand-purple text-black font-orbitron font-bold py-3 px-8 rounded-xl text-center hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all transform hover:scale-105"
            >
              Servicios
            </a>
            <ContactButton
              nombre="Contacto"
              className="bg-white/5 border border-white/20 text-white font-orbitron font-bold py-3 px-8 rounded-xl text-center hover:bg-white/10 hover:border-brand-purple hover:text-brand-purple transition-all backdrop-blur-md"
            />
          </div>
        </div>

        {/* === COLUMNA DERECHA: CAROUSEL HOLOGRÁFICO === */}
        <SlidesCarrousel />
      </div>
    </section>
  );
};

export default Hero;