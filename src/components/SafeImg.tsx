import React, { useState } from 'react';

const FALLBACK_LOGO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
           <stop stop-color="#d4af37" offset="0"/>
           <stop stop-color="#b58a2c" offset="1"/>
         </linearGradient>
       </defs>
       <g transform="translate(8,6)">
         <path d="M28 14c0 7-5 12-12 12S4 21 4 14 9 2 16 2c3 0 6 1 8 3l-3 3c-1-1-3-2-5-2-4 0-8 4-8 8s4 8 8 8 8-4 8-8h4z" fill="url(#g)"/>
       </g>
       <text x="58" y="26" font-size="18" font-family="Inter,Segoe UI,Arial" font-weight="700" fill="#1f2937">INFINITI</text>
       <text x="58" y="38" font-size="12" font-family="Inter,Segoe UI,Arial" fill="#475569" letter-spacing="2">KAPITAL</text>
     </svg>`
  );

export default function SafeImg({ src = '', alt = '', className = '', style }:{ src?:string; alt?:string; className?:string; style?:React.CSSProperties; }) {
  const [ok, setOk] = useState(true);
  const resolved = src || FALLBACK_LOGO;
  return <img src={ok ? resolved : FALLBACK_LOGO} alt={alt} className={className} style={style} onError={() => setOk(false)} loading="lazy" />;
}