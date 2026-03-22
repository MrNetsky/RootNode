---
slug: nvim
title: 'LazyVim: Diferencias entre Windows y Linux'
sidebar_label: LazyVim
authors: [MrNetsky]
tags: 
    - linux
    - lazyvim
---

import Comment from '@site/src/components/GiscusComponent';

Como ya habrás notado en mi página, algo que es de mi total interés es LazyVim, pero específicamente... ¿Qué es? Bueno es un framework de NeoVim. Bien... ¿Pero qué es un framework? Bueno... Es un conjunto de configuraciones y plugins pre-seleccionados que se instalan sobre Neovim para transformarlo en algo parecido a un IDE moderno. 

Originalmente lo aprendí a usar por necesidad, pero posteriormente me gustó y mantuve su uso. Razón por la cual, decidí que quería usarlo en mi PC de escritorio cuyo sistema operativo es Windows. Su instalación, aunque distinta, no es dificil, hasta te diría que es un poco mas sencilla. *<u>Aclaración importante</u>: La instalación no la hice a traves de WSL, sino que la llevé a cabo 100% dentro de Windows.*

Luego de finalizado el proceso, quise abrir los proyectos alojados dentro de WSL y aquí *'pasaron cosas'.* Cada ruta a cada proyecto de WSL daba error, lo primero que pensé fue que había cometido errores en la instalación. Pero volviendo hacia atras en los comandos que había ejecutado, no los encontraba.

Entonces intento ejecutar un proyecto que tenía en una carpeta de Windows, para mi sorpresa, funciona espectacular. Intento hacer lo mismo, pero desde WSL y con unas leves modificaciones al comando, y también funciona. A continuación pueden ver las diferencias en lo comandos.

```bash title="bash"
nvim.exe "[RUTA]"
```

```powershell title="PowerShell"
nvim "[RUTA]"
```

Lo que me lleva a pensar que hay problemas con las rutas de las carpetas que le estoy dando, tanto a PowerShell, como a WSL. Pero luego de ver que hay problemas en la interoperatividad entre ambos sistemas, decido instalar LazyVim, dentro de WSL.

El proceso fue sencillo, como 'sudo apt install neovim' me da la versión 0.9.5, escribí lo siguiente:

```bash title="bash"
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz
sudo rm -rf /opt/nvim-linux-x86_64
sudo tar -C /opt -xzf nvim-linux-x86_64.tar.gz
```

Posteriormente seguí la guía de instalación de LazyVim para Linux que puedes ver en la parte de la documentación, logrando que funcione con normalidad todos mis proyectos de WSL. 

Más allá de que todo ahora funciona de buena manera, me queda una sensación de incompletitud. Sensación que, en el futuro próximo no voy a atender, pero si me gustaría lograr que si instalo una herramienta en un entorno, en este caso LazyVim, funcione para ambos sistemas y que no tenga que hacer dos veces el mismo proceso. 

No obstante, si vos sabes algo al respecto y puedes ayudarme, te invito a que me dejes tu sugerencia en los comentarios. Y con todo esto dicho, me despido... ¡Hasta luego!

<Comment />
