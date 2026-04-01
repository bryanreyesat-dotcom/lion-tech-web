import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import logo from '../assets/logo.jpeg';

const Catalog = ({ setView, onProductClick }) => {
  const [productos, setProductos] = useState([]);
  const [imgExpandida, setImgExpandida] = useState(null); // Para el visor de imagen

  const WHATSAPP_NUMBER = "573159309346";

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase.from('productos').select('*');
      if (error) console.log('error', error);
      else setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 bg-lion-black relative">

      {/* --- VISOR DE IMAGEN (LIGHTBOX) --- */}
      {imgExpandida && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setImgExpandida(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl transition-colors">✕</button>
          <img
            src={imgExpandida}
            className="max-w-full max-h-[90vh] object-contain shadow-[0_0_50px_rgba(66,234,237,0.2)] animate-in zoom-in duration-500"
            alt="Producto ampliado"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* --- BOTÓN DE SALIR --- */}
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={() => setView('hero')}
            className="flex items-center gap-2 text-lion-cyan text-[10px] font-bold tracking-[0.2em] hover:opacity-70 transition-all border border-lion-cyan/30 px-4 py-2 rounded-full"
          >
            VOLVER AL INICIO
          </button>
          <h2 className="text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase hidden md:block">Exclusividad Lion Tech</h2>
        </div>

        {/* --- GRID DE PRODUCTOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productos.map((prod) => (
            <div key={prod.id} className="group relative bg-[#111] border border-gray-800 rounded-3xl p-6 transition-all duration-500 hover:border-lion-cyan flex flex-col h-full overflow-hidden">

              {/* 1. CONTENEDOR DE IMAGEN INTERACTIVO */}
              <div
                className="relative aspect-square w-full mb-6 rounded-2xl overflow-hidden bg-[#161616] border border-gray-800 flex items-center justify-center p-4 cursor-pointer group-hover:border-lion-cyan/30"
                onClick={() => setImgExpandida(prod.imagen)} // <-- AQUÍ SE ABRE LA IMAGEN
              >
                {/* Overlay de "Ampliar" que aparece en Hover */}
                <div className="absolute inset-0 bg-lion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold py-2 px-4 rounded-full tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform">
                    AMPLIAR VISTA 🔍
                  </span>
                </div>

                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 2. Info y Botones (Igual que antes) */}
              <div className="flex flex-col flex-grow relative z-10">
                <h3 className="text-white font-playfair text-xl mb-3 leading-tight group-hover:text-lion-cyan transition-colors">{prod.nombre}</h3>

                <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-800">
                  <div>
                    <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold">Inversión Elite</span>
                    <p className="text-white font-extrabold text-3xl tracking-tight mt-1">${Number(prod.precio).toLocaleString('es-CO')}</p>
                  </div>
                  <div className="w-12 h-12 border border-gray-800 rounded-xl flex items-center justify-center p-2 group-hover:border-lion-cyan group-hover:bg-lion-cyan/5 transition-all duration-500 overflow-hidden">
                    <img
                      src={logo}
                      alt="Lion Tech Logo"
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(66,234,237,0.8)] transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button onClick={() => onProductClick(prod)} className="bg-transparent text-white border border-gray-700 py-3 rounded-xl text-[8px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                    DETALLES +
                  </button>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Interesado en ${prod.nombre}`} className="bg-lion-cyan text-black py-3 rounded-xl text-[8px] font-black tracking-[0.2em] uppercase text-center hover:bg-white transition-all">
                    ADQUIRIR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;