---
id: instalacion-wsl
title: "WSL: La ventana de Windows hacia Linux"
sidebar_label: "Instalación"
sidebar_position: 1
description: Elección e instalación de una distro Linux.
tags:
  - linux
  - lazyvim
  - neovim
  - wsl
keywords: [neovim, lazyvim, linux mint]
---

## ¿Qué es WSL2?

Windows Subsystem for Linux (WSL) es una característica de Windows que permite ejecutar distribuciones Linux directamente desde el sistema operativo, sin necesidad de configurar una máquina virtual tradicional o realizar un arranque dual.

WSL2 es la segunda generación de esta tecnología y utiliza un kernel Linux real dentro de un entorno virtualizado, proporcionando una mayor compatibilidad con las herramientas y funcionalidades propias de Linux.

Esto permite trabajar con distribuciones como Ubuntu, Debian o Arch Linux desde Windows, utilizando sus respectivas herramientas, gestores de paquetes y entornos de desarrollo.

En mi caso, WSL fue mi primera aproximación a Linux desde mi computadora de escritorio con Windows. En aquel momento elegí Ubuntu 24.04 LTS porque ya tenía cierta familiaridad con Linux Mint en mi laptop y quería comenzar con una distribución basada en Debian, cuyo funcionamiento me resultaba más accesible.

## Instalación de WSL2

Lo primero que necesitamos es instalar WSL en Windows.

Para ello abrí PowerShell 7 con privilegios de administrador y ejecutamos:

```powershell title="PowerShell"
wsl --install
```

Este comando instala los componentes necesarios para ejecutar WSL2. Una vez finalizado el proceso, puede ser necesario reiniciar el equipo para completar la instalación y honestamente yo no recuerdo si lo hece o no.

## Instalación de Ubuntu 24.04 LTS

Una vez instalado WSL, podemos consultar las distribuciones disponibles para instalar:

```powershell title="PowerShell"
wsl --list --online
```

En mi caso elegí Ubuntu 24.04 LTS. Para instalarla podemos ejecutar:

```powershell title="PowerShell"
wsl --install -d Ubuntu-24.04
```

Al finalizar la instalación, iniciamos Ubuntu mediante:

```powershell title="PowerShell"
wsl
```

Durante el primer inicio, Ubuntu nos solicitará crear un nombre de usuario y una contraseña. Estos datos corresponden al usuario de Linux y son independientes de las credenciales de nuestra cuenta de Windows.

Una vez completado este procedimiento, ya tenemos nuestro entorno Linux funcionando dentro de Windows.

## Primeros pasos en Ubuntu

Antes de comenzar a instalar herramientas, lo primero que hice fue actualizar las listas de paquetes disponibles y posteriormente instalé las actualizaciones:

```bash title="Bash"
sudo apt update
sudo apt upgrade
```

Es importante distinguir ambos comandos: `apt update` actualiza la información de los repositorios, mientras que `apt upgrade` instala las versiones más recientes de los paquetes que ya tenemos instalados.

## Instalación de herramientas básicas

Una vez actualizado el sistema, comencé a instalar algunas herramientas que necesitaba para trabajar.

Entre ellas se encontraban Git, tmux, Python, wget y Neovim.

Para instalarlas utilicé:

```bash title="Bash"
sudo apt install git tmux python3 wget neovim
```

## Preparación del entorno para Docusaurus

Además de las herramientas anteriores, necesitaba preparar el entorno para trabajar con mis proyectos desarrollados con Docusaurus.

Para ello instalé Node.js, npm y Corepack, que permiten ejecutar aplicaciones JavaScript y administrar las dependencias de los proyectos.

```bash title="Bash"
# Instalación de Node.js y npm
sudo apt install nodejs npm

# Instalación de Corepack
sudo npm install -g corepack

# Habilitar pnpm mediante Corepack
sudo corepack enable pnpm
```