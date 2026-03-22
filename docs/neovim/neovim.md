---
id: instalacion-neovim
title: "Instalación de NeoVim"
sidebar_label: "NeoVim"
sidebar_position: 2
description: Guía para instalar versiones recientes de NeoVim en Linux Mint.
tags:
  - windows
  - linux
  - lazyvim
keywords: [instalar neovim]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl'; 

:::tip NOTA 
Para la instalación de lazyvim es importante tener una versión a 0.11.2 o posterior. 
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
 
```bash title="bash"
sudo apt install neovim
```

Es probable que instale un versión más antigua, pero estable, en mi caso fue la 0.9.5, entonces lo que hice fue elegir la versión, luego descargar el archivo .appimage o .tar.gz de la siguiente <u>[**página**](https://github.com/neovim/neovim/releases)</u>. Yo en este caso elegí la versión 0.11.5 y descargaré el archivo nvim-linux-x86_64.tar.gz. Con esto listo, hacemos lo siguiente:

```bash title="bash"
tar xzvf nvim-linux-x86_64.tar.gz
```

Una vez extraidos los datos del archivo, ya quedó listo, el siguiente código **NO** es una instalación, lo que escribiremos es una ruta de acceso:

```bash title="bash"
./nvim-linux-x86_64/bin/nvim
```

Aquí ya quedó funcionando, pero escribir el código anterior cada vez que querramos usar NeoVim es impráctico, por lo que procederemos a 'renombrarlo'. Lo que hace esta primera linea de código, es que cada vez que se escriba 'nvim' ejecute './nvim-linux-x86_64/bin/nvim', haciendo más cómodo el uso de NeoVim.

```bash title="bash"
echo "alias nvim='~/Descargas/nvim-linux-x86_64/bin/nvim'" >> ~/.bashrc
```

Lo que hace la segunda línea de código es ejecutar los cambios inmediatamente. Esto lo hacemos para no tener que cerrar y abrir nuevamente la terminal para que se apliquen los cambios.

```bash title="bash"
source ~/.bashrc
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
Para instarlo, el proceso es muy sencillo. Solamente debes escribir lo siguiente en la terminal.

```powershell title="PowerShell"
winget install nvim
```

Una vez terminado, cierra y vuelve a abrir la terminal. Este proceso te instala la última versión disponible, la cual en mi caso fue la 0.11.6. Además de manera similar que en Linux, puedes controlar la versión de la siguiente manera.

```bash title="PowerShell"
nvim --version
```

  </TabItem>
</Tabs>
