import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lion-black border-t border-lion-petroleo/20 py-8 px-6">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        
        {/* MENSAJE CENTRAL ÚNICO */}
        <p className="font-montserrat text-[10px] md:text-xs text-gray-500 tracking-[0.3em] text-center leading-loose">
          <span className="text-lion-cyan font-bold">LION TECH</span> © 2026 | CALIDAD Y ESTILO SIN COMPROMISOS
        </p>

      </div>
    </footer>
  );
};

export default Footer;