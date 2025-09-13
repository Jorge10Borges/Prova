# Componentes

Carpeta para los componentes de la interfaz en Astro.

- Convención: nombres en PascalCase y extensión `.astro` (ej. `Header.astro`, `ProductCard.astro`).
- Estilos: usar utilidades de Tailwind CSS; evitar CSS ad-hoc salvo casos puntuales.
- Props: declarar una `interface Props` en el frontmatter y usar `Astro.props`.
- Accesibilidad: etiquetas semánticas (`header`, `main`, `nav`, `footer`) y atributos `aria-*` cuando corresponda.

Ejemplo de componente con props:

```astro
---
interface Props { title: string }
const { title } = Astro.props;
---
<h2 class="text-2xl font-bold">{title}</h2>
```
