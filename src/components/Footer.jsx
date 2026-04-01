import React from 'react';

const Footer = ({ setView }) => {
  return (
    <footer className="bg-black border-t border-lion-petroleo/20 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">

        {/* IZQUIERDA: Nombre y Copyright en una línea */}
        <div className="flex items-center gap-4">
          <h2 className="font-playfair text-lg md:text-xl text-lion-cyan font-bold tracking-widest leading-none">
            LION TECH
          </h2>
          <span className="hidden sm:block text-gray-600 text-[10px] font-montserrat tracking-widest border-l border-gray-800 pl-4">
            © 2026 - EXCLUSIVE TECHNOLOGY
          </span>
        </div>

        {/* DERECHA: Botón Admin */}
        <button
          onClick={() => setView('admin')}
          className="text-gray-700 hover:text-lion-cyan text-[10px] font-bold tracking-widest transition-colors uppercase whitespace-nowrap"
        >
          Acceso Administrativo
        </button>

      </div>
    </footer>
  );
};

export default Footer;