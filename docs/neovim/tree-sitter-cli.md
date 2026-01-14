---
sidebar_position: 5
---

# Instalación de tree-sitter-cli
Es requisito FUNDAMENTAL tener instalado un complilador de C para que nvim-treesitter pueda instalar cualquier parser de idioma. Esto es porque tree-sitter-cli es la herramienta gestora que coordina la creación de la biblioteca del parser, mientras que el complilador de C transforma el código fuente del parser, en la biblioteca binaria que NeoVim usar para entender el código.

Para ello, debemos verificar si tenemos uno instalado en el sistema. Toda distro de Linux viene con un compilador de C instalado como gcc:
```bash
gcc --version
```
Pero sino también podemos instalar clang:
```bash
sudo apt install clang
```
Y posteriormente verificamos la versión:
```bash
clang --version
```

Es necesario instalar NodeJS y npm previamente. Esto es debido porque la herramienta está escrita en JS/TS y se ejecuta en dicho entorno y para poder instalarla necesitamos el gestor de paquetes de dicho entorno.
```bash
sudo apt install nodejs npm
```
Verificar que todo se haya instalado bien.
```bash
nodejs --version
npm --version
```
Ahora que estamos listos podemos instalar tree-sitter-cli.
```bash
sudo npm install -g tree-sitter-cli
```
Para que el binario se ubique en el PATH (como usr/local/bin), es necesario utilizar -g. Finalmente corroboramos que todo funcione correctamente.
```bash
tree-sitter --version
```
