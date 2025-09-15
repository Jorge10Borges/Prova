# Prova – Boceto de sitio para cliente

Este repositorio contiene un boceto (demo) del sitio de Prova para presentación al cliente. Incluye portada con carrusel, sección de valor, productos destacados con modal de información, y contacto.

## 🧩 Stack técnico
- Astro 5 (SSG) + Vite
- Tailwind CSS v4 (vía `@tailwindcss/vite`) – estilos unificados en `src/styles/global.css`
- Swiper Web Components para carruseles (`swiper/element/bundle`)

## 📁 Estructura principal

```text
/
├── public/                 # Activos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/         # Componentes Astro (Header, Modal, Swiper, etc.)
│   ├── layouts/            # Layout base del sitio
│   ├── pages/              # Páginas (index.astro)
│   └── styles/             # CSS global (Tailwind)
├── astro.config.mjs        # Configuración de Astro/Vite
├── package.json            # Scripts y dependencias
└── README.md
```

## ▶️ Cómo correr en local
1) Instalar dependencias
	- `npm install`
2) Levantar el entorno de desarrollo
	- `npm run dev`
	- El proyecto está configurado con `--host`, puedes acceder desde tu red local.

## 🏗️ Build de producción
- `npm run build` genera la carpeta `dist/` lista para desplegar.
- (Opcional) `npm run preview` para previsualizar el build en local.

## 🚀 Despliegue
Hay dos escenarios comunes; elige el que aplique a tu hosting.

1) Desplegar en la raíz del dominio (recomendado)
	- Sube el CONTENIDO de `dist/` (no la carpeta en sí) a la raíz pública (ej. `public_html`).
	- Las rutas absolutas como `/_astro/...` y `/assets/...` funcionarán correctamente.

2) Desplegar en una subcarpeta (ej. `https://dominio.com/prova/`)
	- Configura `astro.config.mjs` con:
	  ```js
	  export default defineConfig({
		 site: 'https://dominio.com',
		 base: '/prova/',
		 vite: { plugins: [tailwindcss()] }
	  })
	  ```
	- Cambia las rutas a imágenes públicas a relativas (`assets/...` en lugar de `/assets/...`) cuando sea necesario.
	- Ejecuta `npm run build` y sube el CONTENIDO de `dist/` dentro de la subcarpeta.

## 🧪 Notas funcionales
- El modal de producto se alimenta con atributos `data-*` desde las tarjetas y muestra todos los campos cuando están presentes (presentación, ingredientes, usos, almacenamiento, SKU, etc.).
- El carrusel usa Swiper Web Components; el registro está centralizado para evitar duplicaciones.

## � Alcance de este repositorio
Este es un boceto para demostración al cliente. No se incluye panel de administración ni backend. Próximos pasos sugeridos:
- Centralizar datos de productos (archivo `src/data/products.ts` o colecciones de contenido).
- SEO/Analítica: JSON-LD, sitemap/robots, y eventos de interacción (WhatsApp, modal).
- Páginas de detalle por producto e indexación.

---
© 2025 Prova. Demo creada para propósitos de presentación.
