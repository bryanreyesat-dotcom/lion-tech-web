import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';

/**
 * COMPONENTE: Navbar
 * PROP: setView -> Función que viene de App.jsx para cambiar la sección visible.
 */
const Navbar = ({ setView }) => {
  // ESTADO: Controla si el menú desplegable en móviles está abierto (true) o cerrado (false)
  const [isOpen, setIsOpen] = useState(false);

  // FUNCIÓN AUXILIAR: Cambia la vista y cierra el menú móvil al mismo tiempo
  const handleNavigation = (viewName) => {
    setView(viewName);
    setIsOpen(false); // Cerramos el menú para que el usuario vea la nueva sección
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-lion-black/95 backdrop-blur-md border-b border-lion-petroleo/30 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* --- SECCIÓN 1: LOGO (IZQUIERDA) --- 
            Al hacer clic, siempre regresa al Hero (Inicio).
        */}
        <div 
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleNavigation('hero')}
        >
          <img 
            src={logo} 
            alt="Lion Tech Logo" 
            className="h-10 w-10 md:h-12 md:w-12 rounded-lg border border-lion-cyan shadow-[0_0_15px_rgba(66,234,237,0.2)]"
          />
        </div>

        {/* --- SECCIÓN 2: TÍTULO CENTRAL --- 
            Posicionado absolutamente para que siempre esté en el centro exacto,
            independientemente de cuántos links haya a los lados.
        */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <h1 className="font-playfair text-xl md:text-3xl text-lion-cyan tracking-[0.25em] font-bold">
            LION TECH
          </h1>
        </div>

        {/* --- SECCIÓN 3: NAVEGACIÓN (DERECHA) --- */}
        <div className="flex items-center">
          
          {/* LINKS ESCRITORIO: Se ocultan en pantallas menores a 768px (md) */}
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => handleNavigation('about')}
              className="font-montserrat text-[10px] font-bold text-white hover:text-lion-cyan transition-all tracking-[0.2em]"
            >
              NOSOTROS
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="font-montserrat text-[10px] font-bold text-white hover:text-lion-cyan transition-all tracking-[0.2em]"
            >
              CONTACTO
            </button>
          </div>

          {/* BOTÓN HAMBURGUESA: Solo visible en móviles */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-lion-cyan p-2 focus:outline-none"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- SECCIÓN 4: MENÚ DESPLEGABLE MÓVIL --- 
          Lógica: Si isOpen es true, se muestra con flex. Si es false, se oculta.
      */}
      <div className={`
        ${isOpen ? 'flex' : 'hidden'} 
        md:hidden 
        flex-col items-center 
        bg-lion-black/fe absolute top-full left-0 w-full 
        py-12 gap-8 border-b border-lion-petroleo/50 
        animate-in fade-in slide-in-from-top-2
      `}>
        <button 
          onClick={() => handleNavigation('about')}
          className="font-montserrat text-lg font-bold text-white hover:text-lion-cyan tracking-widest"
        >
          NOSOTROS
        </button>
        <button 
          onClick={() => handleNavigation('contact')}
          className="font-montserrat text-lg font-bold text-white hover:text-lion-cyan tracking-widest"
        >
          CONTACTO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;