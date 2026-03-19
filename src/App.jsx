import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Catalog from './components/Catalog';
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  const [session, setSession] = useState(null);
  const [view, setView] = useState('hero');

  useEffect(() => {
    // 1. Obtener sesión inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. Escuchar cambios de sesión
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      
      // MEJORA: Si acaba de iniciar sesión con éxito, mándalo al Admin automáticamente
      if (_event === 'SIGNED_IN') {
        setView('admin');
      }
      
      // Si cierra sesión, mándalo al Hero
      if (_event === 'SIGNED_OUT') {
        setView('hero');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-lion-black">
      {/* Navbar con control de vista */}
      <Navbar setView={setView} />
      
      <main>
        {/* Lógica de Administración */}
        {view === 'admin' && (
          !session ? <Login setView={setView} /> : <Admin />
        )}

        {/* Vistas Públicas */}
        {view === 'hero' && <Hero setView={setView} />}
        {view === 'catalog' && <Catalog setView={setView} />}
        {view === 'about' && <About />}
        {view === 'contact' && <Contact />}
      </main>

      {/* Footer con control de vista */}
      <Footer setView={setView} />
    </div>
  );
}

export default App;