---
sidebar_position: 10
---

# Instalación de lazyvim
Hacer una copia de seguridad de mis archivos actuales de NeoVim. Vease que los 3 que están separados, NO son obligatorios, pero si recomendables.
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