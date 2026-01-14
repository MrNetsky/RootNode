---
sidebar_position: 8
---

# Instalación de fzf-lua

:::tip NOTA
Esta instalación es OPCIONAL
:::
Es un plugin que integra la potencia del motor de busqueda fzf, con NeoVim, para que pueda integrarse con otros backends como lo son ripgrep y fdfind. fd se encarga de encontrar archivos, mientras que rg busca contenido (texto) dentro de los archivos.
```bash
sudo apt install fzf fd-find ripgrep
```
Consulte las versiones para verificar que todo ha sido instalado de manera correcta, de la siuiente manera:
```bash
fzf --version
fdfind --version
rg --version 
```
Cabe aclarar que aún queda algo más por hacer. El motor de búsqueda es fd, NO fd-find, por lo que debemos crear un 'atajo' para lograr que funcione. Para ello lo haremos de la siguiente manera:

1. Averiguar dónde se encuentra fd-find:
```bash
which fdfind
```
2. Descubrir dónde debo ubicar dicho link:
```bash
echo $PATH
```
Allí encontraremos la carpeta usr/local/bin que es la carpeta para los programas (binarios, de ahí bin) instalados por el usuario que sn gestionados por el gestor de paquete apt.

3. Una vez que sé dónde esta el archivo y dónde lo ubicaré, el comando a usar es ln -s (Link simbólico) de la siguiente manera:
```bash
sudo ln -s /usr/bin/fdfind /usr/local/bin/fd 
```
