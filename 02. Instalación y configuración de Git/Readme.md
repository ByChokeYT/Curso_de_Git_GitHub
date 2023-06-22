# Descarga e instalación de Git

![portada](https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2017/04/git-for-windows.png)

Aquí tienes los pasos para descargar e instalar Git en tu equipo:

1. Ve al sitio web oficial de Git: [https://git-scm.com/downloads](https://git-scm.com/downloads).

2. En la página de descargas, se mostrarán diferentes opciones según tu sistema operativo (Windows, macOS, Linux, etc.). Haz clic en el enlace correspondiente para tu sistema operativo.

![git](https://d33wubrfki0l68.cloudfront.net/42576fcf96af9adb8354488a9510994a25afe63f/c4ad4/img/2023/02/09/cara-install-git-di-windows/install-dan-download-git-terhubung-ke-github-002.png)

3. Si estás utilizando Windows, se descargará un archivo ejecutable (`.exe`). Haz doble clic en el archivo descargado para iniciar el instalador. Si estás utilizando macOS o Linux, se descargarán los archivos comprimidos. Extrae los archivos del paquete descargado.

4. Sigue las instrucciones del instalador para completar la instalación. A continuación, se presentarán algunas opciones de configuración durante el proceso de instalación. Puedes mantener las opciones predeterminadas o personalizarlas según tus preferencias.

    ![img](https://www.neoguias.com/wp-content/uploads/2020/05/instalar-git-windows-03.png)

5. Una vez que la instalación se haya completado, puedes verificar si Git se ha instalado correctamente abriendo una ventana de terminal (en Windows, abre Git Bash o la terminal de comandos) y ejecutando el siguiente comando:

   ```bash
   git --version
   ```

   Si Git está instalado correctamente, verás la versión de Git en la salida del comando.

   ![img](https://linuxhint.com/wp-content/uploads/2022/09/image10.png)

¡Eso es todo! Ahora tienes Git instalado en tu equipo. Puedes comenzar a utilizar Git en la línea de comandos o utilizar una interfaz gráfica de usuario, según tus preferencias. Recuerda que Git te permitirá realizar un seguimiento de los cambios en tu código fuente y facilitará la colaboración en proyectos de desarrollo de software.

---

# Configuración de Git en la línea de comandos

#### Aquí tienes algunos ejemplos de configuración de Git en la línea de comandos:

1. Configuración del nombre de usuario:

```bash
git config --global user.name "Tu Nombre"
```
Este comando establece tu nombre de usuario que se utilizará en los commits que realices. Reemplaza "Tu Nombre" con tu nombre real.

2. Configuración del correo electrónico:

```bash
git config --global user.email "tu_correo@example.com"
```
-  Este comando establece tu dirección de correo electrónico que se asociará con los commits que realices. Reemplaza "tu_correo@example.com" con tu dirección de correo electrónico.

   ![img](https://1.bp.blogspot.com/-PWK4gDGa0GQ/YItalgCRuRI/AAAAAAAAD6Q/AvHpHm0oW5An4fUF4a2A4g9tq3fdE1ewgCLcBGAsYHQ/s448/2.configurar-usuario.png)

3. Configuración del editor de texto:

```bash
git config --global core.editor "nombre_del_editor"
```
- Este comando establece el editor de texto que se utilizará para editar los mensajes de commit. Reemplaza "nombre_del_editor" con el nombre de tu editor preferido, como "vim", "nano" o "sublime".

4. Verificación de la configuración:

```bash
git config --list
```
- Este comando muestra la configuración actual de Git en tu sistema, incluyendo el nombre de usuario, correo electrónico y otras opciones.y alfina si te traba el terminal solo tienes que precionar la letra **"Q".** 

Recuerda que el uso del modificador `--global` en los comandos de configuración establece la configuración a nivel global, lo que significa que se aplicará a todos los repositorios en tu sistema. Si deseas configurar opciones específicas para un repositorio en particular, puedes omitir `--global` y ejecutar los comandos dentro del directorio del repositorio.

Estos son solo algunos ejemplos de configuración básica de Git en la línea de comandos. Puedes consultar la documentación de Git para obtener más información sobre las opciones de configuración disponibles y cómo personalizar tu entorno de Git según tus necesidades.

---

# Configuración de Git con una interfaz gráfica

Si prefieres utilizar una interfaz gráfica en lugar de la línea de comandos para configurar Git, existen varias opciones disponibles. Aquí te mencionaré dos interfaces gráficas populares para configurar Git:

1. **Git GUI:**
   Git GUI es una interfaz gráfica oficial proporcionada por Git. Viene incluida en la mayoría de las distribuciones de Git y proporciona una forma intuitiva de configurar Git y realizar operaciones básicas.
   
 Puedes abrir Git GUI ejecutando el siguiente comando en la línea de comandos:

   ```bash
   git gui
   ```
   ![img](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO0ofLYZzWuWiYgEbh3euZuDvqO_ZIL5kAg&usqp=CAU)

   Una vez abierto, puedes seleccionar "Edit" en la barra de menú y luego "Options" para acceder a la configuración de Git. Aquí puedes establecer tu nombre de usuario, dirección de correo electrónico y otras opciones de configuración.

2. **Sourcetree:**
   Sourcetree es una herramienta de gestión de repositorios Git con una interfaz gráfica completa. Es desarrollada por Atlassian y está disponible de forma gratuita para Windows y macOS. Puedes descargar Sourcetree desde su sitio web oficial: [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/). Una vez instalado, puedes abrir Sourcetree y seguir el asistente de configuración para establecer tu nombre de usuario, dirección de correo electrónico y otras opciones de configuración.

   ![img](https://blog.sourcetreeapp.com/files/2017/01/win_2_header.png)

Estas son solo dos opciones populares de interfaces gráficas para configurar Git. Hay otras herramientas disponibles, como GitKraken, GitHub Desktop, entre otras, que también ofrecen una interfaz gráfica fácil de usar para configurar Git. Puedes explorar estas opciones y elegir la que mejor se adapte a tus necesidades y preferencias.


[Dar Examen: 02.Instalación y Configuraciones de Github](https://forms.gle/KH5trB9CRZ68MgRRA)

[¡Buena Suerte En Tu Próxima Clase!]()