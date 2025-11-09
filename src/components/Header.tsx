import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Moon, Sun, Instagram, Send } from 'lucide-react';

const PUBLIC_LOGO = '/assets/logo.jpg';

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('theme') as 'light' | 'dark') || 'light');
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, setTheme };
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <img src={PUBLIC_LOGO} alt="Infiniti Kapital logo" className="h-12 w-auto object-contain rounded-md ring-1 ring-slate-300 bg-white dark:bg-slate-800 dark:ring-slate-700" />
          <span className="font-semibold tracking-tight truncate">Infiniti Kapital</span>
        </div>
        <nav className="hidden sm:flex gap-2">
          {[
            { to: '/', label: 'Landing' },
            { to: '/bot', label: 'SaaS Bot MT5' },
            { to: '/journal', label: 'Journal (iOS/Android)' },
            { to: '/signals', label: 'Mercados & Señales' },
            { to: '/room', label: 'Sala de Trading' },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm border transition ${isActive ? 'bg-slate-900 text-white border-slate-900 dark:bg-slate-100 dark:text-slate-900' : 'bg-white border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700'}`
            }>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a aria-label="Abrir Telegram" href="https://t.me/+d8in2Q7kwXU1MjJh" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700">
            <Send className="h-4 w-4" />
          </a>
          <a aria-label="Abrir Instagram" href="https://www.instagram.com/infiniti_kapital?igsh=cjF2eGxvMjI2M21o" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow">
            Ver demo <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}