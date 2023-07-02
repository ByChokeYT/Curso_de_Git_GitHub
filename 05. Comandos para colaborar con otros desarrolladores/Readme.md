# fetch, pull, push

Los comandos son importantes para colaborar con otros desarrolladores porque promueven la consistencia, permiten compartir configuraciones, automatizar tareas, facilitan la documentación y se integran con sistemas de control de versiones. Utilizar comandos comunes y establecer convenciones en el equipo ayuda a mejorar la eficiencia y la calidad del trabajo colaborativo.

![PORTADA](https://miro.medium.com/v2/resize:fit:1024/1*jS0a3S2-YZfaA-WJqLWUrQ.png)


---

# git fetch [Buscar]

`git fetch` es un comando en Git que permite obtener (fetch) los cambios más recientes de un repositorio remoto sin fusionarlos en tu rama actual. Aquí está cómo funciona:



1. Imagina que tienes un repositorio remoto (por ejemplo, en GitHub) y tu propio repositorio local clonado desde ese remoto.

2. Cuando ejecutas `git fetch origin`, le estás diciendo a Git que obtenga cualquier cambio nuevo que haya ocurrido en el repositorio remoto llamado "origin".

3. Git compara las ramas y los commits en tu repositorio local con los del repositorio remoto y descarga cualquier diferencia o cambio que haya ocurrido en el repositorio remoto desde la última vez que sincronizaste.

4. Los cambios descargados se almacenan en una rama especial llamada `origin/<nombre-de-la-rama>`, que representa la rama en el repositorio remoto.

5. A diferencia del comando `git pull`, que combina automáticamente los cambios descargados en tu rama actual, `git fetch` no realiza ninguna fusión automática. En su lugar, te brinda la oportunidad de revisar los cambios y decidir cuándo y cómo fusionarlos en tu rama local.

6. Después de ejecutar `git fetch`, puedes examinar los cambios descargados utilizando comandos como `git log origin/<nombre-de-la-rama>` para ver el historial de commits en la rama remota.

7. Luego, puedes decidir cuándo y cómo incorporar los cambios descargados en tu rama local. Puedes utilizar comandos como `git merge` o `git rebase` para fusionar los cambios en tu rama actual.

En resumen, `git fetch` te permite obtener los cambios más recientes de un repositorio remoto sin fusionarlos automáticamente. Esto te da mayor control sobre cuándo y cómo incorporar los cambios en tu rama local, lo que puede ser útil si deseas revisar los cambios antes de fusionarlos o si necesitas realizar algún tipo de manipulación adicional antes de la fusión.

Una vez completada la descarga y actualización de referencias, puedes utilizar otros comandos, como `git diff` o `git merge`, para revisar y fusionar los cambios descargados en tu rama actual.

![img](https://geekytheory.com/content/images/2021/11/git-fetch-vs-git-pull-diferencias.png)

**Ejemplo:**
Supongamos que tienes un repositorio local con una rama llamada `develop` y deseas obtener los últimos cambios de la rama `main` del repositorio remoto llamado `origin`. Puedes ejecutar el siguiente comando:

```bash
git fetch origin main
```

Esto establecerá una conexión con el repositorio remoto `origin`, descargará los cambios de la rama `main` y actualizará la referencia `origin/main` en tu repositorio local. Luego, puedes comparar los cambios entre tu rama `develop` y `origin/main` utilizando `git diff` o fusionar los cambios utilizando `git merge`.

Espero que esto aclare cómo funciona `git fetch` y cómo se utilizan los comandos relacionados para mantener tu repositorio local actualizado con los cambios del repositorio remoto.

---


# **git pull**: [Tirar]

 Este comando`git pull` se utiliza para obtener los cambios más recientes desde el repositorio remoto y fusionarlos en la rama local. Actualiza el repositorio local con los últimos cambios.

   ```bash
   $ git pull origin master
   ```

git pull es un comando de Git que combina dos acciones en una: 

`git fetch y git merge`. En resumen, realiza una descarga de los cambios más recientes del repositorio remoto y los fusiona automáticamente con la rama local actual.

Ejemplos de `git pull`:

1. Descargar cambios de la rama "main" del repositorio remoto "origin" y fusionarlos con la rama local actual:
   ```bash
   git pull origin main
   ```

2. Descargar cambios del repositorio remoto configurado como "origin" y fusionarlos con la rama local actual:
   ```bash
   git pull
   ```

3. Descargar cambios y aplicarlos sobre la rama local utilizando rebase:
   ```bash
   git pull --rebase
   ```

Recuerda que al ejecutar `git pull`, es importante tener en cuenta si tienes cambios locales no confirmados, ya que podría generar conflictos. En ese caso, deberás resolver los conflictos manualmente antes de poder fusionar los cambios.

Estos son solo ejemplos básicos de `git pull`. Puedes consultar la documentación oficial de Git para obtener más información sobre este comando y sus opciones.

![img](https://media.geeksforgeeks.org/wp-content/uploads/20220825165206/gitpull8.jpg)


El comando `git pull` se usa para obtener actualizaciones del repositorio remoto. Este comando es una combinación de `git fetch y git merge,` lo que significa que, cuando usamos git pull, obtienes las actualizaciones del repositorio remoto (`git fetch`) e inmediatamente aplica los últimos cambios en su local (`git merge`). (En simples palabras, sirve para traer el repositorio remoto a tu repositorio local).

```bash
git pull <remote>
```
Esta operación puede causar conflictos que debes resolver manualmente.

---

# **git push**: [Empujar]

 Este comando`git push` se utiliza para enviar los cambios locales al repositorio remoto. Actualiza el historial de commits en el repositorio remoto.

   ```bash
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

![img](https://assets-global.website-files.com/61c02e339c11997e6926e3d9/61c2e47b4d436d4d1a382d76_5e2a1539b3437be8c9018c2f_cover-git-push-force2.png)


El comando `git push` se utiliza para enviar los cambios locales de tu repositorio a un repositorio remoto. Esto actualiza el estado del repositorio remoto con tus cambios locales. El formato general del comando es:

```
git push <repositorio-remoto> <rama-local>
```

Donde `<repositorio-remoto>` es el nombre o URL del repositorio remoto y `<rama-local>` es la rama local que deseas enviar.

### Ejemplos:

1. Enviar cambios de la rama "main" al repositorio remoto llamado "origin":
   ```bash
   git push origin main
   ```

2. Enviar cambios de la rama "develop" al repositorio remoto "upstream":
   ```bash
   git push upstream develop
   ```

3. Enviar todos los cambios de todas las ramas locales al repositorio remoto "origin":
   ```bash
   git push --all origin
   ```

Recuerda que antes de ejecutar `git push`, debes haber realizado un `git commit` para confirmar tus cambios locales.

Estos son solo ejemplos básicos de `git push`. Puedes consultar la documentación oficial de Git para obtener más información sobre este comando y sus opciones.

[Dar Examen: 05.Comandos para colaborar con otros Desarrolladores](https://forms.gle/xxKEAv6z33Qh6sZ98)

[¡Buena Suerte En Tu Próxima Clase!]()
