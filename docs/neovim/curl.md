---
id: instalacion-curl
title: "Instalación de curl"
sidebar_label: "curl"
sidebar_position: 6
description: Instalación de curl para distribuciones Linux con paquetería apt
tags:
  - linux
  - lazyvim
  - wsl
keywords: [neovim, lazyvim, linux mint]
---

El proceso es sencillo y puede que ni siquiera debas instalarlo, porque ya se encuentra en tu equipo, por lo que te recomendaría verificar la versión, si te la devuelve, omite este paso, de lo contrario... Escribimos en la terminal:
```bash
sudo apt install curl
```
Similar que en git, simplemente es ésto. Aún así verificaremos la versión para serciorarnos que se haya realizado con éxito.

```bash
curl --version 
```