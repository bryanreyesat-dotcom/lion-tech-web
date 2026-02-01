import React from 'react';

const Hero = ({ setView }) => { // <--- Recibimos setView
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Fondo y Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-lion-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h2 className="font-playfair text-4xl md:text-7xl text-white mb-6 tracking-tighter">
          EL PODER DE LA <span className="text-lion-cyan">TECNOLOGÍA</span> <br /> EN TUS MANOS
        </h2>
        
        {/* BOTÓN CON ACCIÓN */}
        <button 
          onClick={() => setView('catalog')} // <--- Cambiamos la vista a 'catalog'
          className="bg-transparent border border-lion-cyan text-lion-cyan hover:bg-lion-cyan hover:text-black px-10 py-4 rounded-full font-bold transition-all duration-300 tracking-widest text-xs"
        >
          EXPLORAR CATÁLOGO
        </button>
      </div>
    </section>
  );
};

export default Hero;