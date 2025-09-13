import { register } from 'swiper/element/bundle';

// Evita registros duplicados si hay navegación parcial (Astro View Transitions)
if (!(window as any).__swiper_el_loaded) {
  register();
  (window as any).__swiper_el_loaded = true;
}

document.addEventListener('astro:before-swap', () => {
  (window as any).__swiper_el_loaded = true;
});

document.addEventListener('astro:after-swap', () => {
  (window as any).__swiper_el_loaded = true;
});
