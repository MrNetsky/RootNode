---
slug: tmux
title: 'Divide y vencerás: Cómo tmux cambió mi forma de trabajar en la terminal'
sidebar_label: Tutorial de tmux
authors: [MrNetsky]
tags: [linux]
---

import Comment from '@site/src/components/GiscusComponent';

Comencemos explicando... ¿Qué es? Bueno, es un multiplexor de terminal, pero... ¿Qué significa multiplexor? Significa que tiene la capacidad de dividir la pantalla de la terminal, tanto en vertical como en horizontal, en sectores o paneles más pequeños. Además te permite que procesos que se ejecutan en la terminal, lo hagan en segundo plano. 

### ¿Cómo llego a esta herramienta? Mi experiencia con Tmux

Debido a que trabajaba con una HP 520, con 4Gb de RAM, 265Gb SSD y un Intel Celeron M 520 de 1.60GHz, programas como VSC, no podía ejecutarlos con agilidad, por ello, empecé a trabajar con NeoVim, particularmente con LazyVim, que se ejecuta en la terminal, pero el tener que otros programas en la terminal, me hace necesario tener que abrir múltiples pestañas, pero en ese contexto un amigo me sugirió usar tmux, lo cual, al recién estar iniciándome con Linux, se me hacía complicado. 

Pero en poco tiempo le agarrás la mano, se vuelve vital para un funcionamiento óptimo con la terminal y te ahorra bastante tiempo al no depender del uso del mouse.

Actualmente lo utilizo tanto en mi nueva notebook como en mi pc de escritorio, independientemente de la terminal, ya que en Ghostty para Linux tiene la función de multiplexor, al igual que PowerShell en Windows, pero creo que tmux no sólo es superior, sino que también es más cómodo, permitiéndote "portear" tu manera de trabajar en la terminal de un SO a otro y de una terminal a otra. Yo particularmente lo recomiendo.

### ¡Empieza a usarlo!

No podemos iniciar sin haberla instalado, por ello, primero ejecutaremos el siguiente comando:

```bash title="bash"
sudo apt install tmux
```
:::warning Atención
Tenga en cuenta que la instalación fue hecha en un Linux Mint, cuya paquetería es apt y para usarlo en Windows utilicé WSL con Ubuntu 24.04 cuya paquetería también es apt, por lo que si usas una distro diferente que no provenga de Debian, la manera de instalarlo será diferente.
:::
Y para poder empezar a usarla lo que deberemos hacer es lo siguiente:

```bash title="bash"
# 1er inicio => Si no los has usado antes o si NO has dejado una sesión abierta.
tmux

# Continuar sesión
tmux attach
```
### Comando necesarios

| <div align="center">Prefix</div> | <div align="center">Atajo</div> | <div align="center">Acción</div> |
| :---: | :---: | :--- |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>?</kbd> | **Ayuda:** Abrir la pantalla con todos los comandos. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>d</kbd> | **Detach:** Desacoplar sesión (queda en segundo plano). |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>"</kbd> | Dividir pantalla en **horizontal**. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>%</kbd> | Dividir pantalla en **vertical**. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> | **Moverse** entre paneles. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>z</kbd> | **Zoom:** Pantalla completa del panel (repetir para volver). |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>Alt</kbd>&nbsp;+&nbsp;<kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> | **Redimensionar** el panel actual. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>Espacio</kbd> | Cambiar entre diseños (**layouts**) predefinidos. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>x</kbd> | Cerrar el panel actual. |
| <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>b</kbd> | <kbd>&</kbd> | Cerrar la ventana completa. |

Otro comando importante pero fuera de tmux es el siguiente:

```bash title="bash"
tmux ls
```
El cual nos permite ver las diferentes sesiones activas.

Tenga en cuenta que hay un montón de comandos más pero es lo mínimo necesario para arrancar, además con sólo esto ya notará una gran diferencia con su manera de usar la terminal, previo al uso de esta herramienta.

<Comment />