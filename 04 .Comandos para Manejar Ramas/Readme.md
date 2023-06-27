# Comandos para Manejar Ramas
## branch, checkout, merge

Si estás en la comodidad de tu hogar o en tu entorno de desarrollo, te invito a seguirme paso a paso en este emocionante recorrido por los comandos de `git branch`. Descubriremos cómo explorar ramas, crear nuevas, cambiar nombres y más. **¡Prepárate para sumergirte en el fascinante mundo de Git y llevar tu control de versiones al siguiente nivel!**
![portada](https://miro.medium.com/v2/resize:fit:801/1*DhagidpZutkaCmAZobmzDQ.png)

## 1. **git branch**: (RAMA)

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

## 2. **git checkout**: (CAMBIAR)

![img](https://static.javatpoint.com/tutorial/git/images/git-checkout.png)

 Este es también uno de los comandos Git más utilizados. Para trabajar en una rama, primero debe cambiarse a ella. Usamos `git checkout` principalmente para **cambiar** de una rama a otra. También podemos usarlo para verificar archivos y confirmaciones.
  
![img](https://media.geeksforgeeks.org/wp-content/uploads/20190901201805/465.png)

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
   
   Para cambiar a una confirmación específica (commit) en Git, puedes utilizar el comando `git checkout` seguido del identificador del commit al que deseas moverte. Aquí tienes cómo funciona y un ejemplo:

- Obtén el identificador del commit: Antes de utilizar el comando, necesitarás obtener el identificador del commit al que deseas cambiar. Puedes encontrar este identificador utilizando el comando `git log`, que muestra un historial de commits con sus respectivos identificadores.

-  Utiliza el comando `git checkout`: Una vez que tengas el identificador del commit al que deseas moverte, puedes utilizar el siguiente comando:

```bash
git checkout identificador_commit
```

   - Reemplaza **"identificador_commit"** con el hash o identificador único del commit al que deseas cambiar.

- Entendiendo cómo funciona: Al ejecutar el comando `git checkout` con el identificador del commit, Git cambiará tu repositorio a ese commit específico. Esto significa que tu directorio de trabajo se actualizará con los archivos y el estado tal como estaban en ese commit.

Es importante tener en cuenta que, al cambiar a un commit específico, estarás en un estado **"desconectado"** o "en modo de solo lectura". No podrás realizar cambios o realizar confirmaciones directamente en ese estado. Si deseas realizar cambios, deberás crear una nueva rama basada en ese commit utilizando el comando `git branch` y luego cambiar a esa nueva rama.

Ejemplo:
Supongamos que tienes el siguiente historial de commits:**(git log)**

```bash
commit abcdefg (HEAD)
Autor: Usuario
Fecha:   Mon Jan 1 00:00:00 2023 -0500

    Mensaje del commit A
    
commit 1234567
Autor: Usuario
Fecha:   Sun Dec 31 23:59:59 2022 -0500

    Mensaje del commit B
    
commit 9876543
Autor: Usuario
Fecha:   Sat Dec 30 12:00:00 2022 -0500

    Mensaje del commit C
```

Si deseas cambiar al commit con el identificador "1234567", puedes ejecutar el siguiente comando:

```bash
git checkout 1234567
```

Esto actualizará tu directorio de trabajo y tu repositorio para que coincidan con el estado en el commit "1234567".
Si deseas regresar al último commit y volver a la rama en la que estabas anteriormente, puedes utilizar el siguiente comando:

```bash
git switch -
```
Este comando te llevará de vuelta al último commit y restaurará la rama en la que estabas trabajando previamente. Mas adelante veremos como funciona mas profundo el comando **`git switch -`**.

**Recuperar un archivo específico de una confirmación anterior:**
Para recuperar un archivo específico de una confirmación anterior en un repositorio Git, puedes seguir los siguientes pasos:

1. Abre la línea de comandos o terminal en tu sistema.
2. Navega hasta el directorio del repositorio Git donde se encuentra el archivo que deseas recuperar.
3. Ejecuta el siguiente comando para ver el historial de confirmaciones:

   ```
   git log
   ```

   Esto mostrará una lista de las confirmaciones anteriores junto con sus identificadores únicos (hash) y los mensajes asociados.

4. Copia el identificador único (hash) de la confirmación específica que contiene el archivo que deseas recuperar.

5. Ejecuta el siguiente comando, reemplazando `<commit-hash>` con el hash de la confirmación que copiaste en el paso anterior y `<file-path>` con la ruta y nombre del archivo que deseas recuperar:

   ```
   git checkout <commit-hash> -- <file-path>
   ```

   Por ejemplo, si el hash de la confirmación es `abcdefg` y el archivo que deseas recuperar se encuentra en la raíz del repositorio, el comando se vería así:

   ```
   git checkout abcdefg -- archivo.txt
   ```

6. Git restaurará el archivo especificado tal como estaba en la confirmación seleccionada y lo colocará en tu directorio de trabajo actual.

Es importante tener en cuenta que al ejecutar este comando, se sobrescribirá el archivo actual en tu directorio de trabajo. Si deseas guardar una copia del archivo actual antes de recuperar el anterior, asegúrate de hacer una copia de seguridad antes de ejecutar el comando.

Recuerda que Git guarda el historial de versiones de tus archivos, por lo que puedes recuperar versiones anteriores en cualquier momento si están almacenadas en el repositorio.

>Asegúrate de comprender bien la funcionalidad específica que deseas utilizar y verifica la documentación de Git para obtener más detalles sobre cada caso de uso.

---

## 3. **git merge**:(FUNCIONAR O CONBINAR)

 Este comando se utiliza para fusionar cambios de una rama a otra. Combina los cambios de una rama en otra rama activa.

   - Para fusionar una rama en la rama actual:
     ```bash
     $ git merge `feature`
     ```



Git merge básicamente integra su rama de características **(feature branch)** "rama de funcionalidad" o "rama de características". Con todas sus confirmaciones en la rama dev (o master). 

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
>**Sugerencia:** asegúrate que tu rama de desarrollo tenga la última versión antes de fusionar las ramas, de lo contrario, puede enfrentar conflictos u otros problemas no deseados.

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--MEKaM3dY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/430Q2w473e2R/Image%25202018-04-30%2520at%25201.07.58%2520PM.png)

Cuando ejecutamos el comando `git merge`, estamos fusionando una rama con otra rama activa. Esto significa que los cambios de una rama se incorporarán a la otra rama. Aquí tienes algunos ejemplos de cómo se utiliza el comando `git merge`:

> Nota: Puedes utilizar una interfaz gráfica para ver los cambios en Git, como `git gui` o la herramienta de pago [GitKraken](https://www.gitkraken.com/download/windows64). Estas herramientas te permiten visualizar los cambios realizados en cada rama de Git y explorar su historial.

Espero que esta versión sea de tu agrado.

1. **Fusionar una rama específica en la rama actual:**
   ```bash
   git merge nombre-de-la-rama
   ```
   Este comando fusionará la rama especificada (`nombre-de-la-rama`) en la rama actual en la que te encuentras.

2. **Resolver conflictos de fusión:**
   Si hay conflictos entre las ramas al fusionar, Git te notificará sobre los conflictos y deberás resolverlos manualmente. 

   ```bash
   `git merge --continue
   ```

   Puedes utilizar una herramienta de resolución de conflictos o editar los archivos conflictivos directamente. Una vez que hayas resuelto los conflictos, puedes completar la fusión ejecutando.

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
5. **git merge --abort:**
    Imagina que estás en medio de una fusión y surgen conflictos que no puedes resolver en ese momento. Para cancelar la fusión y volver al estado anterior a la fusión, ejecuta el siguiente comando:

      ```bash
      git merge --abort
      ```
Esto revertirá cualquier cambio realizado durante la fusión y te devolverá al estado antes de comenzar la fusión.

Recuerda que al fusionar ramas, es posible que ocurran conflictos si los cambios en ambas ramas afectan las mismas líneas de código. Es importante revisar y resolver estos conflictos correctamente antes de completar la fusión.

[Dar Examen: 04 .Comandos para Manejar Ramas](https://forms.gle/TaTF9oBPbVHShdaD9)

[¡Buena Suerte En Tu Próxima Clase!](https://github.com/ByChokeYT/Curso_de_Git_GitHub/tree/main/05.%20Comandos%20para%20colaborar%20con%20otros%20desarrolladores)