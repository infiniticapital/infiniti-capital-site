import React from 'react';
import { Helmet } from 'react-helmet-async'

export default function Room() {
  const sessions = [
    { day: 'Lunes', title: 'Apertura Londres', time: '08:00 - 09:00', focus: 'Niveles & sesgo diario' },
    { day: 'Miércoles', title: 'Mitad de semana', time: '14:00 - 15:00', focus: 'Seguimiento midweek' },
    { day: 'Viernes', title: 'Cierre semanal', time: '12:00 - 13:00', focus: 'Review & plan próximo' },
  ];

  const mentors = [
    { name: 'Lead Trader', role: 'SMC/Índices', kpi: '+1.6R semanal' },
    { name: 'Risk Coach', role: 'Gestión & Psicología', kpi: 'Drawdown bajo' },
  ];

  return (
    <>
      <Helmet>
        <title>Sala de Trading · Sesiones y mentores</title>
        <meta name="description" content="Sesiones en vivo, revisión semanal y acompañamiento de mentores con foco en la disciplina." />
        <link rel="canonical" href="https://infinitikapital.com/room" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sala de Trading · Sesiones y mentores" />
        <meta property="og:description" content="Sesiones en vivo, revisión semanal y acompañamiento de mentores con foco en la disciplina." />
        <meta property="og:url" content="https://infinitikapital.com/room" />
        <meta property="og:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sala de Trading · Sesiones y mentores" />
        <meta name="twitter:description" content="Sesiones en vivo, revisión semanal y acompañamiento de mentores con foco en la disciplina." />
        <meta name="twitter:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
      </Helmet>
      <section>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-[1px] shadow-xl">
        <div className="relative rounded-3xl bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center p-8 sm:p-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Sala de <span className="text-slate-900">Trading</span>
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Sesiones en vivo, revisión semanal y acompañamiento de mentores con foco en la disciplina.
              </p>
            </div>
            <div>
              <div className="h-80 rounded-2xl border border-slate-200 bg-slate-50 grid grid-rows-6 gap-3 p-4">
                <div className="row-span-3 rounded-xl bg-white border border-slate-200 p-4">
                  <div className="text-sm font-semibold">Agenda</div>
                  <div className="mt-2 h-40 rounded-lg bg-slate-100" />
                </div>
                <div className="row-span-3 rounded-xl bg-white border border-slate-200 p-4">
                  <div className="text-sm font-semibold">Mentores</div>
                  <div className="mt-2 h-40 rounded-lg bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs text-slate-500">{s.day} · {s.time}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.focus}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {mentors.map((m) => (
          <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">{m.role}</div>
            <h3 className="mt-1 font-semibold">{m.name}</h3>
            <p className="mt-1 text-xs text-slate-500">{m.kpi}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-500">Agenda sujeta a cambios según calendario económico.</p>
    </section>
    </>
  );
}