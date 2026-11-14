---
id: arch-linux-wsl2
title: Instalando Arch Linux en WSL2
sidebar_label: Arch - WSL2
sidebar_position: 2
description: Instalación y configuración de Arch Linux.
tags:
  - linux
  - windows
  - wsl
keywords: [windows, arch, linux, powershell]
---

Yo ya tenía instalado WSL2 con Ubuntu 24.04, pero como planeo instalar un SSD NVMe de 1Tb mi intención es instalar Windows 11 en Dual Boot con CachyOS con Hyperland es de mi interés ir probando Arch, ya que CachyOS, está basasdo en Arch.

Si vos instalaste previamente WSL2 y no sabes cuál distro haz instlado, ejecuta el siguiente comando:

```powershell title="Powershell"
wsl --list --verbose
```

Y si no quieres instalar Arch, pero quieres instalar otra y no sabes si está disponible o no, escribe en la termianal:

```powershell title="Powershell"
wsl --list --online
```

Para instalar la distro que quieras, el comando es el siguiente:

```powershell title="Powershell"
wsl --install archlinux
```

Si eliges otra distro, lo que debes hacer en el `archlinux` poner el nombre de la distro que elijas. Es importante que el nombre que uses sea el de la columna NAME y NO de la otra porque el comando no funcionará, no va a pasar nada más grave que eso.

Ahora bien, como yo tengo actualmente instaladas dos distros, para ejecutar Arch no basta con escribir `wsl`, sino que debo escribir: 

```powershell title="Powershell"
wsl --distribution archlinux
```

Tambien puedo cambiar la distro que se abre por default, ya que actualmente si escribo `wsl` en la terminal, se abrirá Ubuntu 24.04. Esto puede comprobarse al ejecutar nuevamente `wsl --list --verbose` y ver las dos distros, pero delante de la de Ubuntu un asterisco y para cambiar ello, ejecutaré el siguiente comando:

```powershell title="Powershell"
wsl --set-default archlinux
```

Ahora al ejecutar `wsl` se abrirá Arch o puede ejecutar `wsl --list --verbose` y observar que el asterisco ahora se encuentra delante de la distro que ha configurado, en mi caso Arch. También puedes ejecutar `wsl --status` para hacer esta comprobación.