# JBPortfolio

Sitio web del Lic. Javier Becco — Licenciado en Seguridad, Higiene y Control Ambiental Laboral.

Sitio estático (sin build), listo para desplegar en Netlify.

## Estructura

```
index.html                  Página única, contenido real tomado del CV
assets/
  css/styles.css            Estilos propios (fuera de las utilidades de Tailwind)
  js/
    tailwind.config.js      Tokens de diseño (colores, tipografía, espaciado)
    nav.js                  Menú móvil + resaltado de sección activa
    form.js                 Envío del formulario de contacto vía Netlify Forms
    main.js                 Composition root: inicializa nav.js y form.js
  img/
    javier-becco.jpeg       Foto de perfil
    favicon.svg             Ícono del sitio
  cv/
    CV_Javier_Becco.pdf     CV descargable (formato ATS)
netlify.toml                 Configuración de build y headers para Netlify
```

Cada módulo de `assets/js` tiene una única responsabilidad para que se pueda modificar
uno sin afectar a los demás (menú, formulario, inicialización).

## Desarrollo local

No requiere instalación. Basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```
npx serve .
```

o con la extensión "Live Server" de VS Code.

## Formulario de contacto

Usa [Netlify Forms](https://docs.netlify.com/manage/forms/setup/): no requiere backend.
Netlify detecta el formulario `name="contacto"` en el HTML al momento del deploy.
Las respuestas quedan disponibles en el panel de Netlify (**Site → Forms**), donde también
se puede configurar una notificación por email a `profe.legislcet6@gmail.com`.

## Deploy en Netlify

**Opción A — Arrastrar y soltar (más simple):**
1. Entrar a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastrar la carpeta completa del proyecto.
3. Netlify publica el sitio y detecta el formulario automáticamente.

**Opción B — Conectado a Git (recomendado para futuras actualizaciones):**
1. Subir este repositorio a GitHub.
2. En Netlify: **Add new site → Import an existing project**.
3. Build command: (vacío). Publish directory: `.`
4. Deploy.

**Opción C — Netlify CLI:**
```
npm install -g netlify-cli
netlify login
netlify deploy          # preview
netlify deploy --prod   # producción
```

## Datos de contacto usados en el sitio

Todos los datos (teléfono, email, experiencia, formación) provienen del CV
`CV_Javier_Becco_ATSFriendly.pdf`. El número de WhatsApp se generó insertando el "9"
de celular argentino (`54 9 2920 523324`); si el número del CV es de línea fija sin
WhatsApp, hay que reemplazar los enlaces `wa.me` en `index.html` o quitarlos.
