import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Catalog from './components/Catalog';

function App() {
  // Estado para controlar qué sección vemos: 'hero', 'about' o 'contact'
  const [view, setView] = useState('hero');

  return (
    <div className="min-h-screen bg-lion-black flex flex-col transition-all duration-500">
      {/* Pasamos setView al Navbar para que los botones cambien el estado */}
      <Navbar setView={setView} />
      
      <main className="flex-grow flex flex-col">
        {view === 'hero' && <Hero setView={setView} />}
        {view === 'about' && <About />}
        {view === 'contact' && <Contact />}
        {view === 'catalog' && <Catalog />}
      </main>

      <Footer />
    </div>
  );
}

export default App;