import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';

const Navbar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  // FUNCIÓN CORREGIDA: Mapea el nombre del botón a la vista exacta de tu App.jsx
  const handleNavigation = (viewName) => {
    const routes = {
      'INICIO': 'hero',
      'CATÁLOGO': 'catalog',
      'NOSOTROS': 'about',
      'CONTACTO': 'contact',
      'ADMIN': 'admin'
    };

    setView(routes[viewName] || 'hero');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-lion-black/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">

        {/* 1. Lado Izquierdo: Logo */}
        <div className="flex-1 flex justify-start">
          <div
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleNavigation('INICIO')}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-lg border border-lion-cyan/50 shadow-[0_0_15px_rgba(66,234,237,0.1)]"
            />
          </div>
        </div>

        {/* 2. Centro: Título */}
        <div className="flex-[2] flex justify-center">
          <h1 className="font-playfair text-xl md:text-2xl lg:text-3xl text-lion-cyan tracking-[0.2em] font-bold uppercase whitespace-nowrap drop-shadow-[0_0_10px_rgba(66,234,237,0.2)]">
            LION TECH
          </h1>
        </div>

        {/* 3. Lado Derecho: Menú Escritorio */}
        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex gap-6 items-center">
            {['INICIO', 'CATÁLOGO', 'NOSOTROS', 'CONTACTO'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="font-montserrat text-[10px] font-black text-white/70 hover:text-lion-cyan transition-all tracking-[0.2em] uppercase"
              >
                {item}
              </button>
            ))}
            <button onClick={() => handleNavigation('ADMIN')} className="opacity-0 w-2">.</button>
          </div>

          {/* Botón Móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-lion-cyan">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-lion-black border-b border-white/10 py-10 flex flex-col items-center gap-8 animate-in slide-in-from-top-5 duration-300">
          {['INICIO', 'CATÁLOGO', 'NOSOTROS', 'CONTACTO'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="text-white font-bold tracking-widest uppercase hover:text-lion-cyan transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;