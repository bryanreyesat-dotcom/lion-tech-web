import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-lion-black">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TÍTULO GRANDE Y LIMPIO */}
        <div>
          <h2 className="font-playfair text-6xl md:text-8xl text-white leading-tight tracking-tighter">
            SOBRE <br />
            <span className="text-lion-cyan">NOSOTROS</span>
          </h2>
          <div className="w-20 h-1 bg-lion-cyan mt-6"></div>
        </div>

        {/* TEXTO DIRECTO */}
        <div className="font-montserrat space-y-8">
          <p className="text-xl md:text-2xl text-white font-medium leading-snug">
            En <span className="text-lion-cyan">LION TECH</span>, seleccionamos la mejor tecnología para quienes no quieren esperar al futuro.
          </p>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Nuestra meta es sencilla: traerte productos que realmente mejoren tu día a día, desde equipos de alto rendimiento hasta los accesorios más útiles.
            </p>

            <p>
              No vendemos solo aparatos; buscamos herramientas que te ayuden a trabajar, jugar y vivir mejor. Si es innovador y de calidad, lo tenemos para ti.
            </p>

            <p className="text-lion-cyan font-bold italic pt-4 border-t border-white/10">
              "Si buscas lo mejor en tecnología, estás en el lugar correcto."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;