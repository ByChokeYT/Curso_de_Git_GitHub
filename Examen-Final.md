# 🏆 Examen Final de Certificación — Git & GitHub Master

> **Simula un día real como Desarrollador Senior.**
> Este examen no es una lista de comandos — es un escenario de trabajo real donde deberás demostrar todo lo aprendido.

---

## ⏱️ Tiempo estimado: 2–3 horas

---

## 🛠️ Fase 1 — Configuración de Infraestructura

- [ ] Crea un repositorio en GitHub llamado `git-masterclass-<tu-nombre>`.
- [ ] Agrega un `.gitignore` profesional para tu lenguaje favorito (Node, Python, Go, etc.). Puedes generarlo en [gitignore.io](https://www.toptal.com/developers/gitignore).
- [ ] Configura una **regla de protección de rama** en GitHub para que nadie pueda hacer push directo a `main`. Documenta la configuración en un commit.

---

## 🚀 Fase 2 — Flujo de Trabajo Profesional

- [ ] Crea las ramas `develop` y `feature/auth`.
- [ ] En `feature/auth`, realiza **3 commits** simulando la implementación de un login. Usa Conventional Commits:
  ```
  feat(auth): add login form structure
  feat(auth): add JWT validation logic
  test(auth): add unit tests for login
  ```
- [ ] Haz un **Interactive Rebase** para comprimir los 3 commits en uno solo limpio:
  ```bash
  git rebase -i HEAD~3
  ```

---

## 💥 Fase 3 — Gestión de Crisis

- [ ] **Simula un conflicto**: modifica la línea 1 de `README.md` en `main` con un texto diferente al de `develop`. Intenta hacer el merge y resuélvelo manualmente.
- [ ] **El Desastre**: borra una rama que tenga commits importantes. Recupérala usando `git reflog`. Documenta el hash del commit recuperado en un archivo llamado `rescue.txt`:
  ```
  Hash recuperado: abc1234
  Comando usado: git checkout -b rama-recuperada abc1234
  ```

---

## 🤖 Fase 4 — DevOps & AI

- [ ] Configura una **GitHub Action** que imprima `🚀 Pipeline exitoso` en cada push a `main`. Puedes partir de este template:
  ```yaml
  name: CI
  on:
    push:
      branches: [main]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - run: echo "🚀 Pipeline exitoso"
  ```
- [ ] Usa una herramienta de IA (ChatGPT, GitHub Copilot, etc.) para generar un mensaje de commit semántico para un cambio que elimine 10 archivos innecesarios. Documenta el resultado en un archivo `ai-commit.md`.

---

## 🏁 Criterios de Entrega

Al terminar, sube todo a tu repositorio público y verifica que:

- El historial de commits es **lineal y descriptivo**
- Los mensajes siguen el formato **Conventional Commits**
- El archivo `rescue.txt` tiene el hash correcto
- La GitHub Action está funcionando (verde en la pestaña Actions)

Comparte el link de tu repo en el [Discord](https://discord.gg/akHPY7EbJW) para recibir feedback. 🎉

---

> *"Un buen programador escribe código que los humanos entienden. Un maestro de Git escribe una historia que el equipo puede seguir."*
