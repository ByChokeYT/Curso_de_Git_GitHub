![Banner](../../Recursos/Banners/06-github.png)

# Módulo 06: Ecosistema Profesional de GitHub

GitHub no es solo un hosting de código; es la red social y la plataforma de colaboración más grande del mundo para desarrolladores. Dominar su ecosistema es clave para tu carrera.

---

## 👤 Perfil y Marca Personal
Tu perfil de GitHub es tu **Currículum Vitae** real. 
-   **Profile README:** Crea un repositorio con tu nombre de usuario para personalizar tu página de inicio.
-   **Contributions Graph:** La constancia es valorada por los reclutadores.
-   **Pinned Repositories:** Muestra tus mejores proyectos (máximo 6).

---

## 🤝 Colaboración en Proyectos (Open Source)
El flujo de contribución estándar es el **Fork & Pull Request**:

1.  **Fork:** Creas una copia exacta del repositorio en tu cuenta.
2.  **Clone:** Descargas tu fork localmente.
3.  **Branch:** Creas una rama para tu mejora.
4.  **Push:** Subes tus cambios a tu fork.
5.  **Pull Request (PR):** Propones tus cambios al repositorio original.

---

## 🏢 Organizaciones y Equipos
Para proyectos profesionales, se utilizan **Organizaciones**:
-   **Teams:** Permiten gestionar permisos de lectura/escritura por grupos.
-   **Settings de Seguridad:** Protección de ramas (Branch Protection Rules) para evitar que se suba código a `main` sin revisión.

---

## 📜 Gists: Snippets de Código
Los [Gists](https://gist.github.com) son repositorios pequeños de un solo archivo. Ideales para:
-   Compartir fragmentos de código rápidos.
-   Guardar configuraciones de terminal (`.zshrc`, `.vimrc`).
-   Documentación técnica efímera.

---

## ## Resumen (Ingeniería de Sistemas)
1.  **Visibilidad:** No basta con programar bien; hay que saber mostrarlo.
2.  **Estandarización:** Sigue las reglas del repositorio donde contribuyes (`CONTRIBUTING.md`).
3.  **Seguridad:** Nunca subas secretos (API Keys, Passwords) a GitHub, incluso en repositorios privados.

## 💻 Laboratorio Práctico: Paso a Paso

1. **Clona un proyecto de código abierto (Fork local):**
   ```bash
   git clone https://github.com/torvalds/linux.git mi-linux
   cd mi-linux
   ```
2. **Crea un Gist rápido desde la terminal (requiere GitHub CLI):**
   ```bash
   # Si tienes gh instalado:
   echo "Mi snippet útil" > util.js
   gh gist create util.js --public
   ```

---

[Laboratorio: Crea tu Profile README](https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
