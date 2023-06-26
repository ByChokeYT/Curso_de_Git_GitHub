# Comandos Basico de Git
## init, clone, add, commit, status, log.

![Portada](https://pixonauta.com/wp-content/uploads/2020/01/gitcommands2.jpg)

sin embargo, hay algunos comandos que se usan con más frecuencia (algunos a diario). 

Nota: Para comprender este Curso, debes conocer los conceptos básicos de Git.

---

## 1. **git init**:
 Este comando se utiliza para crear un nuevo repositorio Git en un directorio local. Crea un nuevo subdirectorio oculto llamado ".git" que contiene todos los archivos necesarios para el funcionamiento de Git.

   Ejemplo:

   ```bash
   $ git init
   Initialized empty Git repository in /path/to/repository
   ```

 
Cuando ejecutas el comando `git init` en un directorio, estás inicializando un repositorio de Git en esa ubicación. Esto significa que Git creará una estructura de control de versiones en ese directorio, permitiéndote realizar un seguimiento de los cambios en los archivos y administrar el historial de versiones.

  ![img](https://media.geeksforgeeks.org/wp-content/uploads/20220915184539/GitInit1.jpg)

Algunos ejemplos de cómo se utiliza el comando `git init` son:

1. Creación de un nuevo repositorio: Al ejecutar `git init` en un directorio vacío o en uno existente sin control de versiones, Git creará un nuevo repositorio en esa ubicación.

2. Inicialización de un repositorio existente: Si obtienes un proyecto existente de Git desde otro lugar, puedes ejecutar `git init` en el directorio del proyecto para configurar Git y comenzar a trabajar con él.

3. Creación de repositorios independientes: Puedes utilizar `git init` para crear repositorios independientes en diferentes directorios. Esto es útil cuando deseas mantener un historial de versiones separado para diferentes proyectos o partes de tu proyecto.

Es importante tener en cuenta que `git init` solo se ejecuta una vez en cada directorio para inicializar el repositorio. Después de eso, puedes comenzar a utilizar otros comandos de Git, como `git add`, `git commit`, `git branch`, entre otros, para administrar tus archivos y colaborar con otros desarrolladores.

Recuerda que el comando `git init` solo establece el repositorio local. Para conectarlo a un repositorio remoto en servicios como GitHub, necesitarás utilizar comandos adicionales como `git remote add` y `git push`.

¡Espero que esto te ayude a comprender cómo se utiliza `git init` y cómo puedes comenzar a trabajar con Git en tus proyectos!

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

Cuando ejecutas el comando `git clone` seguido de la URL de un repositorio remoto, estás creando una copia local completa de ese repositorio en tu máquina. Git descargará todos los archivos, historial de versiones y ramas del repositorio remoto y los copiará en un nuevo directorio en tu sistema.

Algunos ejemplos de cómo se utiliza el comando `git clone` son:

![img](https://i.ytimg.com/vi/bmh6wFTBY8c/maxresdefault.jpg)

1. **Clonar un repositorio remoto existente:** Si deseas obtener una copia de un repositorio remoto en tu máquina local, puedes usar `git clone` seguido de la URL del repositorio. Por ejemplo: `git clone https://github.com/usuario/repositorio.git`. Esto creará un nuevo directorio con el nombre del repositorio y copiará todos los archivos y la historia de versiones en ese directorio.

2. **Clonar un repositorio específico o rama:** Puedes clonar un repositorio específico o una rama específica utilizando el parámetro `-b` seguido del nombre de la rama o etiqueta que deseas clonar. Por ejemplo: `git clone -b nombre_de_rama https://github.com/usuario/repositorio.git`. Esto te permite clonar solo una parte específica del repositorio en lugar de toda la historia.

3. **Clonar un repositorio privado:** Si el repositorio que deseas clonar es privado y requiere autenticación, puedes incluir tu nombre de usuario y contraseña en la URL del repositorio al ejecutar `git clone`. Por ejemplo: `git clone https://usuario:contraseña@github.com/usuario/repositorio.git`.

Después de ejecutar `git clone`, se creará un nuevo directorio con el nombre del repositorio y tendrás una copia completa del repositorio remoto en tu máquina local. Puedes realizar cambios en los archivos, agregar nuevas ramas, realizar confirmaciones, entre otras operaciones, y luego sincronizar tus cambios con el repositorio remoto utilizando los comandos `git add`, `git commit` y `git push`.

Recuerda que necesitas tener acceso de lectura al repositorio remoto para poder clonarlo correctamente. Además, si deseas colaborar con el repositorio, es posible que necesites permisos de escritura o realizar una solicitud de extracción (pull request) según la configuración del repositorio.

¡Espero que esto te ayude a comprender cómo utilizar `git clone` para obtener una copia local de un repositorio remoto en Git!


Esto hará una copia del proyecto en tu espacio de trabajo local para que puedas comenzar a trabajar con él.

---

## 3. **git add**: 
Este comando se utiliza para agregar cambios o nuevos archivos al área de preparación **(staging area)** de Git. Prepara los archivos para ser incluidos en el próximo commit.

   Ejemplo:

   ```bash
   $ git add archivo.txt         # Agregar un archivo específico
   $ git add carpeta/            # Agregar todos los archivos en una carpeta
   $ git add .                   # Agregar todos los archivos y cambios nuevos
   ```
Necesitamos usar el comando `git add .` para incluir los cambios de un archivo(s) en nuestro próximo commit.

![img](https://www.freecodecamp.org/espanol/news/content/images/2022/05/image-3.png)

**importante:** el comando git add no cambia el repositorio y los cambios no se guardan hasta que usamos `git commit`.

Cuando ejecutas el comando `git add`, estás agregando los cambios realizados en tus archivos al área de preparación (también conocida como staging area) de Git. El área de preparación es una etapa intermedia antes de confirmar los cambios con `git commit`.

Algunos ejemplos de cómo se utiliza el comando `git add` son:

1. **Agregar cambios en un archivo específico:** Puedes utilizar `git add` seguido del nombre del archivo para agregar los cambios realizados en ese archivo al área de preparación. Por ejemplo: `git add archivo.txt`. Esto preparará los cambios realizados en `archivo.txt` para ser confirmados.

2. **Agregar cambios en varios archivos:** Si deseas agregar los cambios realizados en varios archivos, puedes especificar todos los nombres de archivo separados por espacios. Por ejemplo: `git add archivo1.txt archivo2.txt archivo3.txt`. Esto agregará los cambios en los tres archivos al área de preparación.

3. **Agregar todos los cambios:** Para agregar todos los cambios realizados en el repositorio, puedes utilizar `git add .` o `git add -A`. Esto agregará todos los archivos modificados y nuevos al área de preparación.

Es importante tener en cuenta que `git add` solo agrega los cambios al área de preparación, pero no los confirma definitivamente en el historial de versiones. Para guardar los cambios de manera permanente en Git, debes utilizar `git commit`.

![img](https://1.bp.blogspot.com/-O5moLBfmZPA/XweKhBfpl6I/AAAAAAAAEzw/9JrDy37zLQ0eFvSfQ8oypcMQSdpDeTasgCLcBGAsYHQ/s1600/trabajo-git.jpg)

Además de los ejemplos mencionados, `git add` también admite opciones adicionales, como `-p` para agregar cambios de forma interactiva o `--all` para agregar todos los cambios, incluidos los archivos eliminados.

Recuerda que después de ejecutar `git add`, puedes verificar el estado de los archivos en el área de preparación utilizando `git status`. Esto te mostrará qué archivos están listos para ser confirmados.

¡Espero que esto te ayude a comprender cómo se utiliza `git add` para agregar los cambios al área de preparación en Git!

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
Cuando ejecutas el comando `git commit`, estás creando un punto de control en la historia de versiones de tu repositorio. Este comando guarda los cambios realizados en el área de preparación (staging area) como una nueva confirmación en el historial de versiones de Git.

Algunos ejemplos de cómo se utiliza el comando `git commit` son:

1. **Confirmar cambios con un mensaje descriptivo:** Puedes utilizar `git commit -m` seguido de un mensaje descriptivo para confirmar los cambios. Por ejemplo: `git commit -m "Agregado archivo.txt"`.

2. **Confirmar cambios en múltiples archivos:** Si tienes cambios en varios archivos y deseas confirmarlos juntos, puedes utilizar `git commit` sin la opción `-m` y Git abrirá un editor de texto para que puedas ingresar un mensaje descriptivo. Por ejemplo: `git commit`.

3. **Confirmar cambios y agregar un mensaje detallado:** Si deseas proporcionar un mensaje de confirmación más detallado o una descripción extensa de los cambios realizados, puedes utilizar `git commit` sin la opción `-m` y Git abrirá el editor de texto para que puedas ingresar el mensaje. Por ejemplo: `git commit`.

4. **Confirmar cambios modificados:** Si ya has confirmado cambios previamente y luego realizas modificaciones en los archivos, puedes utilizar `git commit --amend` para agregar los cambios modificados a la confirmación anterior. Por ejemplo: `git commit --amend`.


![img](https://media.geeksforgeeks.org/wp-content/uploads/20220906214221/GitCommit5.jpg)

Es importante tener en cuenta que al realizar un `git commit`, los cambios se guardan de manera permanente en el historial de versiones de Git. Cada confirmación tiene un identificador único **(hash)** que permite rastrear y acceder a los cambios en cualquier momento.

Recuerda que después de ejecutar `git commit`, los cambios confirmados no se envían automáticamente al repositorio remoto. Para enviar los cambios al repositorio remoto, debes utilizar `git push`.

¡Espero que esto te ayude a comprender cómo se utiliza `git commit` para crear confirmaciones en Git!

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
**Importante :** `Git status` obtenemos información acerca de las ramas y los archivos.

Podemos recopilar información acerca de: 

•	Si la rama actual está actualizada.    
•	Si hay algo que necesita un `commit, un add, o borrarse`.  
•	Si hay archivos preparados, sin preparar o sin seguimiento    
•	Si hay archivos creados, modificados o eliminados

Cuando ejecutas el comando `git status`, Git te proporciona información sobre el estado actual de tu repositorio. Te muestra información sobre los archivos modificados, los archivos que están en el área de preparación **(staging area)** y los archivos que aún no han sido rastreados por Git. Además, también te informa si hay cambios locales que aún no se han confirmado con un `commit` y si hay ramas remotas actualizadas disponibles.

Aquí tienes algunos ejemplos de cómo se utiliza el comando `git status`:

1. Verificar el estado del repositorio:
   ```
   git status
   ```
   Esto mostrará los cambios realizados en los archivos sin confirmar y los archivos que no están siendo rastreados por Git.

2. Verificar el estado de archivos específicos:
   ```
   git status archivo1.txt archivo2.txt
   ```
   Esto mostrará el estado de los archivos `archivo1.txt` y `archivo2.txt` en particular.

3. Verificar el estado detallado del repositorio:
   ```
   git status -s
   ```
   El modificador `-s` o `--short` muestra un resumen más conciso del estado del repositorio, utilizando una notación abreviada.

4. Verificar el estado de todas las ramas, incluidas las ramas remotas:
   ```
   git status -sb
   ```
   El modificador `-b` o `--branch` muestra información detallada sobre la rama actual y también muestra las ramas remotas existentes.

Al utilizar `git status`, recibirás información relevante sobre el estado de tu repositorio y te ayudará a determinar qué cambios se han realizado y qué acciones se deben realizar, como agregar archivos al área de preparación o confirmar cambios pendientes.

Recuerda que `git status` es una herramienta útil para mantener un seguimiento de tus cambios y asegurarte de que tu repositorio esté en un estado correcto.

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

![img](https://pbs.twimg.com/media/E_vFyoNWEAEhwzh.jpg:large)

Cuando ejecutas el comando `git log`, Git muestra un registro de los commits realizados en el repositorio. Proporciona información detallada sobre los commits, como el autor, la fecha y hora, el mensaje del commit y un identificador único (hash) para cada commit. El registro se muestra en orden cronológico inverso, con los commits más recientes en la parte superior.

Aquí tienes algunos ejemplos de cómo se utiliza el comando `git log`:

1. **Ver el registro de commits:**
   ```bash
   git log
   ```
   Esto muestra el registro completo de commits, con los detalles de cada commit, incluyendo el autor, fecha, hora y mensaje.

2. **Ver el registro de commits abreviado:**
   ```bash
   git log --oneline
   ```
   Esto muestra un registro de commits abreviado, donde cada commit se muestra en una línea, mostrando solo el hash y el mensaje del commit.

3. **Ver el registro de commits con gráfico y ramas:**
   ```bash
   git log --graph --oneline --decorate --all
   ```
   Este comando muestra el registro de commits con un gráfico **ASCII** que muestra la historia de las ramas y las fusiones. También se muestra el **hash** y el mensaje del commit.

4. **Ver el registro de commits de un archivo específico:**
   ```
   git log archivo.txt
   ```
   Esto muestra el registro de commits que afectan al archivo específico `archivo.txt`, con los detalles de cada commit.

El comando `git log` es útil para ver el historial de cambios en un repositorio, seguir la evolución del proyecto y comprender quién hizo qué cambios y cuándo. Puedes ajustar los parámetros y las opciones de formato para adaptar la salida del comando según tus necesidades.

---

Estos son solo algunos ejemplos de comandos básicos de Git. Puedes explorar más comandos y opciones en la documentación oficial de Git para ampliar tus conocimientos y prácticas con Git.

[Dar Examen: 03.Comandos basicos de Git](https://forms.gle/1iq8VQ5eNsph7SfTA)

[¡Buena Suerte En Tu Próxima Clase!](https://github.com/ByChokeYT/Curso_de_Git_GitHub/tree/main/04%20.Comandos%20para%20Manejar%20Ramas)

