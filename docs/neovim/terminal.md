---
id: terminal
title: "Instalación de una nueva terminal"
sidebar_label: "Terminal"
sidebar_position: 7
description: Elección e instalación de una nueva terminal.
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

:::danger IMPORTANTE
Si no descargas alguna de estas dos terminales, deberás elegir otra, ya que soportan todos los colores e íconos de lazyvim y las nerdfonts. Se sugieren estas: alacritty, kitty(Linux y MacOS), wezterm, iterm2(MacOS) y ghostty(Linux y MacOS).
:::

## alacritty

Yo elegí esta ya que este proceso lo llevo a cabo en una notebook HP 530 del 2008 y es la que menos recursos le significaban a mi equipo. 

El proceso es el siguiente:

```bash title="bash"
sudo apt install alacritty 
```
Posteriormente corroboro la versión.

```bash title="bash"
alacritty --version
```

## ghostty

Elegí esta terminal porque me gustó lo que vi, para probarla, ya que ahora quiero instalar nuevamente lazyvim pero en una notebook más actual, una Lenovo T470s del 2017. El proceso es sencillo y es el siguiente:

```bash title="bash"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh)"
```

Posteriormente corroboro la versión.

```bash title="bash"
ghostty --version
```

En caso de que tengas una distro diferente de Debian o sus derivados, en su [<u>página</u>](https://ghostty.org/docs/install/binary#linux-(official)) podrás ver cómo descargarla.

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

## Instalación de Wezterm

:::danger IMPORTANTE
Si no descargas esta terminal, deberás elegir otra, ya que soportan todos los colores e íconos de lazyvim y las nerdfonts. Se sugieren estas: alacritty, kitty(Linux y MacOS), wezterm, iterm2(MacOS) y ghostty(Linux y MacOS).
:::

Descargaremos el ejecutable desde esta [página](https://wezterm.org/install/windows.html). Lo buscamos en la carpeta que lo hayamos descargado y lo iniciamos. Le damos a siguiente hasta que finalice la instalación.

Poco uso le dí pero lo poco que lo usé, no me gustó mucho, razón por la cual, le cambié la fuente a powershell, lo usé. Para mi sorpresa, anda bárbaro. Por ello dejé de usar Wezterm.

  </TabItem>
</Tabs>

