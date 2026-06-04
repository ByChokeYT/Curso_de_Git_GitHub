![Banner](../../Recursos/Banners/03-comandos.png)

# Módulo 03: Commits Semánticos y Calidad de Historial

¡Hola! En esta clase nos enfocaremos en la comunicación. En el software profesional, los commits no son solo copias de seguridad de "por si se daña la máquina". **Un commit es un documento histórico**. Es la forma en la que le hablas a tu equipo en el futuro.

---

## 🔬 La analogía del mundo real: Los Párrafos de un Libro

Imagínate que estás writing una **Novela**. Si escribes un libro sin separar las ideas en capítulos, párrafos o puntuación, el lector terminará con dolor de cabeza. Los commits son idénticos:

1.  **Commits Atómicos (Un solo tema por párrafo):**
    *   **Mal commit (Sin atomicidad):** Escribes un párrafo que habla de cómo tu protagonista toma café, luego de repente hablas de una batalla en el espacio, y terminas explicando una receta de pastel de manzana. Si el editor del libro te pide cambiar la batalla espacial, ¡tendrá que recortar y reescribir todo el párrafo!
    *   **Buen commit (Atómico):** Un commit debe realizar **una sola tarea lógica**. Si creas el botón de login, haces commit. Si arreglas un bug en la base de datos, haces otro commit. Así, si algo sale mal, puedes revertir o auditar ese cambio específico sin destruir el resto de tu trabajo.

2.  **Conventional Commits (El Título de los Capítulos):**
    *   Para que cualquiera que lea la portada del libro sepa de qué trata, usamos un formato estándar. Los tipos de commits le dicen al lector qué esperar:
        *   `feat(auth): add google login` ➔ Nueva página o característica (Capítulo Nuevo).
        *   `fix(database): repair connection timeout` ➔ Corrección de un error (Corrección de Ortografía).
        *   `docs(readme): update setup instructions` ➔ Solo cambios en la documentación.
        *   `style(navbar): adjust logo spacing` ➔ Estética, colores y diseño sin tocar código lógico.

---

## ⚙️ Modificar el Pasado: El Corrector Líquido (`--amend`)

A veces cometemos errores justo después de guardar la Polaroid o cerrar la caja de envíos. Git nos da un **corrector líquido** (liquid paper) para enmendar nuestro último error antes de enviarlo al servidor central.

*   **¿Olvidaste un archivo o escribiste mal el mensaje?**
    Prepara el archivo olvidado con `git add` y luego ejecuta:
    ```bash
    git commit --amend -m "mensaje de commit corregido"
    ```
    Esto reemplaza por completo el último commit con uno nuevo que tiene los cambios agrupados y el mensaje corregido. ¡Como si el error nunca hubiera existido!

---

## 🧠 Pon a prueba tus conocimientos

<div class="module-quiz-card" data-module="Curso/03-Comandos-Basicos/README.md"></div>

---

## 📝 Resumen Estructurado (Estilo Cornell)

*   **Mensajes Semánticos:** Usa siempre el formato `tipo(ámbito): descripción`. Facilita que las herramientas de CI/CD autogeneren el historial de versiones (Changelogs).
*   **Atomicidad:** Cada commit debe ser un paso lógico. Si el commit requiere la palabra "Y" en su descripción, probablemente debas dividirlo en varios.
*   **Higiene del Historial:** Usa `amend` para limpiar tus errores locales antes de compartirlos en GitHub.

---

## 💻 Laboratorio Práctico: ¡Pruébalo en la terminal virtual!

Abre la consola interactiva e interactúa con el historial siguiendo estos 8 pasos secuenciales para aprender a enmendar commits y usar el operador `>>`:

1. **Anexa nueva información al archivo `index.txt` preexistente en tu espacio de trabajo:**
   ```bash
   echo "Actualizacion" >> index.txt
   ```
   *(El operador `>>` agrega el texto al final del archivo sin borrar su contenido inicial "Archivo index base.").*

2. **Revisa el estado del repositorio para notar el cambio:**
   ```bash
   git status
   ```
   *(Verás que Git identifica `index.txt` como modificado de manera correcta).*

3. **Coloca el archivo modificado en la zona de preparación (Staging Area):**
   ```bash
   git add index.txt
   ```
   *(Preparamos la caja para sellarla).*

4. **Haz una confirmación con un mensaje que tenga errores o sea impreciso:**
   ```bash
   git commit -m "docs: mensaje incorrecto"
   ```
   *(Hemos tomado la Polaroid, pero nos percatamos de que el mensaje no cumple las buenas prácticas de Conventional Commits).*

5. **Anexa una corrección de último minuto directamente al archivo:**
   ```bash
   echo "Correccion extra" >> index.txt
   ```
   *(Se añade más contenido que debió formar parte del commit original).*

6. **Prepara los nuevos cambios en el Staging Area:**
   ```bash
   git add index.txt
   ```
   *(Agregamos la corrección a la caja).*

7. **Aplica el corrector líquido (`--amend`) para modificar el último commit y su mensaje:**
   ```bash
   git commit --amend -m "docs(estudio): notas completas corregidas"
   ```
   *(Git reescribirá la Polaroid de forma transparente fusionando todos los cambios recientes).*

8. **Comprueba el historial final para verificar que se mantiene limpio y con un solo commit corregido:**
   ```bash
   git log
   ```
   *(Observarás un único commit pulcro y semántico en la historia, sin rastro del error previo).*
