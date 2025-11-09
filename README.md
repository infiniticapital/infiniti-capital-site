# Infiniti Kapital – Galería de Templates

Vite + React + TypeScript + Tailwind, listo para GitHub Pages.

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages
1. Crea un repo (ej: `infiniti-kapital-templates`).
2. Sube el código:
```bash
git init
git add -A
git commit -m "init"
git branch -M main
git remote add origin <tu-url>
git push -u origin main
```
3. Activa Pages vía GitHub Actions (workflow incluido). Si tu página estará en `username.github.io/REPO`, edita `vite.config.ts` y pon `base: '/REPO/'`.

## Imágenes
- Logo y capturas iOS ya están en `/public/assets/`.
- Cambia `ANDROID_SHOTS` en `src/App.tsx` cuando tengas capturas de Android.

---
© 2025 Infiniti Kapital
