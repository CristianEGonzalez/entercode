import { useState } from 'react';
import ProjectCard from "./ProjectCard";

// Imágenes Temporales (Placeholders para que compile sin errores)
const poolclean = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=500";
const oldspringfield = "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=500";
//const medintegral = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500";
const laGrafiK = "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f?auto=format&fit=crop&q=80&w=500";
const amaneceres = "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=500";
const entergame = "https://images.unsplash.com/photo-1665041982909-8a86864a1e49?auto=format&fit=crop&q=80&w=500";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Estados para capturar el Swipe (Gesto táctil)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const proyectos = [
    {
      id: 1,
      titulo: "Tienda Digital - EnterGame",
      descripcion: "Lading Page con catálogo interactivo y consultas detalladas automatizadas.",
      imagen: entergame,
      link: "https://entergame.com.ar/",
      tags: ["Catálogo + filtro","Whatsapp Integratción"]
    },
    {
      id: 2,
      titulo: "Sitio Web - La Grafi-k",
      descripcion: "Lading Page con catálogo interactivo y consultas detalladas automatizadas.",
      imagen: laGrafiK,
      link: "https://lagrafik.com",
      tags: ["Catálogo","Consultas Personalizadas"]
    },
    {
      id: 3,
      titulo: "Menú Digital - OldSpringfield",
      descripcion: "Catálogo interactivo para una hamburguesería moderna.",
      imagen: oldspringfield,
      link: "https://menu-digital-template.netlify.app/",
      tags: ["Menú", "Whatsapp Integración"]
    },
    {
      id: 4,
      titulo: "Landing Page - AmaneceresDeptos",
      descripcion: "Lading Page con exposición de propiedades.",
      imagen: amaneceres,
      link: "https://amaneceresdeptos.com.ar/",
      tags: ["Catálogo","Consultas Automatizadas"]
    },

    {
      id: 5,
      titulo: "Landing Page - PoolClean",
      descripcion: "Landing Page simple para servicios de mantenimiento de piscinas.",
      imagen: poolclean,
      link: "https://poolclean.com.ar/",
      tags: ["Servicios", "Whatsapp Form"]
    },
  ];

  // --- LÓGICA DE NAVEGACIÓN ---
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % proyectos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  // --- LÓGICA DE SWIPE (TACTIL) ---
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Función para obtener el índice visible (circular)
  const getVisibleIndex = (offset) => {
    return (activeIndex + offset + proyectos.length) % proyectos.length;
  };

  return (
    <section id="proyectos" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-orbitron">
          <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
            Proyectos Destacados
          </span>
          <span className="text-brand-cyan animate-pulse">_</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
          // Casos de éxito y soluciones implementadas por EnterCode
        </p>
      </div>

      {/* === CARRUSEL UNIFICADO (MÓVIL + DESKTOP) === */}
      <div 
        className="relative flex items-center justify-center h-[500px] w-full max-w-6xl mx-auto"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* Flecha Izquierda */}
        <button 
          onClick={prevSlide}
          className="hidden md:block absolute left-0 z-30 p-3 rounded-full bg-black/50 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan hover:text-black transition-all backdrop-blur-md"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        {/* Contenedor de Tarjetas */}
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          {proyectos.map((pro, index) => {
            // Lógica de posición
            let position = "hidden"; 
            if (index === activeIndex) position = "active";
            else if (index === getVisibleIndex(-1)) position = "left";
            else if (index === getVisibleIndex(1)) position = "right";

            // Estilos dinámicos
            const styles = {
              active: "z-20 scale-100 opacity-100 translate-x-0 blur-none",
              left: "z-10 scale-90 opacity-40 -translate-x-[55%] md:-translate-x-[60%] blur-[2px] pointer-events-none",
              right: "z-10 scale-90 opacity-40 translate-x-[55%] md:translate-x-[60%] blur-[2px] pointer-events-none",
              hidden: "z-0 scale-75 opacity-0 hidden"
            };

            return (
              <div 
                key={pro.id}
                className={`absolute transition-all duration-500 ease-out w-[85vw] md:w-[380px] h-[500px] ${styles[position]}`}
              >
                <div className="w-full h-full py-4">
                  <ProjectCard pro={pro} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Flecha Derecha */}
        <button 
          onClick={nextSlide}
          className="hidden md:block absolute right-0 z-30 p-3 rounded-full bg-black/50 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan hover:text-black transition-all backdrop-blur-md"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>

      </div>

      {/* Indicadores (Dots) */}
      <div className="flex justify-center gap-3 mt-4 md:mt-8">
        {proyectos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "w-8 bg-brand-cyan" : "w-2 bg-gray-700 hover:bg-gray-500"
            }`}
            aria-label={`Ir al proyecto ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;