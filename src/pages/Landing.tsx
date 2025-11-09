import React from 'react';
import { LineChart, Smartphone, PieChart, Star, Instagram, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IKWatermark from '../components/IKWatermark';
import { Helmet } from 'react-helmet-async'

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Infiniti Kapital · Suite para traders</title>
        <meta name="description" content="Bot MT5 SMC, Journal avanzado y Señales de mercado. Optimiza tu operativa con herramientas profesionales." />
        <link rel="canonical" href="https://infinitikapital.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Infiniti Kapital · Suite para traders" />
        <meta property="og:description" content="Bot MT5 SMC, Journal avanzado y Señales de mercado. Optimiza tu operativa con herramientas profesionales." />
        <meta property="og:url" content="https://infinitikapital.com/" />
        <meta property="og:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Infiniti Kapital · Suite para traders" />
        <meta name="twitter:description" content="Bot MT5 SMC, Journal avanzado y Señales de mercado. Optimiza tu operativa con herramientas profesionales." />
        <meta name="twitter:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
      </Helmet>
      <section>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-cyan-600 to-sky-500 p-[1px] shadow-xl">
          <div className="relative rounded-3xl bg-white">
            <IKWatermark className="right-6 -bottom-6 w-40 sm:w-56" />
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 sm:p-12">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  Suite IK
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Optimiza tu <span className="text-indigo-600">trading</span>
                </h1>
                <p className="mt-4 text-slate-600 text-lg">
                  Bot MT5 SMC, Journal y Señales. Herramientas profesionales para operar con disciplina.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => navigate('/bot')} className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow">Ver Bot</button>
                  <button onClick={() => navigate('/journal')} className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-white">Ver Journal</button>
                  <a href="https://journal-infiniti-kapital.netlify.app/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-white">Abrir Journal web</a>
                </div>
                <p className="mt-3 text-xs text-slate-500">Compatibles con fondeos y sin dependencias de APIs de bróker.</p>
              </div>
              <div className="h-80 rounded-2xl border border-slate-200 bg-slate-50 grid grid-rows-6 gap-3 p-4">
                <div className="row-span-3 rounded-xl bg-white border border-slate-200 p-4">
                  <div className="text-sm font-semibold">Suite IK</div>
                  <div className="mt-2 h-40 rounded-lg bg-slate-100" />
                </div>
                <div className="row-span-3 rounded-xl bg-white border border-slate-200 p-4">
                  <div className="text-sm font-semibold">Integraciones</div>
                  <div className="mt-2 h-40 rounded-lg bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Redes sociales</h3>
            <div className="flex items-center gap-3">
              <a aria-label="Abrir Telegram" href="https://t.me/+d8in2Q7kwXU1MjJh" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-slate-300">
                <Send className="h-4 w-4" />
              </a>
              <a aria-label="Abrir Instagram" href="https://www.instagram.com/infiniti_kapital?igsh=cjF2eGxvMjI2M21o" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-slate-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">Únete al canal para alertas y contenido diario.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: LineChart, title: 'Bot MT5', desc: 'Automatización SMC con gestión de riesgo.' },
            { icon: Smartphone, title: 'Journal', desc: 'iOS/Android para disciplina y métricas.' },
            { icon: PieChart, title: 'Señales', desc: 'Mercados y bias con herramientas visuales.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="h-10 w-10 grid place-items-center rounded-xl bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}