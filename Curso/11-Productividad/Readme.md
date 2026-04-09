# Módulo 06: Productividad de Élite (Comandos de Alta Escala)

En proyectos de gran escala (Monorepos o sistemas con millones de archivos), los comandos básicos son ineficientes. Aquí es donde entra la ingeniería de rendimiento aplicada a Git.

---

## 🔬 Git Worktrees: Multitarea Real

¿Alguna vez has tenido que cambiar de rama a mitad de un trabajo pero no querías hacer `stash`?
**Git Worktrees** te permite tener múltiples ramas del mismo repositorio extraídas en carpetas diferentes simultáneamente.

```bash
# Crear un nuevo worktree para un bugfix urgente
git worktree add ../bugfix-urgente hotfix-branch
```
-   **Ventaja:** Puedes compilar ambas ramas en paralelo y comparar resultados en tiempo real sin cambiar el estado de tu carpeta principal.

---

## ⚙️ Búsqueda Binaria de Errores: git bisect

Cuando un sistema falla y no sabes qué commit introdujo el error, **git bisect** usa el algoritmo de búsqueda binaria para encontrar al culpable en segundos.

1.  `git bisect start`
2.  `git bisect bad` (Este estado está roto)
3.  `git bisect good <hash-antiguo>` (Este estado funcionaba)
4.  Git te llevará al commit medio. Pruebas y marcas como `good` o `bad`.
5.  **Resultado:** En log(n) pasos, Git te señala el commit exacto del error.

---

## 🔬 Sparse Checkout: Ingeniería de Monorepos

Si trabajas en un repositorio gigante pero solo necesitas una carpeta específica, no descargues todo.
**Sparse Checkout** le dice a Git que solo sincronice los archivos que realmente vas a usar, ahorrando gigabytes de disco y ancho de banda.

```bash
git sparse-checkout set folder/subfolder
```

---

## ## Resumen (Ingeniería de Sistemas)

1.  **Paralelismo Local:** Usa `worktrees` para flujos de trabajo de revisión de código complejos.
2.  **Depuración Algorítmica:** No busques errores manualmente; deja que `bisect` haga el trabajo matemático.
3.  **Eficiencia de Recursos:** En la nube y en monorepos, el `sparse-checkout` es vital para la rapidez de los runners de CI y el espacio en disco local.

[Laboratorio de Productividad](https://git-scm.com/docs/git-worktree)
