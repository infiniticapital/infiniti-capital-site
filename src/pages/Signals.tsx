import React from 'react';
import IKWatermark from '../components/IKWatermark';
import { LineChart, BarChart3, Users, TrendingUp, AlertTriangle, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async'

export default function Signals() {
  const tickers = [
    { s: 'EURUSD', p: '1.0821' },
    { s: 'XAUUSD', p: '2317.5' },
    { s: 'US500', p: '5372.2' },
    { s: 'BTCUSD', p: '68,420' },
    { s: 'NAS100', p: '18,220' },
  ];

  const perks = [
    { icon: LineChart, title: 'Señales verificables', desc: 'Idea, entrada, SL/TP y gestión en tiempo real.' },
    { icon: BarChart3, title: 'Market Brief', desc: 'Sesiones, niveles clave y calendario económico.' },
    { icon: Users, title: 'Comunidad privada', desc: 'Disciplina, feedback y psicología aplicada.' },
  ];

  const providers = [
    { name: 'IK Core FX', instruments: ['EURUSD', 'GBPUSD'], stats: { win: 61, roi: 18.4, dd: 7.2, freq: '3-5/sem' }, price: '$29', verified: 'Verificado (demo)' },
    { name: 'IK Metals', instruments: ['XAUUSD'], stats: { win: 57, roi: 22.1, dd: 9.5, freq: '2-4/sem' }, price: '$39', verified: 'Verificado (backtest + manual)' },
    { name: 'IK Indices', instruments: ['US500', 'NAS100'], stats: { win: 55, roi: 15.2, dd: 6.8, freq: '2-3/sem' }, price: '$29', verified: 'Verificado (demo)' },
    { name: 'IK Crypto', instruments: ['BTCUSD'], stats: { win: 52, roi: 25.7, dd: 12.4, freq: '1-2/sem' }, price: '$29', verified: 'Experimental' },
  ];

  const [sortBy, setSortBy] = React.useState<'roi' | 'win' | 'dd'>('roi');
  const sortedProviders = React.useMemo(() => {
    const list = [...providers];
    if (sortBy === 'roi') return list.sort((a, b) => b.stats.roi - a.stats.roi);
    if (sortBy === 'win') return list.sort((a, b) => b.stats.win - a.stats.win);
    if (sortBy === 'dd') return list.sort((a, b) => a.stats.dd - b.stats.dd);
    return list;
  }, [providers, sortBy]);
  const [selectedProvider, setSelectedProvider] = React.useState<any | null>(null);
  const itemListLd = React.useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: providers.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name
    }))
  }), [providers]);

  return (
    <>
      <Helmet>
        <title>Señales de Mercado · Análisis y gestión responsable</title>
        <meta name="description" content="Señales verificables, market brief y comunidad privada. Disciplina y gestión responsable en mercados." />
        <link rel="canonical" href="https://infinitikapital.com/signals" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Señales de Mercado · Análisis y gestión responsable" />
        <meta property="og:description" content="Señales verificables, market brief y comunidad privada. Disciplina y gestión responsable en mercados." />
        <meta property="og:url" content="https://infinitikapital.com/signals" />
        <meta property="og:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Señales de Mercado · Análisis y gestión responsable" />
        <meta name="twitter:description" content="Señales verificables, market brief y comunidad privada. Disciplina y gestión responsable en mercados." />
        <meta name="twitter:image" content="https://infinitikapital.com/assets/IMG_5334.png" />
        <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
      </Helmet>
      <section>
        <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
          <IKWatermark className="right-6 -bottom-6 w-36 sm:w-52" />
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Mercados & <span className="text-indigo-600">Señales</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-3xl">
            Acceso a análisis diarios, señales con gestión responsable y un feed centralizado para Telegram.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {tickers.map((t) => (
              <div key={t.s} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                <div className="text-xs text-slate-500">{t.s}</div>
                <div className="text-lg font-semibold">{t.p}</div>
              </div>
            ))}
          </div>

          {/* Filtros simples */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Forex', 'Índices', 'Cripto', 'Bajo DD', 'Alto winrate', 'Alta frecuencia'].map((f) => (
              <button key={f} className="px-3 py-1.5 rounded-lg text-sm border bg-white border-slate-300 hover:border-slate-400">
                {f}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <label className="text-xs text-slate-500">Ordenar por:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'roi' | 'win' | 'dd')}
              className="px-3 py-1.5 rounded-lg text-sm border bg-white border-slate-300">
              <option value="roi">ROI</option>
              <option value="win">Winrate</option>
              <option value="dd">Menor DD</option>
            </select>
          </div>

          {/* Listado de proveedores */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProviders.map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-9 w-9 grid place-items-center rounded-xl bg-indigo-600/10 text-indigo-700">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-slate-500">{p.instruments.join(' · ')}</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-3 text-center">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="text-sm font-semibold">{p.stats.win}%</div>
                    <div className="text-[11px] text-slate-500">Winrate</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="text-sm font-semibold">{p.stats.roi}%</div>
                    <div className="text-[11px] text-slate-500">ROI</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="text-sm font-semibold">{p.stats.dd}%</div>
                    <div className="text-[11px] text-slate-500">DD</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="text-sm font-semibold">{p.stats.freq}</div>
                    <div className="text-[11px] text-slate-500">Frecuencia</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Shield className="h-4 w-4 text-emerald-600" /> {p.verified}
                  </div>
                  <div className="text-sm font-semibold">{p.price}/mes</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Suscribirse</button>
                  <button onClick={() => setSelectedProvider(p)} className="px-4 py-2 rounded-xl border border-slate-300 text-sm">Ver detalles</button>
                  <button className="px-4 py-2 rounded-xl border border-slate-300 text-sm">Seguir</button>
                  <a href="/journal" className="px-4 py-2 rounded-xl border border-slate-300 text-sm">Ver en Journal</a>
                  <button className="px-4 py-2 rounded-xl border border-slate-300 text-sm opacity-60 cursor-not-allowed" aria-disabled>
                    Copiar en MT5 (pronto)
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-slate-500">
            Las estadísticas son ilustrativas. Gestiona el riesgo y verifica resultados con cuentas demo antes de suscribirte.
          </p>
        </div>
      </section>
      {selectedProvider && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProvider(null)}>
          <div className="max-w-xl w-full rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 grid place-items-center rounded-xl bg-indigo-600/10 text-indigo-700">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">{selectedProvider.name}</div>
                <div className="text-xs text-slate-500">{selectedProvider.instruments?.join(' · ')}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3 text-center">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-sm font-semibold">{selectedProvider.stats.win}%</div>
                <div className="text-[11px] text-slate-500">Winrate</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-sm font-semibold">{selectedProvider.stats.roi}%</div>
                <div className="text-[11px] text-slate-500">ROI</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-sm font-semibold">{selectedProvider.stats.dd}%</div>
                <div className="text-[11px] text-slate-500">DD</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-sm font-semibold">{selectedProvider.stats.freq}</div>
                <div className="text-[11px] text-slate-500">Frecuencia</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500">Estadísticas ilustrativas. Verifica en demo y usa gestión responsable.</div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Suscribirse</button>
              <a href="/journal" className="px-4 py-2 rounded-xl border border-slate-300 text-sm">Ver en Journal</a>
              <button onClick={() => setSelectedProvider(null)} className="px-4 py-2 rounded-xl border border-slate-300 text-sm">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}