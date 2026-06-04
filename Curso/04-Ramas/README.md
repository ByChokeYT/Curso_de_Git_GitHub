![Banner](../../Recursos/Banners/04-ramas.png)

# Módulo 04: Gestión Maestra de Ramas (Merging Strategies)

¡Hola! Las ramas en Git son uno de los conceptos más poderosos pero que más confusión causan al inicio. Hoy vamos a desmitificarlas por completo usando una de las mejores analogías de la cultura pop.

---

## 🔬 La analogía del mundo real: El Multiverso y Líneas Temporales

Pensemos en películas como *Avengers: Endgame*, *Loki* o *Volver al Futuro*. Las ramas en Git funcionan exactamente como el **Multiverso**:

1.  **La Línea Temporal Sagrada (Rama `main`):**
    *   Es la realidad principal del proyecto. Es el código estable que está corriendo en producción y que tus clientes están usando en vivo.

2.  **Viajar en el tiempo y crear una realidad alterna (`git checkout -b feature/nueva`):**
    *   **En el Multiverso:** Viajas al pasado y creas un nexo o línea temporal alternativa. En esta nueva realidad, puedes hacer experimentos locos, desatar batallas o cambiar el curso de las cosas sin alterar en absoluto la Línea Temporal Sagrada.
    *   **En Git:** Creas una rama. Es súper rápido y ligero porque una rama en Git es solo un **puntero móvil** (un marcador) que apunta a un commit. No duplica tus archivos; solo apunta al mismo punto de inicio. Todo lo que comitees en esta rama se queda aislado del resto del mundo.

3.  **Restaurar la Línea Temporal Sagrada (`git merge` vs `git rebase`):**
    *   Una vez que tu experimento en la realidad alternativa funciona (por ejemplo, creaste el sistema de pagos), debes reincorporar esos cambios a la Línea Sagrada. Aquí es donde eliges tu estrategia:

```mermaid
graph TD
    subgraph Estrategia MERGE (Historial Completo)
        M1[Commit 1] --> M2[Commit 2]
        M2 --> MM[Commit de Merge]
        M2 --> F1[Feature 1]
        F1 --> F2[Feature 2]
        F2 --> MM
    end
    
    subgraph Estrategia REBASE (Historial Lineal)
        R1[Commit 1] --> R2[Commit 2]
        R2 --> RF1[Feature 1 Reubicada]
        RF1 --> RF2[Feature 2 Reubicada]
    end
```

---

## ⚙️ La Gran Batalla: git merge vs git rebase

¿Cómo quieres unir tus universos paralelos? Tienes dos caminos con filosofías diferentes:

### A. git merge (El integrador respetuoso)
Une las dos ramas creando un nuevo commit especial llamado **Merge Commit**.
*   **La analogía:** Es como firmar un acuerdo de paz entre dos dimensiones. Se conserva el registro exacto de que la dimensión alternativa existió y cuándo se fusionaron.
*   **Pro:** Conserva la historia real cronológica e intacta. Es extremadamente seguro y no destructivo.
*   **Contra:** Si tienes 10 desarrolladores creando ramas a diario, el historial visual de Git se convertirá en un enredo de líneas (un plato de espagueti).

### B. git rebase (El viajero del tiempo que reescribe la historia)
Mueve toda tu rama alternativa y la coloca justo encima del último commit de la rama principal, eliminando el pasado y reescribiendo la historia.
*   **La analogía:** Viajas al pasado con una máquina del tiempo y alteras los eventos para que parezca que tu rama alternativa siempre se escribió directamente sobre la rama principal, de forma lineal, sin bifurcaciones.
*   **Pro:** El historial queda perfectamente plano, limpio y fácil de leer.
*   **Contra (¡PELIGRO!):** **La Regla de Oro de Git:** *Nunca hagas rebase en ramas públicas*. Si subes una rama a GitHub y otros compañeros están trabajando en ella, hacer rebase les romperá el historial de commits y causará un caos de sincronización. Reescribir el pasado público está prohibido.

---

## 🧠 Pon a prueba tus conocimientos

<div class="module-quiz-card" data-module="Curso/04-Ramas/README.md"></div>

---

## 📝 Resumen Estructurado (Estilo Cornell)

*   **Ramas como Contextos:** Úsalas para cada nueva funcionalidad o corrección. Mantén la rama `main` sagrada y limpia.
*   **Merge vs Rebase:** Usa `rebase` en tus ramas locales para limpiar tu historial antes de hacer un Pull Request. Usa `merge` al integrar ramas compartidas para respetar el historial del equipo.
*   **Limpieza:** Una vez fusionada la rama, bórrala para no dejar punteros obsoletos en tu base de datos de Git.

---

## 💻 Laboratorio Práctico: ¡Pruébalo en la terminal virtual!

Abre la terminal de la WebApp y simula una fusión completa de líneas temporales mediante estos 9 pasos secuenciales:

1. **Viaja en el tiempo y crea una realidad alterna llamada `feature/login`:**
   ```bash
   git checkout -b feature/login
   ```
   *(Git creará la rama y te cambiará automáticamente a ella).*

2. **Crea el archivo principal para codificar el inicio de sesión en tu nueva realidad:**
   ```bash
   echo "Login base" > login.js
   ```
   *(Este cambio sólo existe temporalmente en esta rama).*

3. **Prepara el archivo de login recién creado:**
   ```bash
   git add login.js
   ```
   *(Agregamos el archivo a la preparación).*

4. **Confirma tu funcionalidad con una Polaroid (Commit) en la rama actual:**
   ```bash
   git commit -m "feat: base de login"
   ```
   *(El commit queda resguardado en la línea temporal de la rama).*

5. **Regresa a la Línea Temporal Sagrada (rama principal):**
   ```bash
   git checkout main
   ```
   *(Git te devolverá al canal principal de producción).*

6. **Comprueba el aislamiento entre realidades listando los archivos activos en `main`:**
   ```bash
   ls
   ```
   *(Verás que `login.js` no existe aquí. ¡Se mantiene intacto el aislamiento del multiverso!)*

7. **Fusiona e integra los cambios de la realidad de login en la rama principal:**
   ```bash
   git merge feature/login
   ```
   *(Git realizará una fusión rápida Fast-Forward uniendo ambas líneas de tiempo).*

8. **Verifica que la fusión fue exitosa listando los archivos nuevamente:**
   ```bash
   ls
   ```
   *(Ahora `login.js` figurará mágicamente en tu lista de archivos).*

9. **Examina el historial integrado de commits:**
   ```bash
   git log
   ```
   *(Observarás la secuencia de commits unificada reflejada en el log de Git).*