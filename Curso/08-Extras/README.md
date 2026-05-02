![Banner](../../Recursos/Banners/08-extras.png)

# Módulo 08: Otras Funcionalidades de GitHub

GitHub es un centro de operaciones (DevOps). Aquí exploramos las herramientas que orquestan el ciclo de vida del software más allá del código.

---

## 🎫 Issues & Project Management
-   **Issues:** Reportes de bugs, sugerencias o tareas. Usa **Labels** (bug, enhancement, help wanted) para organizar.
-   **GitHub Projects:** Un tablero Kanban (estilo Trello/Jira) integrado totalmente con tus PRs e Issues.
-   **Milestones:** Grupos de issues para medir el progreso de una versión específica.

---

## 🌐 GitHub Pages
La forma más rápida de desplegar sitios web estáticos (HTML/CSS/JS) de forma gratuita.
-   Perfecto para **Portafolios**, **Documentación** o este mismo **Curso**.
-   Soporta dominios personalizados y HTTPS automático.

---

## 📦 Releases & Tags
-   **Tags:** Puntos fijos en la historia (ej: `v1.0.0`).
-   **Releases:** Empaquetan una versión específica, permitiendo adjuntar binarios (.exe, .apk, .zip) y notas de lanzamiento (Changelog).

---

## 🔗 Integraciones (Webhooks & Apps)
GitHub se puede conectar con:
-   **Discord/Slack:** Notificaciones en tiempo real de commits.
-   **Jira:** Sincronización de tickets.
-   **Vercel/Netlify:** Despliegue automático (CD).

---

## ## Resumen (Ingeniería de Sistemas)
1.  **Documentación viva:** Usa la Wiki o GitHub Pages para que tu proyecto sea entendible.
2.  **Trazabilidad:** Cada línea de código debe poder rastrearse hasta un Issue o una necesidad de negocio.
3.  **Automatización:** Si lo haces más de dos veces, automatízalo con una GitHub Action o un Webhook.

## 💻 Laboratorio Práctico: Paso a Paso

1. **Crea un Tag (etiqueta) ligero y súbelo:**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
2. **Crea un Tag anotado (más profesional):**
   ```bash
   git tag -a v2.0.0 -m "Release v2.0.0: Nuevo login y UI"
   git push origin v2.0.0
   ```

---

[Laboratorio: Despliega tu primer sitio en GitHub Pages](https://pages.github.com/)
