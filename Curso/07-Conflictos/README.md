![Banner](../../Recursos/Banners/07-conflictos.png)

# Módulo 07: Control de Versiones y Gestión de Conflictos

¡Hola! En esta lección abordaremos el tema que más pánico causa a los desarrolladores novatos: **los conflictos de fusión**. Hoy vas a perderle el miedo por completo al entender por qué ocurren y cómo solucionarlos paso a paso como un profesional.

---

## ⚡ La analogía del mundo real: El Calendario de la Nevera

Imagínate que vives en un apartamento compartido con un **Roommate**. En la cocina hay un **calendario de pizarra en la nevera** donde organizan sus actividades:

1.  **Divergencia de opiniones:**
    *   Tú sales de tu habitación por la mañana y en el recuadro del "Viernes 15" escribes con marcador: *"Cena con amigos"* (`echo "Cena" > viernes.txt` y commit en tu rama).
    *   Al mismo tiempo, tu roommate entra a la cocina y, en su propia versión del calendario del Viernes 15, escribe: *"Noche de estudio"* (`echo "Estudio" > viernes.txt` y commit en su rama).
    *   Ambos intentan actualizar la nevera común (hacer merge de las ramas).

2.  **El Conflicto:**
    *   La nevera no es inteligente, no sabe quién tiene la prioridad ni puede combinar mágicamente "Cena" y "Estudio" en el mismo espacio sin tu ayuda.
    *   En lugar de arruinar el calendario borrando uno de los dos planes, Git detiene el proceso por completo y escribe unas marcas en el papel para llamar la atención de ambos:

```text
<<<<<<< HEAD (Tu cambio en la rama actual)
Cena con amigos
=======
Noche de estudio
>>>>>>> conflicto (El cambio que viene de la otra rama)
```

---

## 🔍 Anatomía y Solución de un Conflicto

Cuando Git se detiene por un conflicto, bloquea los commits automáticos. Para solucionarlo, debes seguir estos pasos lógicos de ingeniería:

1.  **Analizar:** Lee el archivo con conflicto. Verás las marcas `<<<<<<<`, `=======` y `>>>>>>>`. Habla con tu compañero (o analiza tu código) para decidir cuál es el cambio correcto.
2.  **Limpiar:** Edita el archivo en tu editor de código. Elige una de las opciones:
    *   Quedarte con tu versión (borras lo de abajo).
    *   Quedarte con la versión de tu roommate (borras lo de arriba).
    *   Combinar ambas (escribes *"Cena y luego Noche de estudio"*).
    *   **¡Muy importante!** Tienes que borrar físicamente las marcas `<<<<<<<`, `=======` y `>>>>>>>` del archivo.
3.  **Confirmar resolución (git add):** Ejecuta `git add <archivo>` para avisarle a Git: *"Ya resolvimos el conflicto en este archivo"*.
4.  **Cerrar el Merge (git commit):** Ejecuta `git commit` sin el parámetro `-m` (o con él si prefieres) para finalizar la fusión.

### El Botón de Pánico
Si estás en medio de un conflicto complejo, te da pánico y quieres volver al pasado como si nada hubiera pasado, puedes abortar el merge de forma segura con:
```bash
git merge --abort
```

---

## 🧠 Pon a prueba tus conocimientos

<div class="module-quiz-card" data-module="Curso/07-Conflictos/README.md"></div>

---

## 📝 Resumen Estructurado (Estilo Cornell)

*   **El Conflicto no es un error:** Es simplemente una advertencia de seguridad de Git para proteger tu código de sobrescrituras accidentales.
*   **Resolución determinista:** Nunca dejes que un editor resuelva conflictos automáticamente si no entiendes qué líneas se están conservando.
*   **Prevención:** La mejor forma de evitar conflictos gigantes es trabajar en ramas de vida corta y hacer integraciones (`git pull` y `git merge`) frecuentemente con la rama `main`.

---

## 💻 Laboratorio Práctico: ¡Pruébalo en la terminal virtual!

Abre la terminal de la WebApp y sigue estrictamente estos 13 pasos para generar y resolver un conflicto real:

1. **Crea el archivo inicial en la rama `main`:**
   ```bash
   echo "Texto A" > archivo.txt
   ```
   *(Este archivo servirá como punto de divergencia).*

2. **Prepara el archivo para registrarlo:**
   ```bash
   git add archivo.txt
   ```
   *(Lo colocamos en el Staging Area).*

3. **Haz el primer commit de confirmación en `main`:**
   ```bash
   git commit -m "docs: version A"
   ```
   *(Establecemos la base del proyecto).*

4. **Crea una nueva rama llamada `conflicto` y cámbiate a ella:**
   ```bash
   git checkout -b conflicto
   ```
   *(Abrimos una línea de tiempo alterna para simular los cambios de tu compañero).*

5. **Sobrescribe el archivo en tu rama alternativa con un contenido distinto:**
   ```bash
   echo "Texto B" > archivo.txt
   ```
   *(Este es el cambio divergente del roommate).*

6. **Prepara el archivo modificado:**
   ```bash
   git add archivo.txt
   ```
   *(Colocamos en la zona de preparación de la rama).*

7. **Confirma la modificación en la rama `conflicto`:**
   ```bash
   git commit -m "docs: version B"
   ```
   *(Tomamos la Polaroid correspondiente en la rama alterna).*

8. **Regresa a la Línea Temporal Sagrada (rama principal):**
   ```bash
   git checkout main
   ```
   *(Volvemos al canal principal de producción).*

9. **Intenta integrar la rama `conflicto` en `main` para desatar la colisión:**
   ```bash
   git merge conflicto
   ```
   *(Git fallará automáticamente, indicando que hay un conflicto en `archivo.txt` y marcando el archivo).*

10. **Resuelve manualmente el conflicto sobrescribiendo el archivo con la combinación final acordada:**
    ```bash
    echo "Texto Final Combinado" > archivo.txt
    ```
    *(Consolidamos ambos planes limpiando las marcas conflictivas).*

11. **Agrega el archivo resuelto para informarle a Git que la colisión se ha solucionado:**
    ```bash
    git add archivo.txt
    ```
    *(Marcamos el archivo como resuelto).*

12. **Haz el commit de cierre de fusión:**
    ```bash
    git commit -m "merge: resolver conflicto"
    ```
    *(Finalizamos y grabamos el commit especial de fusión).*

13. **Examina el historial para verificar el merge commit de resolución:**
    ```bash
    git log
    ```
    *(Verás el árbol completo de cambios y la confirmación del merge registrado).*
