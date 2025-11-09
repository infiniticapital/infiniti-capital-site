import React, { useState } from 'react';
import { PieChart, Calendar, Smartphone, Cloud, Apple, Play, Star, CreditCard, Wallet, Bitcoin, Banknote } from 'lucide-react';
import SafeImg from '../components/SafeImg';
import IKWatermark from '../components/IKWatermark';
import { Helmet } from 'react-helmet-async'

const IOS_SHOTS = [
  '/assets/IMG_5334.png',
  '/assets/IMG_5333.png',
  '/assets/IMG_5331.png',
  '/assets/IMG_5330.png',
  '/assets/IMG_5329.png',
];
const ANDROID_SHOTS = [
  'https://images.unsplash.com/photo-1587825140400-451a8f4a0e4f?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1558885544-2a03f6f8bf09?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60',
];
const WEB_SHOTS = [
  { id: 'w-dashboard', label: 'Dashboard web', img: '/assets/journal-web/dashboard-web.png' },
  { id: 'w-riesgo', label: 'Riesgo y KPIs', img: '/assets/journal-web/riesgo-kpis.png' },
  { id: 'w-calendario', label: 'Calendario económico', img: '/assets/journal-web/calendario-economico.png' },
  { id: 'w-estrategias', label: 'Estrategias', img: '/assets/journal-web/estrategias.png' },
  { id: 'w-analiticas', label: 'Analíticas', img: '/assets/journal-web/analiticas.png' },
];

