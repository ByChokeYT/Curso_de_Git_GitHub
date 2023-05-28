# init, clone, add, commit, status, log etc.

sin embargo, hay algunos comandos que se usan con más frecuencia (algunos a diario). Gracias a ello, en esta publicación compartiré y explicaré los 10 comandos Git más utilizados que todo desarrollador debe conocer.

Nota: Para comprender este artículo, debes conocer los conceptos básicos de Git.

## 1. **git init**:
 Este comando se utiliza para crear un nuevo repositorio Git en un directorio local. Crea un nuevo subdirectorio oculto llamado ".git" que contiene todos los archivos necesarios para el funcionamiento de Git.

   Ejemplo:

   ```bash
   $ git init
   Initialized empty Git repository in /path/to/repository
   ```

---

## 2.**git clone**: 
Este comando se utiliza para crear una copia local de un repositorio remoto. Descarga todos los archivos y el historial de commits del repositorio remoto al directorio local.


   ```bash
   $ git clone https://github.com/usuario/repo.git
   Cloning into 'repo'...
   remote: Enumerating objects: 100, done.
   remote: Total 100 (delta 0), reused 0 (delta 0), pack-reused 100
   Receiving objects: 100% (100/100), done.
   Resolving deltas: 100% (30/30), done.
   ```

Por ejemplo, si queremos descargar un proyecto de Github, todo lo que tenemos que hacer es hacer clic en el botón verde (clonar o descargar), copiar la URL en el cuadro y pegarlo después del comando git clone que he mostrado en la esquina superior derecha.

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-1.png)

Esto hará una copia del proyecto en tu espacio de trabajo local para que puedas comenzar a trabajar con él.

---

## 3. **git add**: 
Este comando se utiliza para agregar cambios o nuevos archivos al área de preparación (staging area) de Git. Prepara los archivos para ser incluidos en el próximo commit.

   Ejemplo:

   ```bash
   $ git add archivo.txt         # Agregar un archivo específico
   $ git add carpeta/            # Agregar todos los archivos en una carpeta
   $ git add .                   # Agregar todos los archivos y cambios nuevos
   ```
Necesitamos usar el comando `git add .` para incluir los cambios de un archivo(s) en nuestro próximo commit.

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-3.png)

**importante:** el comando git add no cambia el repositorio y los cambios no se guardan hasta que usamos `git commit`.

---

## 4. **git commit**: 
Este comando se utiliza para confirmar los cambios preparados en el área de preparación y crear un nuevo commit en el historial de Git.

   Ejemplo:

   ```bash
   $ git commit -m "Mensaje de commit"      # Realizar un commit con un mensaje
   ```

Este es quizás el comando más utilizado de Git. Una vez que llegamos a cierto punto en el desarrollo, queremos guardar nuestros cambios (tal vez después de una tarea o problema específico).

![img](https://media.geeksforgeeks.org/wp-content/uploads/20220906212952/GitCommit1.jpg)

**Importante:** `Git commit` guarda tus cambios solo localmente.

`Git commit` es como establecer un punto de control en el proceso de desarrollo al que puede volver más tarde si es necesario. También necesitamos escribir un mensaje corto para explicar lo que hemos desarrollado o cambiado en el código fuente.

---

## 5. **git status**: 

Este comando se utiliza para ver el estado actual del repositorio. Muestra los archivos modificados, los archivos agregados al área de preparación y otros detalles relevantes.

   Ejemplo:

   ```bash
   $ git status
   On branch master
   Your branch is up to date with 'origin/master'.

   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)

           modified:   archivo.txt

   no changes added to commit (use "git add" and/or "git commit -a")
   ```


El comando de estado de Git nos brinda toda la información necesaria sobre la rama actual.

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-2.png)
Iimportante : Git status obtenemos información acerca de las ramas y los archivos.

Podemos recopilar información acerca de: 

•	Si la rama actual está actualizada.    
•	Si hay algo que necesita un commit, un add, o borrarse.  
•	Si hay archivos preparados, sin preparar o sin seguimiento    
•	Si hay archivos creados, modificados o eliminados

---

## 6. **git log**: 

Este comando se utiliza para ver el historial de commits del repositorio. Muestra información detallada sobre los commits, como el autor, la fecha, el mensaje y el **hash del commit.**

   Ejemplo:

   ```bash

   $ git log
   commit c15fd572e2a2aebd6c6f3dc14eb4f94dfe33739a (HEAD -> master)
   Author: Usuario <usuario@gmail.com>
   Date:   Mon Jan 10 13:42:18 2022 +0100

       Actualizar archivo.txt

   commit 35e2f248ec439d4a87c6c2b692fa5c27d9c9b7b0
   Author: Usuario <usuario@gmail.com>
   Date:   Mon Jan 10 13:37:10 2022 +0100

       Agregar archivo.txt
   ```

El comando anterior enumera todas las confirmaciones recientes. Cada confirmación contiene un sha-id único, que genera el algoritmo SHA. También incluye la fecha, la hora, el autor y algunos detalles adicionales.

