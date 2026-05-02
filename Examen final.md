# 🏆 Desafío de Certificación Final: Git & GitHub Master

Este examen no es solo una lista de comandos. Es una simulación de un día real como Desarrollador Senior en una empresa tecnológica.

---

## 🛠️ Fase 1: Configuración de Infraestructura
1.  Crea un repositorio en GitHub llamado `git-masterclass-tu-nombre`.
2.  Configura un archivo `.gitignore` profesional para un proyecto de tu lenguaje favorito (Node, Python, Go, etc.).
3.  Establece una regla de protección de rama para que nadie pueda hacer push directo a `main` (descríbelo en un commit).

## 🚀 Fase 2: Flujo de Trabajo Profesional
4.  Crea una rama `develop` y otra `feature/auth`.
5.  En `feature/auth`, realiza 3 commits simulando la implementación de un login. Usa **Conventional Commits** (ej: `feat(auth): add login logic`).
6.  Realiza un **Interactive Rebase** para hacer `squash` de esos 3 commits en uno solo más limpio.

## 💥 Fase 3: Gestión de Crisis
7.  Simula un conflicto: modifica la línea 1 de `README.md` en `main` y en `develop` con textos diferentes. Intenta hacer un merge y resuélvelo usando el editor de conflictos.
8.  **El Desastre:** Borra una rama que tenga commits importantes y recupérala usando `git reflog`. Documenta el hash que usaste en un archivo llamado `rescue.txt`.

## 🤖 Fase 4: DevOps & AI
9.  Configura una GitHub Action simple (puedes usar un template) que imprima "🚀 Pipeline exitoso" cada vez que se haga un push a `main`.
10. Usa una herramienta de IA (o simúlalo) para generar un mensaje de commit perfecto para un cambio que borre 10 archivos innecesarios.

## 🏁 Entrega
Sube todo a tu repositorio de GitHub y asegúrate de que el historial de commits sea una obra de arte lineal y descriptiva.

> "Un buen programador escribe código que los humanos entienden. Un maestro de Git escribe una historia que el equipo puede seguir."

