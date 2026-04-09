# Módulo 08: GitHub Actions 2027 (IA & Automación)

Entramos en el terreno de la **Ingeniería de Plataforma**. GitHub Actions es el motor CI/CD que permite que el software se pruebe y despliegue solo, con la ayuda de la Inteligencia Artificial.

---

## 🔬 Arquitectura de un Workflow 2027

### Componentes Core
-   **Events (Triggers):** Qué dispara la acción (`push`, `pull_request`, `schedule`).
-   **Jobs:** Unidades ejecutadas en paralelo en Runners (computadoras virtuales).
-   **Steps:** Secuencias lógicas (Instalar dependencias, Correr tests).

### IA Integrada: El Autopilot del DevOps
En 2027, las Actions no solo corren código; lo analizan.
-   **Auto-Review:** La IA revisa el PR y sugiere cambios basados en la guía de estilo del equipo.
-   **Auto-Summary:** Generación automática de notas de lanzamiento extrayendo el contexto de los commits semánticos.

---

## ⚙️ Seguridad en Pipelines (OIDC & Secrets)

Nunca, bajo ninguna circunstancia, escribas una contraseña en un archivo YAML.

### Gestión de Secretos
Usa `secrets.YOUR_KEY` para que Git oculte el valor en los logs.

### OIDC (OpenID Connect)
La forma moderna de conectar GitHub con nubes como AWS o Azure sin usar claves de larga duración. Usamos tokens temporales de un solo uso para máxima seguridad.

---

## ## Resumen (Ingeniería de Sistemas)

1.  **Falla Rápido:** Configura tus Actions para que los tests corran ante cualquier cambio. Es mejor detectar un error en 1 minuto que en 1 mes.
2.  **Lint-staged:** No permitas commits que no cumplan con el formato. Automatiza el `prettier` o `eslint` antes del push.
3.  **Seguridad por Defecto:** Los permisos de los tokens de GitHub Actions deben ser de "solo lectura" a menos que necesiten escribir explícitamente.

[Examen: Módulo 08 - Laboratorio de Actions](https://forms.gle/toiLYERfdE2BQT1V8)
