import React from 'react';
import { Link } from 'react-router-dom';
import IKWatermark from '../components/IKWatermark';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
        <IKWatermark className="right-6 -bottom-6 w-36 sm:w-52" />
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Página no encontrada.</p>
          <div className="mt-6">
            <Link to="/" className="inline-block px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white">Volver al inicio</Link>
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Si crees que es un error, contáctanos.</p>
        </div>
      </div>
    </section>
  );
}