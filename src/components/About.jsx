import React from 'react';

const About = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 animate-in fade-in duration-700">
      <div className="max-w-3xl w-full border-l-2 border-lion-cyan pl-8 md:pl-16">
        <h2 className="font-playfair text-4xl md:text-6xl text-lion-cyan mb-8 tracking-tight">
          NOSOTROS
        </h2>
        <div className="font-montserrat text-gray-400 text-sm md:text-lg leading-relaxed space-y-6 tracking-wide">
          <p>
            En <span className="text-white font-bold">LION TECH</span>, no seguimos el ritmo del mercado; nosotros marcamos el paso. Somos una curaduría de tecnología diseñada para quienes ven el futuro como una oportunidad, no como una espera.
          </p>
          <p>
            Nuestra misión es simple: conectar a la nueva generación con herramientas disruptivas que potencien su estilo de vida, desde setups de alto rendimiento hasta accesorios de uso diario.
          </p>
          <p className="italic text-lion-cyan/80">
            "Si no existe en lo convencional, nosotros lo traemos para ti."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;