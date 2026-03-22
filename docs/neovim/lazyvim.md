---
id: instalacion-lazyvim
title: "Instalación de lazyvim"
sidebar_label: "lazyvim"
sidebar_position: 10
description: Instalación y primer arranque.
tags:
  - linux
  - lazyvim
  - wsl
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
Hacer una copia de seguridad de mis archivos actuales de NeoVim. Vease que los 3 que están separados, NO son obligatorios, pero si recomendables en caso de que ya hayas usado NeoVim con anterioridad y quieras guardar tus configuraciones antíguas. Si unicamente has instalado NeoVim para usar LazyVim, no es necesario que hagas esto, dado que, no hay nada que guardar.

```bash title="bash"
mv ~/.config/nvim{,.bak}

mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```

Clonar el motor de arranque:

```bash title="bash"
git clone https://github.com/LazyVim/starter ~/.config/nvim
```

Elimina la carpeta .git para que puedas agregarla a tu propio repositorio más tarde.

```bash title="bash"
rm -rf ~/.config/nvim/.git
```

¡Empieza Neovim!

```bash title="bash"
nvim
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
Se sugiere hacer en primera instancia una copia de seguridad de tus archivos de neovim, si lo has usado con anterioridad, pero si no es el caso puedes saltar este paso.

Lo que haremos ahora es movernos a la carpeta User/TU_USUARIO/AppData/Local/nvim. Pero yo no tenía la carpeta, así que lo cloné creando la misma, de la siguiente manera.

```powershell title="PowerShell"
git clone https://github.com/LazyVim/starter nvim
```
Necesariamente debemos borrar la carpeta .git, para ello, debemos movernos a la carpeta de nvim y lo haremos de la siguiente manera.

```powershell title="PoweShell"
cd $env:LOCALAPPDATA\nvim
```

Una vez aquí lo que haremos es borrar la carpete como podrás ver a continuación.

```powershell title="PowerShell"
Remove-Item -Recurse -Force .git
```

Podrás ver ejecutando el siguiente comando que la carpeta .git ya no está.

```powershell title="PowerShell"
Remove-Item -Recurse -Force .git
```

  </TabItem>
</Tabs>

