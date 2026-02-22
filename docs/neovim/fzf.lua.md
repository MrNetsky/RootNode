---
id: instalacion-fzf-lua
title: "Instalación de fzf-lua"
sidebar_label: "fzf-lua"
sidebar_position: 8
description: Descarga y configuración.
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

:::tip NOTA
Esta instalación es OPCIONAL
:::

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

## Instalaciones necesarias

Instalamos fd, rg y fzf de la siguiente manera.

```powershell
winget install sharkdp.fd
winget install --id=BurntSushi.ripgrep.GNU -e
winget install junegunn.fzf
```
Posteriormente lazyvim configurará automáticamente fzf-lua.
  </TabItem>
</Tabs>


