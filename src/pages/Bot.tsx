import React, { useState } from 'react';
import IKWatermark from '../components/IKWatermark';
import SafeImg from '../components/SafeImg';
import { Bot as BotIcon, ShieldCheck, Settings, Bell, Rocket, Star, CreditCard, Wallet, Bitcoin, Banknote, Plug, Globe, BadgeCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async'

export default function Bot() {
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);
  const features = [
    { icon: BotIcon, title: 'SMC + Filtros', desc: 'OB/FVG, BOS/CHOCH, filtro de noticias y sesiones.' },
    { icon: ShieldCheck, title: 'Gestión de riesgo', desc: 'Riesgo %, SL por ATR, freno diario y tope de drawdown.' },
    { icon: Settings, title: 'Control total', desc: 'Activos, horarios, volumen sintético y webhooks.' },
    { icon: Bell, title: 'Alertas & logs', desc: 'Panel, Telegram, notificaciones y consola de eventos.' },
  ];

  const results = [
    { id: 1, label: 'Market Watch · MT5', img: '/assets/bot/mt5-market-watch.png' },
    { id: 2, label: 'XAUUSD · Chart', img: '/assets/bot/mt5-chart-xauusd.png' },
    { id: 3, label: 'Panel · Institucional', img: '/assets/bot/mt5-panel-institucional.png' },
    { id: 4, label: 'Trade · Profit 974', img: '/assets/bot/mt5-trade-profit-974.png' },
    { id: 5, label: 'Trades list', img: '/assets/bot/mt5-trades-list.png' },
  ];

  const testimonials = [
    { name: 'Laura M.', stars: 5, quote: 'El bot me ordenó la gestión y el Journal me hizo disciplinada.' },
    { name: 'Carlos R.', stars: 5, quote: 'Me gusta el filtro de noticias y el SL por ATR; menos stops absurdos.' },
    { name: 'Ángel T.', stars: 4, quote: 'Panel claro y conexión con Telegram. Buen soporte en la integración.' },
  ];

  const payments = [
    { icon: CreditCard, label: 'Tarjeta', desc: 'Visa/Mastercard' },
    { icon: Banknote, label: 'PayPal', desc: 'Protección al comprador' },
    { icon: Wallet, label: 'Stripe', desc: 'Suscripciones seguras' },
    { icon: Bitcoin, label: 'Cripto', desc: 'USDT / BTC / ETH' },
  ];

  return (
    <>
      <Helmet>
        <title>Bot MT5 · Automatiza tu trading</title>
        <meta name="description" content="Bot MT5 Prop Firm Ready y compatible con Darwinex Zero. Conector MT5/cTrader sin API de bróker y compatibilidad universal. Integración con Journal y panel claro." />
        <link rel="canonical" href="https://infinitikapital.com/bot" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bot MT5 · Automatiza tu trading" />
        <meta property="og:description" content="Bot MT5 Prop Firm Ready y compatible con Darwinex Zero. Conector MT5/cTrader sin API de bróker y compatibilidad universal. Integración con Journal y panel claro." />
        <meta property="og:url" content="https://infinitikapital.com/bot" />
        <meta property="og:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bot MT5 · Automatiza tu trading" />
        <meta name="twitter:description" content="Bot MT5 Prop Firm Ready y compatible con Darwinex Zero. Conector MT5/cTrader sin API de bróker y compatibilidad universal. Integración con Journal y panel claro." />
        <meta name="twitter:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
+       <script type="application/ld+json">{`
+         {
+           "@context": "https://schema.org",
+           "@type": "SoftwareApplication",
+           "name": "Infiniti Kapital Bot MT5",
+           "operatingSystem": "Windows, macOS",
+           "applicationCategory": "FinanceApplication",
+           "url": "https://infinitikapital.com/bot",
+           "offers": { "@type": "Offer", "price": "29", "priceCurrency": "USD" },
+           "featureList": [
+             "Prop Firm Ready",
+             "Compatible con Darwinex Zero",
+             "Conector MT5/cTrader",
+             "Compatibilidad universal"
+           ]
+         }
+       `}</script>
      </Helmet>
      <section>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-cyan-600 to-sky-500 p-[1px] shadow-xl">
          <div className="relative rounded-3xl bg-white">
            <IKWatermark className="right-6 -bottom-6 w-40 sm:w-56" />
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 sm:p-12">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  <Rocket className="h-3.5 w-3.5" /> Nuevo: v3.1 con trailing estructural
                </span>
                <span className="ml-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  <ShieldCheck className="h-3.5 w-3.5" /> Prop Firm Ready: Pasa tu cuenta de fondeo
                </span>
                <a href="https://www.darwinexzero.com/es" target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5" /> Compatible con Darwinex Zero
                </a>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Automatiza tu <span className="text-indigo-600">trading</span> con el Bot MT5
                </h1>
                <p className="mt-4 text-slate-600 text-lg">
                  Un bot SMC profesional con gestión de riesgo, control de sesiones y conexión nativa a tu Journal.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow">Probar gratis</a>
                  <a href="#" className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-white">Ver documentación</a>
                </div>
                <p className="mt-3 text-xs text-slate-500">Sin permanencia. Licencia por cuenta y transferencia rápida.</p>
              </div>
              <div>
                <div className="h-80 rounded-2xl border border-slate-200 bg-slate-50 grid grid-rows-6 gap-3 p-4">
                  <div className="row-span-2 rounded-xl bg-white border border-slate-200 p-4">
                    <div className="text-sm font-semibold">Panel del Bot</div>
                    <div className="mt-2 h-20 rounded-lg bg-slate-100" />
                  </div>
                  <div className="row-span-2 rounded-xl bg-white border border-slate-200 p-4">
                    <div className="text-sm font-semibold">Backtest Rápido</div>
                    <div className="mt-2 h-20 rounded-lg bg-slate-100" />
                  </div>
                  <div className="row-span-2 rounded-xl bg-white border border-slate-200 p-4">
                    <div className="text-sm font-semibold">Logs & Alertas</div>
                    <div className="mt-2 h-20 rounded-lg bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="h-10 w-10 grid place-items-center rounded-xl bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-600/10 text-emerald-700">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold">Prop Firm Ready</h3>
            <p className="mt-1 text-sm text-slate-600">Diseñado para cumplir reglas de evaluaciones y fondeo. Gestión de riesgo estricta y control de sesiones.</p>
            <p className="mt-2 text-xs">
              <a href="https://www.darwinexzero.com/es" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-800">
                <BadgeCheck className="h-4 w-4" /> Cumple requisitos de Darwinex Zero
              </a>
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">FTMO</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Onda Pro Firm</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Foundnext</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">E8 Funding</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">The Funded Trader</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="h-10 w-10 grid place-items-center rounded-xl bg-cyan-600/10 text-cyan-700">
              <Plug className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold">Conector MT5/cTrader</h3>
            <p className="mt-1 text-sm text-slate-600">Envío automático de entradas y resultados al Journal (web y App). Sin CSV ni API de bróker.</p>
            <div className="mt-2">
              <a href="/journal" className="text-xs inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-800">Ver Journal</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="h-10 w-10 grid place-items-center rounded-xl bg-indigo-600/10 text-indigo-700">
              <Globe className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold">Compatibilidad universal</h3>
            <p className="mt-1 text-sm text-slate-600">Aceptamos todos los brókers. Sin dependencias de APIs externas. Configuración simple y soporte dedicado.</p>
          </div>
        </div>

        <div id="telegram" className="mt-14">
          <h3 className="text-xl font-semibold">Integración con Telegram</h3>
          <p className="text-sm text-slate-600 mt-1">Envía alertas del bot y registros al canal o chat.</p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 grid place-items-center rounded-xl bg-sky-600/10 text-sky-700">
                <Bell className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Alertas en tiempo real</div>
                <div className="text-xs text-slate-500">Entradas, SL/TP, eventos y resumen diario.</div>
              </div>
            </div>
            <a href="https://t.me/+d8in2Q7kwXU1MjJh" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm">Unirme al canal</a>
          </div>
        </div>

        <div id="resultados" className="mt-14">
          <h3 className="text-xl font-semibold">Galería MT5 · Bot</h3>
          <p className="text-sm text-slate-600 mt-1">Capturas reales del bot en MT5. Coloca tus archivos en /public/assets/bot/.</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((r) => (
              <button key={r.id} onClick={() => setZoom({ src: r.img, label: r.label })}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white text-left focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <SafeImg src={r.img} alt={r.label} className="h-32 w-full object-cover transition group-hover:scale-[1.02]" />
                <div className="p-3">
                  <div className="text-sm font-medium">{r.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div id="testimonios" className="mt-14">
          <h3 className="text-xl font-semibold">Testimonios</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{t.name}</div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className={"h-4 w-4 " + (i < t.stars ? 'text-amber-500' : 'text-slate-300')} />))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>

        <div id="faq" className="mt-14">
          <h3 className="text-xl font-semibold">FAQ técnica</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="font-semibold">¿Cómo se conecta sin API de bróker?</div>
              <p className="mt-2 text-sm text-slate-600">Usamos el conector MT5/cTrader que captura operaciones y las envía al Journal mediante webhooks seguros.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="font-semibold">¿Qué requisitos de Prop Firm cumple?</div>
              <p className="mt-2 text-sm text-slate-600">Freno diario, tope de drawdown, riesgo por operación y control de sesiones para evitar operar fuera de horario.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="font-semibold">¿Cómo gestiona el riesgo?</div>
              <p className="mt-2 text-sm text-slate-600">Riesgo en %, SL por ATR/estructura, trailing estructural y bloqueos ante rachas negativas.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="font-semibold">¿Compatibilidad y brókers?</div>
              <p className="mt-2 text-sm text-slate-600">Compatible con cualquier bróker que soporte MT5 o cTrader; no dependemos de APIs externas.</p>
            </div>
          </div>
        </div>

        <div id="pagos" className="mt-14">
          <h3 className="text-xl font-semibold">Opciones de pago</h3>
          <p className="text-sm text-slate-600 mt-1">Aceptamos tarjeta, PayPal, Stripe y cripto.</p>
          <div className="mt-4 grid sm:grid-cols-4 gap-4">
            {payments.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <span className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100"><Icon className="h-5 w-5" /></span>
                <div className="mt-3 font-medium">{label}</div>
                <div className="text-xs text-slate-500">{desc}</div>
                <a href="#" className="mt-4 inline-block px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Pagar con {label}</a>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Procesado de forma segura. No guardamos datos de tarjeta.</p>
        </div>

        <p className="mt-6 text-xs text-slate-500">Aviso: El trading conlleva riesgo. No es asesoría financiera.</p>

        {zoom && (
          <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setZoom(null)}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <SafeImg src={zoom.src} alt={zoom.label} className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl bg-black" />
              <button aria-label="Cerrar" onClick={() => setZoom(null)} className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-slate-900 grid place-items-center shadow">✕</button>
              <div className="absolute left-0 right-0 -bottom-10 text-center text-white/90 text-sm">{zoom.label}</div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}