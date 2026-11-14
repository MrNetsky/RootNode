---
id: primeros-pasos-arch-linux-wsl2
title: Primeros pasos en Arch Linux en WSL2
sidebar_label: Primeros pasos en Arch
sidebar_position: 3
description: Configuraciones mínimas al iniciar Arch en WSL2.
tags:
  - linux
  - windows
  - wsl
keywords: [arch, linux, pacman, root]
---

Antes de comenzar, conviene realizar algunas comprobaciones para conocer el estado inicial del sistema, identificar con qué usuario estamos trabajando y verificar qué privilegios tenemos. Para ello, ejecuté los siguientes comandos:

## Identidad y privilegios

```bash title="Bash"
whoami #root. 
id #uid=0(root) gid=0(root) groups=0(root)
```

Es importante saber que `root` es el superusuario de Linux, equivalente conceptualmente a una cuenta de administrador con privilegios máximos. Este usuario tiene permisos para realizar prácticamente cualquier operación dentro del sistema.

A diferencia de lo que ocurre cuando trabajamos habitualmente con una cuenta de usuario común, `root` no necesita solicitar privilegios elevados para realizar tareas administrativas. Por eso, no es recomendable utilizarlo como cuenta habitual de trabajo.

Mientras que `whoami` responde a la pregunta *"¿quién soy?"*, `id` nos proporciona información más detallada de ¿cuál es mi identificador numérico?, ¿cuál es mi grupo principal? y ¿a qué otros grupos pertenezco?

| Identificador | Especificación |
|:--:|:--:|
|`uid` | <u>User ID</u>: Identificador numérico del usuario. |
|`gid` | <u>Group ID</u>: Identificador numérico del grupo principal.|
| `groups` | Grupos a los que pertenece el usuario, incluido el principal. Éstos permiten compartir permisos entre distintos usuarios. |

## Kernel y Arquitectura

```bash title="Bash"
uname -a
#Linux BYTE-ALCHEMIST 6.18.33.2-microsoft-standard-WSL2 #1 SMP PREEMPT_DYNAMIC Thu Jun 18 21:54:43 UTC 2026 x86_64 GNU/Linux
```

| Fragmento | Significado |
|:--:|:--:|
| `Linux` | Nombre del kernel|
| `BYTE-ALCHEMIST` | Hostname del sistema|
| `6.18.33.2-microsoft-standard-WSL2` | Versión y compilación del kernel|
| `#1` | Número de compilación|
| `SMP` | Soporte para multiprocesamiento simétrico|
| `PREEMPT_DYNAMIC` | Configuración de preempción dinámica del kernel|
| `Thu Jun 18 21:54:43 UTC` | Fecha de compilación|
| `x86_64` | Arquitectura de 64 bits de la familia x86. Se puede consultar individualmente mediante uname -m|
| `GNU/Linux` | Identificación del entorno del sistema|

Como estoy trabajando en WSL2, el kernel que vemos es proporcionado por Microsoft y adaptado para funcionar con el subsistema de Linux. Arch Linux utiliza ese kernel para ejecutar su entorno de usuario.

Esto es importante porque, aunque estoy utilizando Arch Linux, no estoy administrando un kernel propio de Arch. En una instalación nativa, como podría ser Arch Linux o CachyOS instalado directamente en el equipo, la administración del kernel es diferente.

## Gestor de paquetes (pacman)

Primero comprobé que Pacman estuviera disponible en el sistema y consulté su versión mediante el siguiente comando:

```bash title="Bash"
pacman --version
```

Este comando muestra información sobre la versión de Pacman y sus características. Si se ejecuta correctamente, también nos confirma que el gestor de paquetes está disponible.

Una vez comprobado esto, llegó el momento de actualizar el sistema:

```bash title="Bash"
pacman -Syu
```

- `-S`:	Operación de sincronización con los repositorios.
- `-y`:	Actualiza las bases de datos locales de los repositorios.
- `-u`:	Actualiza los paquetes instalados que tengan nuevas versiones disponibles.

En conjunto, este comando sincroniza las bases de datos de los repositorios y actualiza los paquetes instalados. Es el procedimiento habitual para mantener Arch Linux actualizado.

Si venís de una distribución basada en Debian, como Linux Mint en mi caso, probablemente estés familiarizado con los siguientes comandos:

```bash title="Bash"
sudo apt update
sudo apt upgrade
```

El primero actualiza las listas de paquetes disponibles, mientras que el segundo instala las actualizaciones correspondientes.

La diferencia en mi caso es que estoy trabajando directamente como root, por lo que no necesito anteponer sudo a los comandos. Además, en esta instalación todavía no tenía disponible esa herramienta.

:::tip Una aclaración importante 
En Arch Linux conviene realizar las actualizaciones completas mediante pacman -Syu y evitar actualizar únicamente las bases de datos con pacman -Sy para después instalar paquetes de manera aislada. Esto puede generar incompatibilidades por actualizaciones parciales.
:::

## Ubicación actual

Ahora que sabemos quiénes somos y qué sistema estamos utilizando, vamos a comprobar dónde estamos trabajando y qué información tenemos disponible sobre nuestro entorno.

Para ello ejecuté los siguientes comandos:

```bash title="Bash"
pwd             # /mnt/c/Users/Usuario
echo "$HOME"    # /root
echo "$SHELL"   # /usr/bin/bash
```

¿Qué significa cada uno?

- **pwd:** muestra el directorio de trabajo actual. En este caso, estamos dentro del sistema de archivos de Windows, al que WSL2 permite acceder mediante /mnt/c/.
- **HOME:** indica cuál es el directorio personal del usuario actual. Como estoy trabajando como root, su valor es /root. Su valor cambiará cuando cree mi usuario.
- **SHELL:** contiene la ruta de la shell configurada para el usuario. En este caso, /usr/bin/bash, correspondiente a Bash.

Las variables de entorno (representadas con "$"), contienen información que utilizan los procesos y programas del sistema.

## Herramientas disponibles

Me puse a ver qué teníamos para comenzar y, para mi sorpresa, faltaba el pan y de lo demás no había nada. Jajaja.

Para comprobar qué herramientas estaban disponibles, utilicé el siguiente comando que permite consultar si un comando se encuentra disponible y conocer su ubicación. Por ejemplo:

```bash title="Bash"
command -v curl
```

Luego repetí la comprobación con otras herramientas que seguramente iba a necesitar como vim, sudo, python, git, o wget. Para mi sorpresa, lo único que tenía disponible era curl. Del resto no había nada.

Esto no significa que haya algún problema con Arch Linux. Simplemente estamos ante una instalación inicial bastante minimalista, en la que tendremos que incorporar las herramientas que necesitemos a medida que avancemos.