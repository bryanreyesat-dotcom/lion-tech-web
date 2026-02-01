import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 animate-in fade-in duration-700">
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-playfair text-4xl md:text-6xl text-white mb-4 tracking-tighter">
          ¿LISTO PARA EL <span className="text-lion-cyan">SIGUIENTE NIVEL?</span>
        </h2>
        <p className="font-montserrat text-gray-500 mb-12 tracking-[0.2em] text-xs md:text-sm">
          PEDIDOS EXCLUSIVOS Y SOPORTE DIRECTO
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta WhatsApp */}
          <a href="#" className="group p-8 border border-lion-petroleo/30 rounded-2xl hover:border-lion-cyan transition-all duration-500 bg-lion-dark/50">
            <h3 className="text-lion-cyan font-bold mb-2 tracking-widest text-xs">WHATSAPP</h3>
            <p className="text-gray-400 text-sm group-hover:text-white transition-colors">Atención Inmediata</p>
          </a>

          {/* Tarjeta Instagram */}
          <a href="#" className="group p-8 border border-lion-petroleo/30 rounded-2xl hover:border-lion-cyan transition-all duration-500 bg-lion-dark/50">
            <h3 className="text-lion-cyan font-bold mb-2 tracking-widest text-xs">INSTAGRAM</h3>
            <p className="text-gray-400 text-sm group-hover:text-white transition-colors">@LionTech.Store</p>
          </a>

          {/* Tarjeta Email */}
          <a href="mailto:contacto@liontech.com" className="group p-8 border border-lion-petroleo/30 rounded-2xl hover:border-lion-cyan transition-all duration-500 bg-lion-dark/50">
            <h3 className="text-lion-cyan font-bold mb-2 tracking-widest text-xs">EMAIL</h3>
            <p className="text-gray-400 text-sm group-hover:text-white transition-colors">Soporte y Negocios</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;