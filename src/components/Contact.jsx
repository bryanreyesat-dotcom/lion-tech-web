import React from 'react';

const Contact = () => {
  const WHATSAPP_NUMBER = "573159309346";
  const INSTAGRAM_USER = "liontech_accesorios";
  const TELEGRAM_USER = "573159309346";
  const FACEBOOK_PAGE = "LIONTECHShop";
  const EMAIL = "shopliontech621@gmail.com";

  // URL para abrir Gmail Web directamente en redactar para tu correo
  const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Consulta Lion Tech&body=Hola Lion Tech, deseo obtener más información...`;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-lion-black">
      <div className="max-w-6xl w-full">

        {/* TÍTULO IMPACTANTE */}
        <div className="mb-16 border-l-2 border-lion-cyan pl-8">
          <h2 className="font-playfair text-5xl md:text-7xl text-white leading-tight tracking-tighter">
            CANALES <br />
            <span className="text-lion-cyan">DIRECTOS</span>
          </h2>
          <p className="font-montserrat text-gray-500 mt-4 tracking-[0.3em] text-[10px] md:text-xs uppercase">
            Pedidos exclusivos • Soporte premium • Lion Tech
          </p>
        </div>

        {/* GRID DE CONTACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-lion-dark/30 border border-white/5 hover:border-lion-cyan/50 transition-all duration-500 rounded-sm relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 text-[10px] text-lion-cyan/30 font-bold tracking-widest">01</span>
            <h3 className="font-montserrat text-lion-cyan font-bold tracking-[0.2em] text-xs mb-2 uppercase">WhatsApp</h3>
            <p className="font-playfair text-2xl text-white group-hover:translate-x-2 transition-transform duration-500">Atención Inmediata</p>
          </a>

          {/* Instagram */}
          <a
            href={`https://instagram.com/${INSTAGRAM_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-lion-dark/30 border border-white/5 hover:border-lion-cyan/50 transition-all duration-500 rounded-sm relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 text-[10px] text-lion-cyan/30 font-bold tracking-widest">02</span>
            <h3 className="font-montserrat text-lion-cyan font-bold tracking-[0.2em] text-xs mb-2 uppercase">Instagram</h3>
            <p className="font-playfair text-2xl text-white group-hover:translate-x-2 transition-transform duration-500">@{INSTAGRAM_USER}</p>
          </a>

          {/* Facebook */}
          <a
            href={`https://facebook.com/${FACEBOOK_PAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-lion-dark/30 border border-white/5 hover:border-lion-cyan/50 transition-all duration-500 rounded-sm relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 text-[10px] text-lion-cyan/30 font-bold tracking-widest">03</span>
            <h3 className="font-montserrat text-lion-cyan font-bold tracking-[0.2em] text-xs mb-2 uppercase">Facebook</h3>
            <p className="font-playfair text-2xl text-white group-hover:translate-x-2 transition-transform duration-500">LION TECH Shop</p>
          </a>

          {/* Telegram */}
          <a
            href={`https://t.me/${TELEGRAM_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-lion-dark/30 border border-white/5 hover:border-lion-cyan/50 transition-all duration-500 rounded-sm relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 text-[10px] text-lion-cyan/30 font-bold tracking-widest">04</span>
            <h3 className="font-montserrat text-lion-cyan font-bold tracking-[0.2em] text-xs mb-2 uppercase">Telegram</h3>
            <p className="font-playfair text-2xl text-white group-hover:translate-x-2 transition-transform duration-500">Comunidad VIP</p>
          </a>

          {/* Email - MEJORADO PARA ABRIR PESTAÑA NUEVA EN GMAIL */}
          <a
            href={GMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-lion-dark/30 border border-white/5 hover:border-lion-cyan/50 transition-all duration-500 rounded-sm relative overflow-hidden md:col-span-2 lg:col-span-2"
          >
            <span className="absolute top-4 right-6 text-[10px] text-lion-cyan/30 font-bold tracking-widest">05</span>
            <h3 className="font-montserrat text-lion-cyan font-bold tracking-[0.2em] text-xs mb-2 uppercase">Email</h3>
            <p className="font-playfair text-2xl text-white group-hover:translate-x-2 transition-transform duration-500">Soporte y Negocios Corporativos</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;