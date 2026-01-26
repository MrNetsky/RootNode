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
# 

**Contenidos:**
+ ¿Qué es WSL?
+ ¿Cómo se configura?
+ Instalaciones iniciales

## Instalación inicial
Primero es necesario instalar el sofware. Posteriormente reiniciaremos el equipo

```bash
wsl --install
```

Ya teniendo el entorno donde funcionará el S.O., deberemos instalarlo, yo elegí Ubuntu, ya que recién me estoy introduciendo al mundo Linux y en mi laptop estoy usando un Linux Mint en su versión Mate, que posee un funcionamiento similar.

```bash
wsl.exe --install Ubuntu
```
Antes de finalizar la instalación, te pedirá que crees tu usuario y contrasaña.

Para usar wsl, simplemente tenemos que escribir en la terminal wsl y empezará a funcionar con el SO que tengamos instalada. En caso de que hayas instalado 2 o más funcionará con la versión que esté por default.