![img](https://static.javatpoint.com/tutorial/git/images/git-log.png)

Podemos realizar alguna acción como desplazarnos, saltar, movernos y salir en la línea de comando. Para desplazarse en la línea de comando, presione k para moverse hacia arriba, j para moverse hacia abajo, la barra espaciadora para desplazarse hacia abajo una página completa para desplazarse hacia arriba una página y q para salir de la línea de comando.

---

## 7. **git branch**:

 Este comando se utiliza para administrar las ramas (branches) en Git. Permite listar, crear y eliminar ramas.

   - Para listar las ramas:
     ```
     $ git branch
       develop
     * master
     ```

   - Para crear una nueva rama:
     ```
     $ git branch feature
     ```

   - Para eliminar una rama:
     ```
     $ git branch -d feature
     ```

![img](https://i.stack.imgur.com/GoImX.png)

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

El comando `git branch -r` se utiliza para mostrar las ramas remotas disponibles en el repositorio Git. La opción -r significa "remotes" y se utiliza para filtrar y mostrar solo las ramas remotas en lugar de las ramas locales.
```bash
$ git branch -r
  origin/develop
  origin/feature
  origin/master
```
Las ramas son muy importantes en el mundo de git. Mediante el uso de ramas, varios desarrolladores pueden trabajar en paralelo en el mismo proyecto simultáneamente. Podemos usar el comando `git branch` para crear, enumerar y eliminar ramas.

---

## 8. **git checkout**:

 Este comando se utiliza para cambiar entre ramas y restaurar archivos. Permite moverse a una rama existente y deshacer cambios locales.

   - Para cambiar a una rama existente:
     ```
     $ git checkout develop
     Switched to branch 'develop'
     ```

   - Para crear una nueva rama y cambiar a ella:
     ```
     $ git checkout -b feature
     Switched to a new branch 'feature'
     ```

   - Para descartar cambios locales en un archivo:
     ```
     $ git checkout archivo.txt
     ```

![img](https://media.geeksforgeeks.org/wp-content/uploads/20190901201805/465.png)

Este es también uno de los comandos Git más utilizados. Para trabajar en una rama, primero debe cambiarse a ella. Usamos git checkout principalmente para cambiar de una rama a otra. También podemos usarlo para verificar archivos y confirmaciones.

---

## 9. **git push**:

 Este comando se utiliza para enviar los cambios locales al repositorio remoto. Actualiza el historial de commits en el repositorio remoto.

   ```
   $ git push origin master
   ```
![img](https://media.geeksforgeeks.org/wp-content/uploads/20220831170024/GitPush3.jpg)

Después de confirmar los cambios (con git commit), lo siguiente que hay que hacer es enviar estos cambios al servidor remoto. Git push sube tus confirmaciones al repositorio remoto.
```bash
git push <remote> <branch-name>
```
Sin embargo, si tu rama se creó recientemente, también debes cargar la rama con el siguiente comando:
```bash
git push --set-upstream <remote> <name-of-your-branch>
O bien:
git push -u origin <branch_name>
```
**Importante:** Git push solo carga los cambios que están confirmados.

---

## 10. **git pull**:

 Este comando se utiliza para obtener los cambios más recientes desde el repositorio remoto y fusionarlos en la rama local. Actualiza el repositorio local con los últimos cambios.

   ```bash
   $ git pull origin master
   ```

![img](https://media.geeksforgeeks.org/wp-content/uploads/20220825165206/gitpull8.jpg)

El comando `git pull` se usa para obtener actualizaciones del repositorio remoto. Este comando es una combinación de `git fetch y git merge,` lo que significa que, cuando usamos git pull, obtienes las actualizaciones del repositorio remoto (`git fetch`) e inmediatamente aplica los últimos cambios en su local (`git merge`). (En simples palabras, sirve para traer el repositorio remoto a tu repositorio local).
```bash
git pull <remote>
```
Esta operación puede causar conflictos que debes resolver manualmente.


---

## 11. **git revert**:

 Este comando se utiliza para deshacer un commit anterior creando un nuevo commit que revierte los cambios introducidos por el commit anterior.

   ```
   $ git revert <commit-hash>
   ```
![img](https://sarafordnet.files.wordpress.com/2017/03/snaghtml5190ac2.png)

A veces necesitamos deshacer los cambios que hemos hecho. Hay varias formas de deshacer nuestros cambios de forma local o remota (depende de lo que necesitemos), pero debemos usar estos comandos con cuidado para evitar eliminaciones no deseadas.

Una forma más segura de deshacer nuestras confirmaciones es usando git revert. Para ver nuestro historial de confirmaciones, primero debemos usar `git log -- oneline`:

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-4.png)
Historia de commits de la rama master

Luego, solo necesitamos especificar el código hash junto a nuestro commit que nos gustaría deshacer:
```bash
git revert 3321844
```
Después de esto, verás una pantalla como la siguiente: simplemente presiona shift + q para salir:

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-5.png)

El comando Git revert deshará la confirmación dada, pero creará una nueva confirmación sin eliminar la anterior:

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-6.png)
Nuevo commit "revert".

La ventaja de usar git revert es que no toca el historial de commits. Esto significa que aún puede ver todas las confirmaciones en su historial, incluso las revertidas. 

Otra medida de seguridad aquí es que todo sucede en nuestro sistema local a menos que los insertemos en el repositorio remoto. Es por eso que git revert es más seguro de usar y es la forma preferida de deshacer nuestros commits.

---

## 12. **git merge**:

 Este comando se utiliza para fusionar cambios de una rama a otra. Combina los cambios de una rama en otra rama activa.

   - Para fusionar una rama en la rama actual:
     ```
     $ git merge feature
     ```

![img](https://media.geeksforgeeks.org/wp-content/uploads/20190901201805/465.png)

Git merge básicamente integra su rama de características (feature branch) con todas sus confirmaciones en la rama dev (o master). 

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


---

Estos son solo algunos ejemplos de comandos básicos de Git. Puedes explorar más comandos y opciones en la documentación oficial de Git para ampliar tus conocimientos y prácticas con Git.