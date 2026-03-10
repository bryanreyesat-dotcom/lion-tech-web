import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

// 1. Recibimos setView como prop
const Login = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert("Datos incorrectos. Verifica tu correo y contraseña.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lion-black px-4 relative">
      
      {/* --- BOTÓN PARA SALIR DEL LOGIN --- */}
      <button 
        onClick={() => setView('hero')} 
        className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-lion-cyan text-[10px] font-bold tracking-[0.2em] hover:opacity-70 transition-all border border-lion-cyan/20 px-4 py-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        SALIR AL SITIO
      </button>

      <form 
        onSubmit={handleLogin} 
        className="bg-lion-dark p-8 rounded-3xl border border-lion-cyan/10 w-full max-w-md shadow-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl text-white font-playfair font-bold tracking-widest uppercase">
            Acceso Admin
          </h2>
          <p className="text-gray-500 text-[10px] mt-2 tracking-[0.2em]">LION TECH EXCLUSIVE</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-gray-400 text-[10px] font-bold ml-1 mb-1 block uppercase">Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="admin@liontech.com" 
              className="w-full p-4 bg-black border border-gray-800 rounded-xl text-white focus:border-lion-cyan outline-none transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-gray-400 text-[10px] font-bold ml-1 mb-1 block uppercase">Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-4 bg-black border border-gray-800 rounded-xl text-white focus:border-lion-cyan outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button 
          className="w-full bg-lion-cyan text-black font-bold py-4 rounded-xl mt-8 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(66,234,237,0.2)]"
        >
          INICIAR SESIÓN
        </button>
      </form>
      
      <p className="mt-8 text-gray-600 text-[9px] tracking-[0.3em] uppercase">
        Protected by Lion Tech Security
      </p>
    </div>
  );
};

export default Login;