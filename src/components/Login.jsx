import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Login = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para ver la clave

  const handleLogin = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    // 1. Autenticación con Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: password
    });

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    // --- MEJORA: Verificación de Seguridad (Whitelist) ---
    const { data: isAllowed, error: whitelistError } = await supabase
      .from('admin_whitelist')
      .select('email')
      .eq('email', cleanEmail)
      .maybeSingle(); // Usamos maybeSingle para evitar errores si no encuentra nada

    if (whitelistError || !isAllowed) {
      // Si no está en la lista blanca, cerramos la sesión inmediatamente
      await supabase.auth.signOut();
      alert("Acceso Denegado: Tu correo no está autorizado como administrador.");
      return;
    }
    // ----------------------------------------------------

    // Si todo sale bien, la sesión queda activa y App.jsx detectará el cambio
    alert("¡Bienvenido al panel de control!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lion-black px-4 relative">

      {/* --- BOTÓN PARA VOLVER AL SITIO --- */}
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
          {/* CAMPO EMAIL */}
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

          {/* CAMPO CONTRASEÑA CON "VER" */}
          <div>
            <label className="text-gray-400 text-[10px] font-bold ml-1 mb-1 block uppercase">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full p-4 bg-black border border-gray-800 rounded-xl text-white focus:border-lion-cyan outline-none transition-all"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-lion-cyan transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
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