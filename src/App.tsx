
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Bot from './pages/Bot';
import Journal from './pages/Journal';
import Signals from './pages/Signals';
import Room from './pages/Room';
import NotFound from './pages/NotFound'

export default function App() {
  useEffect(() => {
    // sanity check for assets present (optional)
    // console.assert(true, '[App] mounted');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/room" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
