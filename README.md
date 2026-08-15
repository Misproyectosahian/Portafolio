# Portafolio — Ahian Danier Quesada Guadamuz

Portafolio personal estilo consola/terminal, bilingüe (ES/EN), con tema claro/oscuro,
fondo de partículas animadas y navegación por pestañas. Construido en React + Vite.

## Estructura (2 columnas)
- **Izquierda (fija)**: navegación con iconos, foto, nombre, rol rotativo, redes, descargar CV.
- **Derecha (pestañas)**: Sobre Mí · Resume · Proyectos · Contacto.

## Características
- 🌐 Bilingüe ES/EN (botón arriba a la derecha)
- ☀️🌙 Tema claro / oscuro
- ✨ Fondo de partículas animadas
- ⌨️ Rol rotativo con efecto typing
- 📊 Barras de skills animadas
- 📂 Proyectos expandibles
- 📱 Responsive (mobile-first)
- ♿ Respeta prefers-reduced-motion

## Desarrollo local
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build de producción
```bash
npm run build      # genera dist/
```

## Desplegar en Vercel
1. Sube este proyecto a un repo de GitHub.
2. En Vercel: New Project → Import ese repo.
3. Vercel detecta Vite automáticamente (Build: `npm run build`, Output: `dist`).
4. Deploy.

## Editar tu información
Todo el contenido está en **`src/data.js`** con versión `es` y `en` de cada texto.

## Tu CV en PDF
Coloca tu CV en `public/cv_Ahian_Quesada.pdf` (ese es el nombre que espera el botón
"Descargar CV"). Si usas otro nombre, cámbialo en `PROFILE.cv` dentro de `src/data.js`.

## Tu foto
Está en `src/assets/profile.png`. Reemplázala por otra con el mismo nombre para cambiarla.

## Archivos clave
```
src/
├── data.js     ← TODO tu contenido (edita aquí)
├── App.jsx     ← componentes y lógica
├── App.css     ← estilos de componentes
├── index.css   ← tema, tokens, temas claro/oscuro
└── assets/profile.png  ← tu foto
public/
└── cv_Ahian_Quesada.pdf  ← coloca tu CV aquí
```
