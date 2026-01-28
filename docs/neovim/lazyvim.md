---
id: instalacion-lazyvim
title: "Instalación de lazyvim"
sidebar_label: "lazyvim"
sidebar_position: 10
description: Instalación y primer arranque.
tags:
  - linux
  - lazyvim
  - wsl
keywords: [neovim, lazyvim, linux mint]
---

Hacer una copia de seguridad de mis archivos actuales de NeoVim. Vease que los 3 que están separados, NO son obligatorios, pero si recomendables en caso de que ya hayas usado NeoVim con anterioridad y quieras guardar tus configuraciones antíguas. Si unicamente has instalado NeoVim para usar LazyVim, no es necesario que hagas esto, dado que, no hay nada que guardar.
```bash
mv ~/.config/nvim{,.bak}

mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```
Clonar el motor de arranque:
```bash
git clone https://github.com/LazyVim/starter ~/.config/nvim
```
Elimina la carpeta .git para que puedas agregarla a tu propio repositorio más tarde.
```bash
rm -rf ~/.config/nvim/.git
```
¡Empieza Neovim!

```bash
nvim
```