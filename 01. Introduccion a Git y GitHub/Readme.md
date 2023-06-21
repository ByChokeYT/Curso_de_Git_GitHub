# Clase 1: Introducción a `Git` y `GitHub`
![portada](https://blog.facialix.com/wp-content/uploads/2021/04/git-github-cero-facialix.jpg)



## ¿Qué es `Git`?

``Git`` es un sistema de control de versiones distribuido, ampliamente utilizado en el desarrollo de software. Permite rastrear los cambios realizados en archivos y directorios a lo largo del tiempo, lo que facilita la colaboración entre múltiples personas que trabajan en un proyecto.

En lugar de guardar solo la última versión de un archivo, como lo hacen los sistemas de control de versiones tradicionales, ``Git`` almacena una instantánea de cada cambio realizado, lo que brinda un historial completo y detallado de las modificaciones. 

Esto permite revertir cambios no deseados, comparar versiones, fusionar diferentes ramas de desarrollo y colaborar de manera eficiente con otros desarrolladores.


![img](https://static.platzi.com/media/user_upload/git_fire-9b873abb-7c7d-40d3-a418-0816a5a689bd.jpg)


Una de las características distintivas de ``Git`` es que es un sistema distribuido, lo que significa que cada desarrollador tiene una copia completa del repositorio, incluyendo todo el historial de cambios. 

Esto permite a los desarrolladores trabajar de forma independiente y sin conexión a Internet, y luego sincronizar sus cambios con otros repositorios remotos, como `GitHub`` `GitLab` o un servidor propio.

``Git`` utiliza comandos de línea de comandos o interfaces gráficas para realizar operaciones como la creación de un repositorio, la confirmación de cambios, la creación y fusión de ramas, entre otros.

Proporciona una gran flexibilidad y potencia para administrar el versionamiento de proyectos de software, lo que lo convierte en una herramienta fundamental para desarrolladores y equipos de desarrollo.

Aquí tienes los **ejemplos** de `Git`:

| Comando | Descripción |
|---------|-------------|
| `git init` | Inicia un nuevo repositorio `Git` en un directorio vacío o existente. |
| `git clone <URL del repositorio>` | Clona un repositorio existente desde un servidor remoto a tu máquina local. |
| `git add <nombre de archivo>` | Agrega archivos al área de preparación (staging) para que se incluyan en el próximo commit. |
| `git commit -m "Mensaje descriptivo"` | Crea un nuevo commit que incluye los cambios en el área de preparación con un mensaje descriptivo. |
| `git status` | Muestra el estado actual del repositorio, incluyendo archivos modificados, agregados o eliminados. |
| `git log` | Muestra el historial de commits realizados en el repositorio, incluyendo información como el autor, fecha y mensaje. |
| `git branch` | Muestra una lista de ramas disponibles en el repositorio. |
| `git checkout <nombre de rama>` | Cambia entre ramas o restaura archivos desde commits anteriores. |
| `git merge <nombre de rama>` | Fusiona una rama específica en la rama actual. |
| `git push <nombre del repositorio remoto> <nombre de la rama>` | Envía los commits locales al repositorio remoto especificado. |

---

## ¿Qué es`GitHub`
`GitHub`es una plataforma web y un servicio de alojamiento para proyectos de desarrollo de software basados en `Git`. Proporciona un entorno en línea donde los desarrolladores pueden colaborar, compartir y administrar el código fuente de sus proyectos.

![img](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/12/gitHub.png)

En `GitHub`, los desarrolladores pueden crear repositorios para almacenar y organizar su código. Estos repositorios actúan como almacenes centrales donde se guarda toda la información relacionada con el proyecto, incluyendo los archivos de código, documentación, imágenes y otros recursos.

---
## Algunas características clave de `GitHub` incluyen:

1. **Control de versiones**: `GitHub` aprovecha la potencia de `Git` como sistema de control de versiones. Esto significa que puedes realizar un seguimiento de los cambios en tus archivos, ver el historial de modificaciones y revertir a versiones anteriores si es necesario.

2. **Colaboración**: `GitHub` facilita la colaboración entre desarrolladores y equipos de trabajo. Varios desarrolladores pueden clonar un repositorio, realizar cambios en sus propias ramas y enviar solicitudes de extracción (`pull requests`) para que los cambios se revisen y se incorporen al proyecto principal.

3. **Seguimiento de problemas y solicitudes**: `GitHub` proporciona un sistema de seguimiento de problemas **(issues)** que permite a los usuarios informar de errores, solicitar nuevas características o plantear cualquier otro tipo de problema relacionado con el proyecto. También se utilizan las solicitudes de extracción para proponer y discutir cambios en el código.

4. **Despliegue y hosting**: `GitHub` ofrece funcionalidades adicionales, como `GitHub` Pages, que permite alojar sitios web estáticos directamente desde un repositorio de `GitHub` También se integra con servicios de implementación continua **(CI/CD)** para automatizar la construcción, prueba y despliegue de proyectos.

Además, `GitHub` ha crecido hasta convertirse en una comunidad global de desarrolladores, donde se pueden descubrir proyectos interesantes, colaborar con otros desarrolladores, contribuir a proyectos de código abierto y aprender de la comunidad.

En resumen, `GitHub` es una plataforma que utiliza `Git` como base, pero agrega características y herramientas adicionales para facilitar la colaboración, el seguimiento de problemas y el desarrollo de software en equipo. Es ampliamente utilizado por desarrolladores y organizaciones en todo el mundo para administrar y compartir su código fuente.

---


## ¿Por qué `Git` y `GitHub` son importantes?

![img](https://kinsta.com/es/wp-content/uploads/sites/8/2023/02/github-pages.jpg)

`Git` y `GitHub` son importantes por varias razones:

1. **Control de versiones y seguimiento de cambios**: `Git` permite realizar un seguimiento preciso de todos los cambios realizados en el código fuente de un proyecto a lo largo del tiempo. Esto facilita la colaboración y ayuda a mantener un historial completo de revisiones. Además, `Git` permite revertir cambios no deseados, comparar versiones y resolver conflictos.

2. **Colaboración y trabajo en equipo**: `GitHub` como plataforma basada en `Git`, facilita la colaboración entre desarrolladores. Varios desarrolladores pueden trabajar en paralelo en diferentes ramas, y luego fusionar sus cambios mediante solicitudes de extracción (`pull requests`). Esto fomenta la colaboración efectiva, la revisión de código y el trabajo en equipo en proyectos de desarrollo de software.

3. **Facilidad de acceso y distribución**: `Git` y `GitHub` permiten acceder y distribuir el código fuente de un proyecto de manera eficiente. Cualquier persona con acceso al repositorio puede clonarlo, realizar cambios y contribuir al proyecto. Esto es especialmente útil en proyectos de código abierto, donde la comunidad puede contribuir al desarrollo y mejora de un proyecto.

4. **Repositorio centralizado y respaldo en la nube**: `GitHub` proporciona un repositorio centralizado en línea donde se almacena el código fuente y todos los cambios realizados. Esto garantiza que el código esté respaldado y protegido contra pérdidas. Además, `GitHub` ofrece características como control de acceso, gestión de problemas y herramientas de revisión de código, lo que facilita la administración de proyectos y la colaboración.

5. **Visibilidad y reconocimiento**: `GitHub` es una comunidad global de desarrolladores, lo que significa que los proyectos alojados en la plataforma tienen la oportunidad de ser descubiertos y reconocidos por otros desarrolladores y organizaciones. Esto puede generar colaboraciones, contribuciones y oportunidades profesionales.

En resumen, `Git` y `GitHub` son importantes porque proporcionan un sistema robusto de control de versiones, permiten la colaboración efectiva entre desarrolladores, facilitan el acceso y la distribución del código fuente, y ofrecen herramientas adicionales para administrar proyectos de software de manera eficiente. 

Estas características son fundamentales en el desarrollo de software moderno y fomentan la productividad y la calidad en el trabajo en equipo.

>Aquí tienes una tabla que muestra las diferencias y ventajas de `Git` y `GitHub`

|          | `Git`                                          |`GitHub`                                              |
|----------|----------------------------------------------|------------------------------------------------------|
| Definición | Sistema de control de versiones distribuido | Plataforma de alojamiento y colaboración de proyectos |
| Funcionalidad | Control de versiones, seguimiento de cambios, gestión de ramas, resolución de conflictos, historial de revisiones | Control de versiones, colaboración en equipo, seguimiento de problemas, revisión de código, alojamiento de repositorios |
| Uso principal | Local en tu máquina o servidor propio | En línea, basado en la nube |
| Colaboración | Puede colaborar con otros desarrolladores mediante la integración de repositorios compartidos | Facilita la colaboración mediante solicitudes de extracción, revisión de código y comentarios |
| Repositorio remoto | No proporciona un repositorio remoto | Proporciona repositorios remotos en línea |
| Gestión de proyectos | No tiene herramientas específicas de gestión de proyectos | Ofrece herramientas para la administración de proyectos, como seguimiento de problemas, tableros de proyectos y herramientas de revisión de código |
| Visibilidad | El código puede mantenerse privado o compartirse de forma selectiva | Permite la visibilidad y el descubrimiento de proyectos por parte de otros desarrolladores y organizaciones |
| Integración | Se puede integrar con otros servicios y herramientas de desarrollo de software | Ofrece integraciones con servicios de CI/CD, IDEs y otras herramientas de desarrollo |
| Comunidad | No tiene una comunidad específica | Es una comunidad global de desarrolladores, lo que fomenta la colaboración y contribuciones a proyectos de código abierto |
| Precio | Es gratuito y de código abierto | Ofrece planes gratuitos y de pago, con características adicionales en los planes de pago |

> NOTA: Espero que esta tabla te ayude a comprender las diferencias y ventajas de `Git` y `GitHub` Ten en cuenta que `Git` es el sistema de control de versiones subyacente, mientras que `GitHub` es una plataforma que utiliza `Git` como base y agrega características y herramientas adicionales para facilitar la colaboración y la administración de proyectos.

---

[Dar Examen: Clase 1: Introducción a `Git` y `GitHub`](https://forms.gle/toiLYERfdE2BQT1V8)

[¡Buena Suerte En Tu Próxima Clase!](https://github.com/ByChokeYT/Curso_de_Github/blob/main/02.%20Instalacion%20y%20configuracion%20de%20Git/Readme.md)

