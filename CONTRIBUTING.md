# 🤝 Guía de Contribución

¡Gracias por querer mejorar este curso! Toda ayuda es bienvenida, desde corregir un typo hasta agregar módulos enteros.

---

## 📋 Antes de empezar

1. **Haz un Fork** del repositorio.
2. **Crea una rama** con un nombre descriptivo:
   ```bash
   git checkout -b fix/typo-modulo-3
   # o
   git checkout -b feat/modulo-nuevo-hooks
   ```
3. Trabaja en tu cambio y haz commits usando **Conventional Commits**:
   ```
   fix: corregir typo en Módulo 3
   feat: agregar módulo sobre Git Hooks
   docs: mejorar descripción del Examen Final
   style: mejorar estilos del sidebar
   ```
4. **Abre un Pull Request** hacia `main` con una descripción clara de qué cambiaste y por qué.

---

## 📁 Estructura del proyecto

```
Curso_de_Git_GitHub/
├── .github/workflows/   → CI/CD con GitHub Actions
├── Curso/               → Contenido de cada módulo (Readme.md por carpeta)
│   ├── 01-Intro/
│   ├── 02-Instalacion/
│   └── ...
├── Recursos/            → Imágenes, GIFs, portadas
├── assets/
│   ├── css/styles.css   → Estilos de la WebApp
│   └── js/
│       ├── script.js    → Lógica principal
│       └── data.js      → GENERADO AUTOMÁTICAMENTE (no editar)
├── index.html           → WebApp principal
├── generate_data.py     → Script que genera data.js
├── Examen-Final.md      → Desafío de certificación
└── README.md
```

---

## ✏️ ¿Cómo agregar o mejorar un módulo?

Cada módulo es una carpeta dentro de `/Curso/` con un archivo `Readme.md`. Sigue esta estructura:

```markdown
# 🏷️ Título del Módulo

Breve descripción del tema.

---

## Conceptos Clave

...

## Comandos

```bash
git ejemplo --flag
```

## Ejercicio Práctico

...
```

Después de modificar cualquier `Readme.md`, el CI/CD regenerará `data.js` automáticamente. Si quieres probarlo localmente:

```bash
python generate_data.py
```

---

## 🐛 Reportar un bug

Abre un [Issue](https://github.com/ByChokeYT/Curso_de_Git_GitHub/issues) con:

- **Título claro**: `Bug: el buscador no resalta términos con tildes`
- **Pasos para reproducir**
- **Comportamiento esperado vs actual**
- **Screenshots** si aplica

---

## 💡 Proponer una mejora

También puedes abrir un Issue con el tag `enhancement` para sugerir nuevas funcionalidades, módulos o recursos.

---

## ✅ Checklist antes de hacer un PR

- [ ] Mis commits siguen el formato Conventional Commits
- [ ] Probé los cambios localmente
- [ ] Si agregué un módulo, está bien enlazado en el sidebar de `index.html`
- [ ] No modifiqué `assets/js/data.js` manualmente (se genera solo)

---

Gracias por contribuir 🙌 — **ByChokeYT**
