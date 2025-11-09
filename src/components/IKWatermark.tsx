import React from 'react';
import SafeImg from './SafeImg';

const PUBLIC_LOGO = '/assets/logo.jpg';

export default function IKWatermark({ className = '' }: { className?: string }) {
  return (
    <SafeImg
      src={PUBLIC_LOGO}
      alt="Infiniti Kapital watermark"
      className={"absolute opacity-10 grayscale pointer-events-none select-none " + className}
      style={{ maxHeight: 64, objectFit: 'contain' }}
    />
  );
}