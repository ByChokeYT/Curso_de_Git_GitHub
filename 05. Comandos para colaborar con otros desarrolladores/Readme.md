# fetch, pull, push

Los comandos son importantes para colaborar con otros desarrolladores porque promueven la consistencia, permiten compartir configuraciones, automatizar tareas, facilitan la documentación y se integran con sistemas de control de versiones. Utilizar comandos comunes y establecer convenciones en el equipo ayuda a mejorar la eficiencia y la calidad del trabajo colaborativo.

![PORTADA](https://miro.medium.com/v2/resize:fit:1024/1*jS0a3S2-YZfaA-WJqLWUrQ.png)


---

## git fetch


Cuando ejecutas `git fetch`, Git realiza las siguientes acciones:

1. **Conexión al repositorio remoto:** Git establece una conexión con el repositorio remoto especificado, ya sea a través de HTTPS o SSH.

2. **Descarga de referencias:** Git descarga todas las referencias del repositorio remoto, incluyendo las ramas y los commits asociados a ellas. Esto incluye las ramas principales, ramas secundarias y cualquier otra rama existente.

3. **Actualización de referencias locales:** Git actualiza las referencias locales correspondientes a las ramas remotas. Estas referencias se conocen como ramas remotas o "refs/remotes". Por ejemplo, si descargas los cambios de la rama `main` del repositorio remoto, Git actualizará la referencia `refs/remotes/origin/main`.

4. **Obtención de objetos:** Git descarga los objetos necesarios asociados con los commits y las referencias descargadas. Estos objetos incluyen los árboles de archivos y los contenidos de los archivos.

5. **Actualización del registro de seguimiento:** Git actualiza el registro de seguimiento local con la información más reciente del repositorio remoto. Esto permite a Git realizar un seguimiento de los cambios y las diferencias entre las ramas locales y remotas.

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


## 10. **git pull**:

 Este comando se utiliza para obtener los cambios más recientes desde el repositorio remoto y fusionarlos en la rama local. Actualiza el repositorio local con los últimos cambios.

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
   ```
   git push --all origin
   ```

Recuerda que antes de ejecutar `git push`, debes haber realizado un `git commit` para confirmar tus cambios locales.

Estos son solo ejemplos básicos de `git push`. Puedes consultar la documentación oficial de Git para obtener más información sobre este comando y sus opciones.