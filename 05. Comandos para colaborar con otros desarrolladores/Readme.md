
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