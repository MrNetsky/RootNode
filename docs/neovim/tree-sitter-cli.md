---
id: instalacion-tree-sitter
title: "Instalación de tree-sitter"
sidebar_label: "tree-sitter-cli"
sidebar_position: 5
description: Descarga y configuración
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
Hay dos cosas que hay que tener en cuenta antes de la instalación, un compilador y la paquetería necesaria para poder instalar esta herramienta.

## Compilador de C
Es requisito FUNDAMENTAL tener instalado un complilador de C para que nvim-treesitter pueda instalar cualquier parser de idioma. Esto es porque tree-sitter-cli es la herramienta gestora que coordina la creación de la biblioteca del parser, mientras que el complilador de C transforma el código fuente del parser, en la biblioteca binaria que NeoVim usar para entender el código.

Para ello, debemos verificar si tenemos uno instalado en el sistema. Toda distro de Linux viene con un compilador de C instalado como gcc:

```bash title="bash"
gcc --version
```

Pero sino también podemos instalar clang:

```bash title="bash"
sudo apt install clang
```

Y posteriormente verificamos la versión:

```bash title="bash"
clang --version
```

## Gestor de paquetes

Es necesario instalar NodeJS y npm previamente. Esto es debido porque la herramienta está escrita en JS/TS y se ejecuta en dicho entorno y para poder instalarla necesitamos el gestor de paquetes de dicho entorno.

```bash title="bash"
sudo apt install nodejs npm
```

Verificar que todo se haya instalado bien.

```bash title="bash"
nodejs --version
npm --version
```

## Instalación de tree-sitter

Ahora que estamos listos podemos instalar tree-sitter-cli.

```bash title="bash"
sudo npm install -g tree-sitter-cli
```

Para que el binario se ubique en el PATH (como usr/local/bin), es necesario utilizar -g. Finalmente corroboramos que todo funcione correctamente.

```bash title="bash"
tree-sitter --version
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

## Compilador de C

Necesitaremos un compilador de C para ello instalaremos Visual Studio Build Tools, que incluye msvc (Microsoft visual C++, que será nuestro compilador). Esta instalación podemos hacerla de dos maneras. Una es decargando el instalador y la otra, que veremos a continuación es por la terminal.

```powershell title="PowerShell"
winget install Microsoft.VisualStudio.2022.BuildTools
```

Posteriosmente pulsamos la tecla windows y buscamos Visual Studio Installer. Cuando se abra, oprimí la opción de modificar. Fijate si está seleccionada la opción que dice 'Desarrollo para el escritorio con C++', si no lo está, seleciónala y luego oprime instalar.

## Gestor de paquetes

También necesitaremos NodeJS y npm para poder instalar tree-sitter. Para ello, escribiremos lo siguiente.

```powershell title="PowerShell"
winget install OpenJS.NodeJS
```

## Instalación de tree-sitter

Ahora que estamos listos podemos instalar tree-sitter-cli.

```bash title="PowerShell"
sudo npm install -g tree-sitter-cli
```
Para que el binario se ubique en el PATH (como usr/local/bin), es necesario utilizar -g. Finalmente corroboramos que todo funcione correctamente.

```bash title="PowerShell"
tree-sitter --version
```

  </TabItem>
</Tabs>


