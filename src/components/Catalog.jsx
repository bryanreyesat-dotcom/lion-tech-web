import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Catalog = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase.from('productos').select('*');
      if (error) console.log('error', error);
      else setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <section className="min-h-screen pt-24 px-6 bg-lion-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((prod) => (
          <div key={prod.id} className="bg-lion-dark border border-lion-petroleo/30 rounded-2xl overflow-hidden hover:border-lion-cyan transition-all">
            <img src={prod.imagen} alt={prod.nombre} className="h-64 w-full object-cover" />
            <div className="p-6 text-center">
              <span className="text-[10px] text-lion-cyan font-bold tracking-widest">{prod.status}</span>
              <h3 className="text-white font-playfair text-xl mt-2">{prod.nombre}</h3>
              <p className="text-white font-bold text-2xl my-4">${prod.precio}</p>
              <div className="flex gap-2">
                 <button className="flex-1 border border-gray-700 text-white py-2 rounded-lg text-xs font-bold">MÁS INFO</button>
                 <button className="flex-1 bg-lion-cyan text-black py-2 rounded-lg text-xs font-bold">LO QUIERO</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;