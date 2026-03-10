import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

// IMPORTANTE: Asegúrate de que estas líneas estén aquí abajo
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
    // Escuchar cambios en la sesión (Login/Logout)
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
  }, []);

  return (
    <div className="min-h-screen bg-lion-black">
      <Navbar setView={setView} />
      
      <main>
        {/* Si la vista es admin, chequeamos sesión */}
        {view === 'admin' ? (
          !session ? <Login setView={setView} /> : <Admin />
        ) : (
          <>
            {view === 'hero' && <Hero setView={setView} />}
            {view === 'catalog' && <Catalog setView={setView} />}
            {/* ... otras vistas */}
          </>
        )}
      </main>
<Footer setView={setView} />
    </div>
  );
}

export default App;