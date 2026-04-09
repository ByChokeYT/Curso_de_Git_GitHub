# Módulo 02 (Part 2): Commits Semánticos y Calidad de Historial

Un commit no es un "guardado", es una **unidad de cambio lógica**. En equipos de élite, los mensajes de commit son la documentación más importante del sistema.

---

## 🔬 Commits de Ingeniería: Mensajes Semánticos

Seguimos el estándar de **Conventional Commits** para que el historial sea legible por máquinas y humanos.

### Estructura de un Commit Profesional
```text
tipo(alcance): descripción breve y clara

Cuerpo opcional detallando el PORQUÉ del cambio.
```

### Tipos de Commits Comunes
-   `feat`: Nueva funcionalidad.
-   `fix`: Solución de un error.
-   `docs`: Cambios en la documentación.
-   `refactor`: Cambio en el código que ni arregla un bug ni añade una función.
-   `chore`: Tareas de mantenimiento (build, dependencias).

---

## ⚙️ Reparando el Pasado: Amend, Fixup y Squash

Los ingenieros cometen errores, pero Git nos permite corregirlos antes de que lleguen al servidor central.

### Modificar el último commit (`--amend`)
Si olvidaste añadir un archivo o te equivocaste en el mensaje:
```bash
git add archivo_olvidado
git commit --amend --no-edit
```

### El Arte del Fixup
Si tienes un commit pequeño que solo arregla algo del commit anterior:
```bash
git commit --fixup <HASH_DEL_COMMIT_PADRE>
# Luego se limpia con un rebase interactivo
```

---

## ## Resumen (Ingeniería de Sistemas)

1.  **Atomicidad:** Cada commit debe resolver UNA sola cosa. Si haces muchas cosas, el historial se vuelve imposible de depurar.
2.  **Mensajes Explicativos:** El mensaje debe explicar el *qué* y el cuerpo el *por qué*. El código ya dice el *cómo*.
3.  **Higiene del Historial:** Usa `amend` y `fixup` para que tu historia parezca impecable antes de compartirla con el equipo.

[Examen: Módulo 03 - Commits de Calidad](https://forms.gle/Q2N95DmwXKKRKbTi8)
