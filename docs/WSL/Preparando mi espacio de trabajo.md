---
id: preparando-mi-espacio-de-trabajo
title: Preparando mi espacio de trabajo
sidebar_label: Herramientas necesarias
sidebar_position: 5
description: Instalando mis herramientas necesarias.
tags:
  - linux
  - windows
  - wsl
  - git
  - python
  - docusaurus
keywords: [arch, linux, wget, python, tmux, git, npm, nodejs, pnpm, corepack]
---

Creo que esto podría haberlo hecho antes de configurar el usuario y sus privilegios, pero preferí dejarlo para después, una vez que ya tenía preparado mi entorno de trabajo.

### Instalación de herramientas

Comencé instalando algunas herramientas necesarias para trabajar en el entorno, como Git, Python y demás utilidades. Para ello ejecuté:

```bash title="Bash"
sudo pacman -S git tmux python wget
```

En lugar de instalar cada paquete por separado, podemos indicar todos sus nombres en un mismo comando. De esta manera, Pacman los instala en una única operación.

### Preparación del entorno para Docusaurus

Después instalé las herramientas necesarias para trabajar con los proyectos desarrollados con Docusaurus. Para ello ejecuté:

```bash title="Bash"
sudo pacman -S nodejs-lts-krypton # Instala Node.js 24.x LTS.
sudo pacman -S npm                # Instala el gestor de paquetes npm.
sudo pacman -S corepack           # Instala Corepack.
sudo corepack enable pnpm         # Habilita pnpm a través de Corepack.
```

*Node.js* es el entorno de ejecución de JavaScript que permite ejecutar código fuera del navegador. Docusaurus utiliza Node.js para funcionar y construir los sitios web. *npm* es el gestor de paquetes que acompaña a Node.js que le permite instalar y administrar las dependencias de los proyectos.

Por su parte, *Corepack* es una herramienta que permite gestionar versiones de administradores de paquetes como *pnpm* y *Yarn*, facilitando el uso de distintas versiones según las necesidades de cada proyecto.

### Selección automática de la versión de pnpm

Los dos proyectos con los que trabajo en Docusaurus requieren versiones diferentes de pnpm, particularmente las versiones 8 y 9. Para instalarlas mediante Corepack y poder utilizar ambas versiones, ejecuté:

```bash title="Bash"
corepack install --global --cache-only pnpm@8 pnpm@9
```

Corepack permite ejecutar una versión específica del gestor de paquetes y almacenar las versiones descargadas en su caché. De esta manera puedo disponer de ambas sin necesidad de cambiar los archivos `package.json` de mis proyectos.

Luego creé una función Bash para seleccionar automáticamente la versión de pnpm según el directorio del proyecto, sin tener que escribir comandos adicionales cada vez que utilizo la terminal. Para ello abrí el archivo de configuración de Bash con Neovim:

```bash title="Bash"
nvim ~/.bashrc
```

Al final del archivo agregué lo siguiente:

```bash title="Bash"
# pnpm version management
pnpm() {
    case "$PWD" in
        */Documentacion|*/Documentacion/*)
            corepack pnpm@8 "$@"
            ;;
        */RootNode|*/RootNode/*)
            corepack pnpm@9 "$@"
            ;;
        *)
            command pnpm "$@"
            ;;
    esac
}
```

Explicación de la función:

- `pnpm()`: declara una función de Bash llamada `pnpm`.
- `case "$PWD" in`: evalúa el directorio de trabajo actual. `$PWD` contiene la ruta del directorio en el que estamos ubicados.
- `*/Documentacion`: reconoce la carpeta raíz del proyecto Documentacion.
- `*/Documentacion/*`: reconoce cualquier subdirectorio dentro de Documentacion.
- `*/RootNode` y `*/RootNode/*`: realizan la misma comprobación para RootNode.
- `corepack pnpm@8 "$@"`: ejecuta pnpm 8 y transmite todos los argumentos recibidos por la función.
- `corepack pnpm@9 "$@"`: hace lo mismo utilizando pnpm 9.
- `command pnpm "$@"`: ejecuta el comando pnpm externo cuando estamos fuera de esos dos proyectos. `command` evita que Bash vuelva a llamar a nuestra propia función, lo que produciría una recursión.
- `;;`: finaliza cada alternativa de la estructura `case`.
- `esac`: cierra la estructura condicional.

La expresión `"$@"` permite transmitir todos los argumentos recibidos, conservando cada uno de ellos por separado. Esto es importante para que los parámetros de pnpm lleguen correctamente al comando original. Una vez guardados los cambios, recargué la configuración con:

```bash title="Bash"
source ~/.bashrc
```

Luego comprobé que la selección automática funcionara y lo hizo. De esta manera, Bash selecciona automáticamente la versión correspondiente cuando ejecuto `pnpm`.

### Instalación de las dependencias de los proyectos

Una vez realizadas las comprobaciones pertinentes, procedí a instalar las dependencias declaradas en los proyectos. Para ello utilicé:

```bash title="Bash"
pnpm install --frozen-lockfile
```

Este comando instala las dependencias necesarias utilizando la información declarada en `package.json` y el archivo de bloqueo `pnpm-lock.yaml`.

El parámetro `--frozen-lockfile` indica que pnpm debe respetar el archivo de bloqueo existente y no modificarlo. Si el archivo `pnpm-lock.yaml` no está sincronizado con `package.json`, la instalación falla en lugar de actualizarlo automáticamente.

Esto permite conservar las versiones de las dependencias definidas para cada proyecto y mantener una instalación reproducible.

De esta manera, ya tengo preparado el entorno para trabajar con ambos proyectos de Docusaurus desde Arch Linux en WSL2, utilizando la versión de pnpm correspondiente a cada uno.