export default function Journal() {
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  const stats = [
    { label: 'Operaciones', value: '1,240' },
    { label: 'Winrate', value: '54%' },
    { label: 'R:R medio', value: '1.9' },
    { label: 'Drawdown', value: '6.2%' },
  ];

  const features = [
    { icon: PieChart, title: 'KPIs avanzados', desc: 'Rendimiento por símbolo, sesión y setup.' },
    { icon: Calendar, title: 'Calendario', desc: 'Jornadas, noticias y notas con filtros.' },
    { icon: Smartphone, title: 'Apps móviles', desc: 'iOS y Android nativas (próximamente).' },
    { icon: Cloud, title: 'Sincronización', desc: 'Conector MT5 y cTrader: envía historial al Journal (web y App). Sin CSV ni API de bróker.' },
  ];

  const platformShotsSrc = platform === 'ios' ? IOS_SHOTS : ANDROID_SHOTS;
  const shots = [
    { id: 1, label: platform === 'ios' ? 'iOS · Analíticas' : 'Android · Analíticas', img: platformShotsSrc[0] },
    { id: 2, label: platform === 'ios' ? 'iOS · Estrategias' : 'Android · Estrategias', img: platformShotsSrc[1] },
    { id: 3, label: platform === 'ios' ? 'iOS · Cuentas' : 'Android · Cuentas', img: platformShotsSrc[2] },
    { id: 4, label: platform === 'ios' ? 'iOS · Operaciones' : 'Android · Operaciones', img: platformShotsSrc[3] },
    { id: 5, label: platform === 'ios' ? 'iOS · Dashboard' : 'Android · Dashboard', img: platformShotsSrc[4] },
  ];

  const testimonialsJ = [
    { name: 'Valentina P.', stars: 5, quote: 'El checklist y las alertas me salvaron de sobreoperar.' },
    { name: 'Diego S.', stars: 4, quote: 'Ver KPIs por símbolo me hizo filtrar mejor mis setups.' },
    { name: 'Rafa G.', stars: 5, quote: 'Mejoré mi R:R al enfocarme en horarios con mejor estadística.' },
  ];

  const paymentsJ = [
    { icon: CreditCard, label: 'Tarjeta', desc: 'Visa/Mastercard' },
    { icon: Banknote, label: 'PayPal', desc: 'Pago simple' },
    { icon: Wallet, label: 'Stripe', desc: 'Suscripción pro' },
    { icon: Bitcoin, label: 'Cripto', desc: 'USDT / BTC / ETH' },
  ];

  return (
    <>
      <Helmet>
        <title>Journal de Trading · KPIs y disciplina</title>
        <meta name="description" content="Journal con conector MT5 y cTrader: sincronización automática en web y App. Sin CSV ni API de brókers. KPIs avanzados y disciplina." />
        <link rel="canonical" href="https://infinitikapital.com/journal" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Journal de Trading · KPIs y disciplina" />
        <meta property="og:description" content="Journal con conector MT5 y cTrader: sincronización automática en web y App. Sin CSV ni API de brókers. KPIs avanzados y disciplina." />
        <meta property="og:url" content="https://infinitikapital.com/journal" />
        <meta property="og:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Journal de Trading · KPIs y disciplina" />
        <meta name="twitter:description" content="Journal multiplataforma con KPIs avanzados, calendario y sincronización. Mejora tu disciplina y rendimiento." />
        <meta name="twitter:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
      </Helmet>
      <section>
        <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
          <IKWatermark className="right-6 -bottom-6 w-36 sm:w-52" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Journal de Trading <span className="text-cyan-600">multiplataforma</span>
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Lleva tu registro con métricas pro y app móvil. Exporta reportes y comparte progreso con tu mentor o comunidad.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="px-5 py-3 rounded-2xl bg-slate-900 text-white">Crear cuenta</a>
                <a href="#" className="px-5 py-3 rounded-2xl border border-slate-300">Ver demo</a>
                <a href="https://journal-infiniti-kapital.netlify.app/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-slate-300">Abrir Journal web</a>
              </div>
              <p className="mt-3 text-xs text-slate-500">Sin CSV: Conector MT5 y cTrader sincroniza tu historial automáticamente en web y App.</p>
              <div className="mt-8 grid grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 flex items-center gap-2 mb-1">
                <button onClick={() => setPlatform('ios')} className={"px-3 py-1.5 rounded-lg text-sm border " + (platform === 'ios' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white border-slate-300 hover:border-slate-400')}>iOS</button>
                <button onClick={() => setPlatform('android')} className={"px-3 py-1.5 rounded-lg text-sm border " + (platform === 'android' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white border-slate-300 hover:border-slate-400')}>Android</button>
              </div>
              <div className="h-80 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4">
                <button onClick={() => setZoom({ src: shots[0].img, label: shots[0].label })}
                  className="mt-2 block w-full h-64 rounded-xl bg-slate-50 overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Abrir preview iOS">
                  <SafeImg src={shots[0].img} alt={shots[0].label} className="w-full h-full object-contain" />
                </button>
              </div>
              <div className="h-80 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4">
                <button onClick={() => setZoom({ src: shots[1].img, label: shots[1].label })}
                  className="mt-2 block w-full h-64 rounded-xl bg-slate-50 overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Abrir preview Android">
                  <SafeImg src={shots[1].img} alt={shots[1].label} className="w-full h-full object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="h-10 w-10 grid place-items-center rounded-xl bg-cyan-600/10 text-cyan-700"><Icon className="h-5 w-5" /></span>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <div id="resultados-journal" className="mt-12">
        <h3 className="text-xl font-semibold">Galería de pantallas · {platform === 'ios' ? 'iOS' : 'Android'}</h3>
        <p className="text-sm text-slate-600 mt-1">Algunas vistas del Journal (prototipo).</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {shots.map((s) => (
            <button key={s.id} onClick={() => setZoom({ src: s.img, label: s.label })}
              className="text-left group rounded-xl overflow-hidden border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              <SafeImg src={s.img} alt={s.label} className="h-40 w-full object-contain bg-slate-50 transition group-hover:scale-[1.01]" />
              <div className="p-3 text-sm font-medium">{s.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div id="journal-web" className="mt-12">
        <h3 className="text-xl font-semibold">Journal web · Galería</h3>
        <p className="text-sm text-slate-600 mt-1">Vista previa de la versión web. Puedes reemplazar las imágenes en /public/assets/journal-web/.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {WEB_SHOTS.map((s) => (
            <button key={s.id} onClick={() => setZoom({ src: s.img, label: s.label })}
              className="text-left group rounded-xl overflow-hidden border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              <SafeImg src={s.img} alt={s.label} className="h-40 w-full object-contain bg-slate-50 transition group-hover:scale-[1.01]" />
              <div className="p-3 text-sm font-medium">{s.label}</div>
            </button>
          ))}
        </div>
        <div className="mt-4">
          <a href="https://journal-infiniti-kapital.netlify.app/" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm">Abrir Journal web</a>
        </div>
      </div>

      <div id="testimonios-journal" className="mt-12">
        <h3 className="text-xl font-semibold">Comentarios de usuarios</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {testimonialsJ.map((t) => (
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

      <div id="pagos-journal" className="mt-12">
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Checklist psicológica</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
            <li>Plan definido y riesgo por operación.</li>
            <li>Evitar sobreoperar tras pérdida/ganancia.</li>
            <li>Respetar horario y evitar noticias de alto impacto.</li>
            <li>Revisar sesgo y confirmar con contexto.</li>
            <li>Cerrar plataforma si hay fatiga.</li>
          </ul>
        </div>

        <div className="mt-4 grid sm:grid-cols-4 gap-4">
          {paymentsJ.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100"><Icon className="h-5 w-5" /></span>
              <div className="mt-3 font-medium">{label}</div>
              <div className="text-xs text-slate-500">{desc}</div>
              <a href="#" className="mt-4 inline-block px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm">Suscribirme</a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white">
          <Apple className="h-4 w-4" /> App Store
        </a>
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white">
          <Play className="h-4 w-4" /> Google Play
        </a>
        <span className="text-xs text-slate-500">Apps disponibles próximamente.</span>
      </div>

      {zoom && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setZoom(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <SafeImg src={zoom.src} alt={zoom.label} className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl bg-black" />
            <button aria-label="Cerrar" onClick={() => setZoom(null)} className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-slate-900 grid place-items-center shadow">✕</button>
            <div className="absolute left-0 right-0 -bottom-10 text-center text-white/90 text-sm">{zoom.label}</div>
          </div>
        </div>
      )}
      <div id="insights" className="mt-10">
        <h3 className="text-xl font-semibold">Insights rápidos</h3>
        <p className="text-sm text-slate-600 mt-1">Resumen de desempeño para decisiones rápidas.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs text-slate-500">Mejores símbolos</div>
            <div className="mt-1 text-sm font-semibold">EURUSD · XAUUSD</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs text-slate-500">Mejor horario</div>
            <div className="mt-1 text-sm font-semibold">NY · 14:00–17:00</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs text-slate-500">Setup más rentable</div>
            <div className="mt-1 text-sm font-semibold">OB + FVG</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs text-slate-500">Menor DD</div>
            <div className="mt-1 text-sm font-semibold">Londres · Mañana</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}