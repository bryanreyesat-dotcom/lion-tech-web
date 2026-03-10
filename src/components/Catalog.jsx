import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// 1. Agregamos { setView } para poder salir
const Catalog = ({ setView }) => {
  const [productos, setProductos] = useState([]);

  const WHATSAPP_NUMBER = "573001660702"; 

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase.from('productos').select('*');
      if (error) console.log('error', error);
      else setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 bg-lion-black">
      <div className="max-w-7xl mx-auto">
        
        {/* --- NUEVO BOTÓN DE SALIR --- */}
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={() => setView('hero')} 
            className="flex items-center gap-2 text-lion-cyan text-[10px] font-bold tracking-[0.2em] hover:opacity-70 transition-all border border-lion-cyan/30 px-4 py-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            VOLVER AL INICIO
          </button>
          
          <h2 className="text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase hidden md:block">
            Exclusividad Lion Tech
          </h2>
        </div>

        {/* --- GRID DE PRODUCTOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((prod) => (
            <div key={prod.id} className="bg-lion-dark border border-lion-petroleo/30 rounded-2xl overflow-hidden hover:border-lion-cyan transition-all flex flex-col h-full shadow-2xl">
              <img src={prod.imagen} alt={prod.nombre} className="h-64 w-full object-cover" />
              <div className="p-6 text-center flex flex-col flex-grow">
                <span className="text-[10px] text-lion-cyan font-bold tracking-widest uppercase mb-1">
                  {prod.status}
                </span>
                <h3 className="text-white font-playfair text-xl mt-2 flex-grow">
                  {prod.nombre}
                </h3>
                
                <p className="text-white font-bold text-2xl my-4">
                  ${Number(prod.precio).toLocaleString('es-CO')}
                </p>

                <div className="flex gap-2">
                   <button className="flex-1 border border-gray-700 text-white py-2 rounded-lg text-[10px] font-bold hover:bg-gray-800 transition-colors">
                     MÁS INFO
                   </button>
                   
                   <a 
                     href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Estoy%20interesado%20en%20el%20${encodeURIComponent(prod.nombre)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 bg-lion-cyan text-black py-2 rounded-lg text-[10px] font-bold text-center hover:bg-opacity-80 transition-all shadow-[0_0_10px_rgba(66,234,237,0.3)]"
                   >
                     LO QUIERO
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