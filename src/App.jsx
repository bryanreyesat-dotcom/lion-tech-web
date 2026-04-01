import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

// Tus otros imports...
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Catalog from './components/Catalog';
import Admin from './components/Admin';
import Login from './components/Login';
import ProductModal from './components/ProductModal'; // 1. Importa el modal

function App() {
  const [session, setSession] = useState(null);
  const [view, setView] = useState('hero');
  const [selectedProduct, setSelectedProduct] = useState(null); // 2. Estado para el producto seleccionado

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (_event === 'SIGNED_IN') setView('admin');
      if (_event === 'SIGNED_OUT') setView('hero');
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-lion-black text-white">
      <Navbar setView={setView} />

      <main>
        {view === 'admin' && (
          !session ? <Login setView={setView} /> : <Admin />
        )}

        {/* 3. Pasamos setSelectedProduct al catálogo */}
        {view === 'hero' && <Hero setView={setView} />}
        {view === 'catalog' && <Catalog setView={setView} onProductClick={setSelectedProduct} />}
        {view === 'about' && <About />}
        {view === 'contact' && <Contact />}
      </main>

      {/* 4. Renderizamos el modal si hay un producto seleccionado */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer setView={setView} />
    </div>
  );
}

export default App;