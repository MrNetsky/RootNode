---
id: instalacion-git
title: "Instalación de git"
sidebar_label: "git"
sidebar_position: 2
description: Instalación y solución de problemas.
tags:
  - linux
  - lazyvim
  - neovim
  - wsl
keywords: [neovim, lazyvim, linux mint]
---

### GIT 

Yo ya lo tenía instalado en mi PC, más precisamente la v2.43, pero ya que iba usar WSL y por ende ejecutar código Linux aquí decidí desinstalarlo y posteriormente reinstalarlo pero desde la terminal de Ubuntu, es por ello que primero hice un update y upgrade. y esto fue lo que hice:

```bash
sudo apt install git
```
Pero para mi sorpresa se instaló la v2.43 y yo sé que hay una versión más actual porque la tengo instalada en mi laptop, por lo que decidí cambiar la dirección en el PPA, de la siguiente manera:

```bash
sudo add-apt-repository ppa:git-core/ppa
```
Finalmente hice un update y upgrade, quedando así, instalada la v2.52. Solo para confirmar chequee la versión y salió todo correcto.

### VS Code

Uno de los problemas que surgió luego de la anterior instalación, fue que me quedé sin git fuera del entorno de WSL, por ejemplo en VS Code, por lo que para gestionar mi repo actual, lo primero que hice fue descargar la extensión de WSL en VS Code. 

Para ello pongan wsl en el buscador de extensiones y descarguenla de ahí, podrán identificarla facilmente ya que es posee muchas descargas y fue creada por Microsoft. 

Una vez instalada, habrá que sincronizar estas dos herramientas, para ello, primero viaje hasta la carpeta de su proyecto y luego escriba lo siguiente:

```bash
code .
```
Luego de esto, podrá ver en la esquina inferior izquierda que VS Code se ha conectado con WSL, incluso indicando con cual S.O., en mi caso Ubuntu.

Listo, pero... ¿Realmente lo está? Pese a que funcionaba todo en mi pc lo que me pregunté fue: ¿Funcionará con proyectos que no tengan nada que ver con WSL? La respuesta es no, pero no era algo que sorprendiera, al menos para mi, fué lógico. Entonces ¿qué haremos? Pues solucionarlo.

1. Hacer lo mismo en c/u de los repositorios en los que trabajes. No es un laburaso, pero no me pinta.

2. Configurar git.path en VS Code
    1. No puede JAAAAAAAAAAAAAAA
    2. Sé que se puede, pero no supe/no pude. Por lo que recaí en la opción 3
    3. Reinstalar GIT en la pc, descargar el ejecutable e instalar. Posterior a eso todas las carpetas ajenas a wsl funcionan con git.