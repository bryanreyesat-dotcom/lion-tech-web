import React from 'react';

const Contact = () => {
  const WHATSAPP_NUMBER = "573159309346";
  const INSTAGRAM_USER = "liontech_accesorios";
  const TELEGRAM_USER = "573159309346";
  const FACEBOOK_PAGE = "LIONTECHSHOP";
  const EMAIL = "shopliontech621@gmail.com";

  const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Consulta Lion Tech&body=Hola Lion Tech, deseo obtener más información...`;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-lion-black relative overflow-hidden">

      {/* Efectos de luz de fondo para dar profundidad */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lion-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lion-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10">

        {/* TÍTULO CON ESTILO DE INTERFAZ */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="border-l-4 border-lion-cyan pl-8">
            <span className="text-lion-cyan text-[10px] font-black tracking-[0.5em] uppercase mb-2 block">Connect with us</span>
            <h2 className="font-playfair text-6xl md:text-8xl text-white leading-tight tracking-tighter">
              CANALES <br />
              <span className="text-lion-cyan drop-shadow-[0_0_20px_rgba(66,234,237,0.3)]">DIRECTOS</span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="font-montserrat text-gray-500 tracking-[0.3em] text-[10px] uppercase">
              Soporte Premium 24/7
            </p>
            <p className="text-white/20 text-[10px] font-mono mt-1 italic">
              System Status: Online_
            </p>
          </div>
        </div>

        {/* GRID DE CONTACTO ESTILIZADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Tarjeta WhatsApp */}
          <ContactCard
            num="01"
            title="WhatsApp"
            label="Atención Inmediata"
            link={`https://wa.me/${WHATSAPP_NUMBER}`}
          />

          {/* Tarjeta Instagram */}
          <ContactCard
            num="02"
            title="Instagram"
            label={`@${INSTAGRAM_USER}`}
            link={`https://instagram.com/${INSTAGRAM_USER}`}
          />

          {/* Tarjeta Facebook */}
          <ContactCard
            num="03"
            title="Facebook"
            label="LION TECH Shop"
            link={`https://facebook.com/${FACEBOOK_PAGE}`}
          />

          {/* Tarjeta Telegram */}
          <ContactCard
            num="04"
            title="Telegram"
            label="Comunidad VIP"
            link={`https://t.me/${TELEGRAM_USER}`}
          />

          {/* Tarjeta Email - Ocupa más espacio */}
          <a
            href={GMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-10 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 hover:border-lion-cyan/40 transition-all duration-500 rounded-2xl overflow-hidden md:col-span-2 lg:col-span-2 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-[10px] text-lion-cyan font-bold tracking-widest opacity-30 mb-8 block">05 / BUSINESS EMAIL</span>
            <div>
              <h3 className="font-montserrat text-white font-bold tracking-[0.2em] text-xs mb-2 uppercase group-hover:text-lion-cyan transition-colors">Corporativo</h3>
              <p className="font-playfair text-3xl text-white/80 leading-tight">Soporte y Negocios <br />de Alto Rendimiento</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

// Componente pequeño para las tarjetas repetitivas y mantener el código limpio
const ContactCard = ({ num, title, label, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-8 bg-[#0f0f0f] border border-white/5 hover:border-lion-cyan/40 transition-all duration-500 rounded-2xl relative overflow-hidden flex flex-col justify-end min-h-[220px]"
  >
    <div className="absolute top-6 right-6 text-[10px] text-white/20 font-mono tracking-tighter">{num}</div>
    <div className="relative z-10">
      <h3 className="font-montserrat text-lion-cyan font-black tracking-[0.3em] text-[9px] mb-3 uppercase opacity-70 group-hover:opacity-100 transition-opacity">
        {title}
      </h3>
      <p className="font-playfair text-2xl text-white group-hover:translate-x-3 transition-transform duration-500 ease-out">
        {label}
      </p>
    </div>
    {/* Efecto de brillo inferior al hacer hover */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-lion-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </a>
);

export default Contact;