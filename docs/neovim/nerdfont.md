---
id: instalacion-nerdfonts
title: "Configuración de NerdFonts"
sidebar_label: "NerdFonts"
sidebar_position: 4
description: Descarga y configuración de una NerdFont
tags:
  - linux
  - lazyvim
  - wsl
  - windows
keywords: [neovim, lazyvim, linux mint]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl'; 

<Tabs>
  <TabItem 
    value="linux" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={useBaseUrl('/img/linux-brands-solid-full.svg')} width="20" height="20" /> 
        <span>Linux</span>
      </div>
    } 
  >
El proceso consta de dos pasos pasos:

## Descarga
Lo primero es es ir al repositorio en [GitHub](https://github.com/ryanoasis/nerd-fonts 'NerdFont en GitHub') y descargar la NerdFont deseada.

:::tip NOTA 
Descargar las fuentes parcheadas.
:::

Una vez hecho eso, es necesario mover los archivos para poder utlizarlos, para ello primero debo ubicar dónde estan mis archivos, para luego reubicarlos.

```bash
mv  ~/Descargas/HackNerdFont-Bold.ttf ~/.local/share/fonts/ttf/
```
El proceso lo repetiremos tantas veces como NerdFont tengamos. Es importante resaltar que la carpeta fonts no existía en mi sistema por ende la tuve crear, mucho menos la carpeta ttf, la cual también cree. Use el procedimiento, pero las carpetas y sus ubicaciones pueden variar de sistema a sistema, por lo que debe tener cuidado.

## Configuración

:::danger IMPORTANTE
Cada editor tendrá su forma para configurar estas fuentes. Aquí sólo se verá la forma de configurarlo en alacritty y ghostty, cuya instlación podrá ver más adelante, por lo que deberá primero instalar y luego volver a esta sección.

En caso de que usted use otra terminal, deberá buscar cómo hacer esta configuración.
:::

### alacritty

Será necesario ir al archivo de configuraciones y editarlo. Yo lo hice en NeoVim, pero puedes hacerlo también en Nano

```bash
nvim ~/.config/alacritty/alacritty.toml
```
No olvide que la fuente aquí mencionada es la que yo elegí, pero hay otras opciones y si usted ha optado por otra, deberá modificar y usar la suya. Una vez aquí, escribiremos lo siguiente:

```bash
[font]

size = 11.0

[font.normal]

family = 'Hack Nerd Font'

[font.bold]

family = 'Hack Nerd Font'

[font.italic]

family = 'Hack Nerd Font'
```

### ghostty

Aquí la sintaxis es un poco diferente, pero en escencia es lo mismo. Por cierto, el tamaño de la letra no es necesario. Yo lo especifiqué así porque es de mi preferencia.
```bash
font-family = "Hack Nerd Font"
font-style = "Regular"
font-style-bold = "Bold"
font-style-italic = "Italic"
font-style-bold-italic = "Bold Italic"

font-size = 13
```
  </TabItem>

  <TabItem 
    value="windows" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={useBaseUrl('/img/windows-brands-solid-full.svg')} width="20" height="20" /> 
        <span>Windows</span>
      </div>
    }
    default
  >

## Descarga

El proceso es sencillo. Primero deberemos acceder a la siguiente [página](https://www.nerdfonts.com/font-downloads), una vez aquí, elegimos la fuente a descargar, incluso para varias de ellas, podemos ver cómo se ven. Luego de haberlas descargado, entramos al .zip e instalamos las que deseemos. Para ello haz doble click en los estilos que desee y le das a instalar. Segeriría que instales minimamente Regular, Bold, BoldItalic e Italic. 

## Configuración

:::danger IMPORTANTE
Cada editor tendrá su forma para configurar estas fuentes. Aquí sólo se verá la forma de configurarlo en wezterm, cuya instlación podrá ver más adelante, por lo que deberá primero instalar y luego volver a esta sección.

En caso de que usted use otra terminal, deberá buscar cómo hacer esta configuración.
:::

Una vez finalizado el proceso anterior, oprimimos 'win' + 'r' y escribimos %USERPROFILE%. En esta carpeta, debemos entrar al archivo .wezterm.lua y si no existe, pues lo creamos para luego escribir lo siguiente.

```lua
local wezterm = require 'wezterm'
local config = wezterm.config_builder()

-- Configuración de la fuente
config.font = wezterm.font 'JetBrainsMono NF'

-- Tamaño de la fuente (ajústalo a tu gusto)
config.font_size = 11.0

return config
```
:::info
En este archivo de confifuraciones también puede cambiar el tema, entre otras modificaciones que puedes hacer a esta terminal.
:::

Cierras y luego vuelves a abrir la terminal, el cambio de fuente debería haberse aplicado con éxito.

  </TabItem>
</Tabs>

