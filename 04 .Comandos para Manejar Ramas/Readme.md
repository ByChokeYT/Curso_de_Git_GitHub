# Comandos para Manejar Ramas
## branch, checkout, merge

Si estás en la comodidad de tu hogar o en tu entorno de desarrollo, te invito a seguirme paso a paso en este emocionante recorrido por los comandos de `git branch`. Descubriremos cómo explorar ramas, crear nuevas, cambiar nombres y más. **¡Prepárate para sumergirte en el fascinante mundo de Git y llevar tu control de versiones al siguiente nivel!**
![portada](https://miro.medium.com/v2/resize:fit:801/1*DhagidpZutkaCmAZobmzDQ.png)

## 1. **git branch**:

 Cuando ejecutas el comando `git branch` sin ningún argumento, muestra una lista de las ramas locales en tu repositorio y resalta la rama actual con un asterisco **(*)** antes del nombre de la rama. 

- **Ver todas las ramas locales:**
   ```
   git branch
   ```
   ```bash
      git branch
      orine
     * main
      Master
      Develop
      Feature
      Feature II
    ```
   Esto muestra una lista de todas las ramas locales en tu repositorio y resalta la rama actual **(*)**.

- **Crear una nueva rama:**
   ```bash
   git branch "Nombre-de-la-nueva-rama"
   ```
   Ejemplo:

   ```bash
   git branch MASTER
   ```
   Esto crea una nueva rama llamada 'MASTER' basada en la rama actual. Sin embargo, ten en cuenta que la nueva rama 'MASTER' no se activará automáticamente, permanecerás en la rama actual.

    Puedes utilizar el comando git branch para ver la lista de ramas locales en tu repositorio y confirmar la creación de la nueva rama 'MASTER`.


- **Cambiar el nombre de una rama existente:**
Si deseas cambiar el nombre de la rama actual, debes utilizar el comando git `branch -m` seguido del nuevo nombre de la rama.
  ```bash
   git branch -m nuevo-nombre-de-rama
   ```
   Reemplaza "nuevo-nombre-de-rama" con el nombre que deseas asignar a la rama actual. 

- **Eliminar una rama:**
   ```bash
   git branch -d rama-a-eliminar
   ```
   Esto elimina la rama local llamada "rama-a-eliminar". Asegúrate de haber fusionado o empujado los cambios de la rama antes de eliminarla.

    Recuerda que el comando `git branch` se utiliza principalmente para trabajar con las ramas locales en tu repositorio. 

- El comando `git branch -a` se utiliza para mostrar todas las ramas disponibles en el repositorio, tanto las ramas locales como las ramas remotas. La opción **-a** significa **"all" (todos)**, lo que indica que se deben incluir tanto las ramas locales como las remotas en la lista.

```bash
$ git branch -a
  develop
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/develop
  remotes/origin/feature
  remotes/origin/master
```

- El comando `git branch -r` se utiliza para mostrar las ramas remotas disponibles en el repositorio Git. La opción -r significa **"remotes"** y se utiliza para filtrar y mostrar solo las ramas remotas en lugar de las ramas locales.
```bash
$ git branch -r
  origin/develop
  origin/feature
  origin/master
```


-

Puedes agregar opciones adicionales para realizar diferentes operaciones, como renombrar una rama, forzar la eliminación de una rama o verificar si hay ramas remotas.

![img](https://i.ytimg.com/vi/Bg8tiOLZw4A/maxresdefault.jpg)

 
Las ramas son muy importantes en el mundo de git. Mediante el uso de ramas, varios desarrolladores pueden trabajar en paralelo en el mismo proyecto simultáneamente. Podemos usar el comando `git branch` para crear, enumerar y eliminar ramas.

---

## 2. **git checkout**:

 Este comando se utiliza para cambiar entre ramas y restaurar archivos. Permite moverse a una rama existente y deshacer cambios locales.

   - Para cambiar a una rama existente:
     ```bash
     $ git checkout develop
     Switched to branch 'develop'
     ```

   - Para crear una nueva rama y cambiar a ella:
     ```bash
     $ git checkout -b feature
     Switched to a new branch 'feature'
     ```

   - Para descartar cambios locales en un archivo:
     ```bash
     $ git checkout archivo.txt
     ```

![img](https://media.geeksforgeeks.org/wp-content/uploads/20190901201805/465.png)

Este es también uno de los comandos Git más utilizados. Para trabajar en una rama, primero debe cambiarse a ella. Usamos git checkout principalmente para cambiar de una rama a otra. También podemos usarlo para verificar archivos y confirmaciones.

![img](https://static.javatpoint.com/tutorial/git/images/git-checkout.png)

El comando `git checkout` se utiliza principalmente para cambiar de rama en Git. Aquí tienes algunos ejemplos de cómo se utiliza:

1. **Cambiar a una rama existente:**
   ```
   git checkout nombre-de-la-rama
   ```
   Esto cambia tu directorio de trabajo a la rama especificada. Por ejemplo, `git checkout develop` te cambiaría a la rama llamada "develop".

2. **Crear una nueva rama y cambiar a ella:**
   ```
   git checkout -b nueva-rama
   ```
   Esto crea una nueva rama llamada "nueva-rama" basada en la rama actual y cambia a ella. Es equivalente a ejecutar `git branch nueva-rama` y luego `git checkout nueva-rama` por separado.

3. **Cambiar a una confirmación específica (commit):**
   ```
   git checkout código-de-confirmación
   ```
   Esto te permite revisar una confirmación anterior en tu historial de Git. Puedes especificar el código de confirmación completo o solo los primeros caracteres. Por ejemplo, `git checkout abc123` te llevaría al commit con el código "abc123".

4. **Recuperar un archivo específico de una confirmación anterior:**
   ```
   git checkout código-de-confirmación -- ruta/al/archivo
   ```
   Esto te permite recuperar un archivo específico de una confirmación anterior sin cambiar de rama. Puedes especificar la ruta al archivo que deseas recuperar y el código de confirmación.

Recuerda que el comando `git checkout` puede tener diferentes usos dependiendo de la situación, como cambiar de rama, revisar confirmaciones anteriores o recuperar archivos.

Asegúrate de comprender bien la funcionalidad específica que deseas utilizar y verifica la documentación de Git para obtener más detalles sobre cada caso de uso.

---

## 3. **git merge**:

 Este comando se utiliza para fusionar cambios de una rama a otra. Combina los cambios de una rama en otra rama activa.

   - Para fusionar una rama en la rama actual:
     ```bash
     $ git merge feature
     ```

![img](https://media.geeksforgeeks.org/wp-content/uploads/20190901201805/465.png)

Git merge básicamente integra su rama de características **(feature branch)** con todas sus confirmaciones en la rama dev (o master). 

Es importante recordar que primero debes estar en la rama específica que deseas fusionar con tu rama de características.

Por ejemplo, cuando desees fusionar tu rama de características en la rama dev:

Primero debes cambiar a la rama dev:
```bash
git checkout dev
Antes de hacer la fusión, debes actualizar la rama de desarrollo local:
git fetch
Finalmente, puedes hacer la fusión:
git merge <branch-name>
```
**Sugerencia:** asegúrate que tu rama de desarrollo tenga la última versión antes de fusionar las ramas, de lo contrario, puede enfrentar conflictos u otros problemas no deseados.

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--MEKaM3dY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/430Q2w473e2R/Image%25202018-04-30%2520at%25201.07.58%2520PM.png)

Cuando ejecutamos el comando `git merge`, estamos fusionando una rama con otra rama activa. Esto significa que los cambios de una rama se incorporarán a la otra rama. Aquí tienes algunos ejemplos de cómo se utiliza el comando `git merge`:

1. **Fusionar una rama específica en la rama actual:**
   ```bash
   git merge nombre-de-la-rama
   ```
   Este comando fusionará la rama especificada (`nombre-de-la-rama`) en la rama actual en la que te encuentras.

2. **Resolver conflictos de fusión:**
   Si hay conflictos entre las ramas al fusionar, Git te notificará sobre los conflictos y deberás resolverlos manualmente. Puedes utilizar una herramienta de resolución de conflictos o editar los archivos conflictivos directamente. Una vez que hayas resuelto los conflictos, puedes completar la fusión ejecutando `git merge --continue`.

3. **Fusionar una rama y crear un nuevo commit de fusión:**
   ```bash
   git merge --no-ff nombre-de-la-rama
   ```
   Este comando fusionará la rama especificada y creará un nuevo commit de fusión, incluso si no hay conflictos. Esto es útil para mantener un historial de fusiones más claro y registrar explícitamente las fusiones realizadas.

4. **Fusionar una rama remota:**
   ```bash
   git merge origin/nombre-de-la-rama
   ```
   Si estás trabajando con ramas remotas, puedes fusionar una rama remota en tu rama local utilizando este comando. Reemplaza `nombre-de-la-rama` con el nombre de la rama remota que deseas fusionar.

Recuerda que al fusionar ramas, es posible que ocurran conflictos si los cambios en ambas ramas afectan las mismas líneas de código. Es importante revisar y resolver estos conflictos correctamente antes de completar la fusión.

[¡Buena Suerte En Tu Próxima Clase!]()