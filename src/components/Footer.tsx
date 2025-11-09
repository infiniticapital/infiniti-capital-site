import React from 'react';
import { ArrowRight, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const PUBLIC_LOGO = '/assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <img src={PUBLIC_LOGO} alt="Infiniti Kapital logo" className="h-9 w-auto object-contain rounded-md ring-1 ring-slate-300 bg-white dark:bg-slate-800 dark:ring-slate-700" />
          <p className="text-sm text-slate-500 dark:text-slate-400 truncate">© {new Date().getFullYear()} Infiniti Kapital. Templates de ejemplo.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/" className="text-sm text-indigo-600 inline-flex items-center gap-2">Ver landing unificada <ArrowRight className="h-4 w-4" /></Link>
          <a aria-label="Abrir Telegram" href="https://t.me/+d8in2Q7kwXU1MjJh" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700">
            <Send className="h-4 w-4" />
          </a>
          <a aria-label="Abrir Instagram" href="https://www.instagram.com/infiniti_kapital?igsh=cjF2eGxvMjI2M21o" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}