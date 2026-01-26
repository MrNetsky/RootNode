---
id: instalacion-neovim
title: "Instalación de NeoVim"
sidebar_label: "NeoVim"
sidebar_position: 2
description: Guía para instalar versiones recientes de NeoVim en Linux Mint.
tags:
  - linux
  - neovim
  - lazyvim
keywords: [instalar neovim]
---

:::tip NOTA 
Para la instalación de lazyvim es importante tener una versión a 0.11.2 o posterior. 
:::

```bash
sudo apt install neovim
```

Es probable que instale un versión más antigua, pero estable, en mi caso fue la 0.9.5, entonces lo que hice fue elegir la versión, luego descargar el archivo .appimage o .tar.gz de la siguiente <u>[**página**](https://github.com/neovim/neovim/releases)</u>. Yo en este caso elegí la versión 0.11.5 y descargaré el archivo nvim-linux-x86_64.tar.gz. Con esto listo, hacemos lo siguiente:

```bash
tar xzvf nvim-linux-x86_64.tar.gz
```
Una vez extraidos los datos del archivo, ya quedó listo, el siguiente código **NO** es una instalación, lo que escribiremos es una ruta de acceso:

```bash
./nvim-linux-x86_64/bin/nvim
```
Aquí ya quedó funcionando, pero escribir el código anterior cada vez que querramos usar NeoVim es impráctico, por lo que procederemos a 'renombrarlo'. Lo que hace esta primera linea de código, es que cada vez que se escriba 'nvim' ejecute './nvim-linux-x86_64/bin/nvim', haciendo más cómodo el uso de NeoVim.
```bash
echo "alias nvim='~/Descargas/nvim-linux-x86_64/bin/nvim'" >> ~/.bashrc
```
Lo que hace la segunda línea de código es ejecutar los cambios inmediatamente. Esto lo hacemos para no tener que cerrar y abrir nuevamente la terminal para que se apliquen los cambios.
```bash
source ~/.bashrc
```