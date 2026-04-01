import React from 'react';
import logo from '../assets/logo.jpeg'; // Asegúrate de que la ruta sea correcta

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-lion-black overflow-hidden">

      {/* DECORACIÓN DE FONDO: Logo gigante difuminado */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none">
        <img src={logo} alt="" className="w-[600px] grayscale" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* PARTE IZQUIERDA: Identidad */}
        <div className="sticky top-32">
          <span className="text-lion-cyan text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            Establecidos en 2026
          </span>
          <h2 className="font-playfair text-7xl md:text-9xl text-white leading-[0.8] tracking-tighter">
            LION <br />
            <span className="text-lion-cyan drop-shadow-[0_0_30px_rgba(66,234,237,0.3)]">TECH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lion-cyan to-transparent mt-8"></div>

          {/* Pequeño Badge de confianza */}
          <div className="mt-12 flex items-center gap-4 border border-white/10 w-fit px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-white text-[10px] font-bold tracking-widest uppercase">Tecnología Verificada</p>
          </div>
        </div>

        {/* PARTE DERECHA: Contenido y Valores */}
        <div className="font-montserrat space-y-12">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-white font-light leading-tight">
              Seleccionamos la <span className="text-lion-cyan font-medium">mejor tecnología</span> para quienes no quieren esperar al futuro.
            </p>

            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                En <strong className="text-white">Lionchshop</strong>, nuestra meta es sencilla: traerte productos que realmente mejoren tu día a día, desde equipos de alto rendimiento hasta los accesorios más sofisticados.
              </p>

              <p>
                No vendemos solo aparatos; buscamos herramientas que te ayuden a trabajar, jugar y vivir mejor. Si es innovador y de calidad, lo tenemos para ti.
              </p>
            </div>
          </div>

          {/* GRID DE VALORES (Creativo y Moderno) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            <div className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-lion-cyan/50 transition-all group">
              <span className="text-lion-cyan text-xl mb-4 block group-hover:scale-110 transition-transform">🚀</span>
              <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Innovación</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Solo lo último en el mercado global.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-lion-cyan/50 transition-all group">
              <span className="text-lion-cyan text-xl mb-4 block group-hover:scale-110 transition-transform">💎</span>
              <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Calidad</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Productos probados y garantizados.</p>
            </div>
          </div>

          <p className="text-lion-cyan font-bold italic pt-8 border-t border-white/10 text-xl tracking-tight">
            "Si buscas lo mejor en tecnología, estás en el lugar correcto."
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;