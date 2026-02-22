---
id: instalacion-git
title: "Instalación git"
sidebar_label: "git"
sidebar_position: 3
description: Instalación de git para distribuciones Linux con paquetería apt
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

:::tip nota
Esta instalación suele ser innecesaria, ya que para la mayoría de sistemas Linux, viene instalado. Pero sino, el proceso es el siguiente
:::
Escribimos en la terminal:
```bash
sudo apt install git
```
Consulta la versión para verificar que se haya instalado correctamente.
```bash
git --version
```
La versión que instale va a ser superior a la necesaria, asi que no hay que hacer nada más.
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
Acá tenemos dos opciones. La primera es descargar el ejecutable desde la siguiente [página](https://git-scm.com/install/windows), yo elegí la versión x64. Una vez completada la descarga, lo que debemos hacer es iniciarlo, dar siguiente hasta el final y ya quedará instalado.

La otra es instalar desde la terminal.

```powershell
winget install --id Git.Git -e --source winget
```
Para cualquiera de los casos, podemos verificar la versión escribiendo lo siguiente.

```bash
git --version
```

  </TabItem>
</Tabs>
