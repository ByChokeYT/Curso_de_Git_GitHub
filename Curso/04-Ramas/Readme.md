# Módulo 03: Gestión Maestra de Ramas (Merging Strategies)

Las ramas son el pilar fundamental del desarrollo paralelo. En ingeniería, no solo se trata de "crear ramas", sino de entender cómo reintegrarlas al flujo principal con integridad.

---

## 🔬 Anatomía de una Rama

En Git, una rama no es una copia de archivos; es simplemente un **puntero móvil** a un commit específico. Por eso crear una rama es instantáneo y no ocupa espacio.

### Comandos de Movimiento Modernos
Olvídate del viejo `checkout`. Usa los nuevos comandos de Git (+ v2.23):
-   `git switch <branch-name>`: Para cambiar de rama.
-   `git restore --source <branch> <file>`: Para traer un archivo específico de otra rama.

---

## ⚙️ La Gran Batalla: Merge vs Rebase

Esta es la decisión arquitectónica más importante en el día a día de un ingeniero de sistemas.

### git merge (La Historia Real)
Crea un **Merge Commit** que une las dos historias.
-   **Pros:** Conserva la historia cronológica exacta. Es no-destructivo.
-   **Contras:** El historial puede volverse un "plato de espagueti" si hay muchas ramas.

### git rebase (La Historia Limpia)
Mueve la base de tu rama al final de la rama objetivo, re-escribiendo los commits.
-   **Pros:** Mantienes un historial lineal y limpio.
-   **Contras:** **¡PELIGRO!** Nunca hagas rebase en ramas públicas. Reescribir la historia en un servidor compartido romperá el trabajo de tus compañeros.

---

## ## Resumen (Ingeniería de Sistemas)

1.  **Ramas como Contextos:** Úsalas para aislar experimentos, features o bugs. Nunca trabajes directamente sobre `main` en proyectos serios.
2.  **Estrategia de Equipo:** Define una política de integración. ¿Usamos `merge --no-ff` para ver el bulto de la rama o `rebase` para limpieza total?
3.  **Higiene de Ramas:** Borra las ramas locales y remotas una vez integradas para mantener el sistema de control de versiones ligero.

## 💻 Laboratorio Práctico: Paso a Paso

1. **Crea y salta a una nueva rama:**
   ```bash
   git checkout -b feature/login
   ```
2. **Haz un commit en la nueva rama:**
   ```bash
   echo "Lógica de Login" > login.js
   git add .
   git commit -m "feat: crear base de login"
   ```
3. **Vuelve a main y fusiona (merge):**
   ```bash
   git checkout main
   git merge feature/login
   ```

---

[Examen: Módulo 04 - Manejo de Ramas](https://forms.gle/TaTF9oBPbVHShdaD9)