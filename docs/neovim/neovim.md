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
Para instalar LazyVim es importante contar con NeoVim 0.11.2 o una versión posterior.
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

    Es probable que el gestor de paquetes instale una versión más antigua, aunque estable. En mi caso fue la versión 0.9.5. Por ello decidí descargar una versión más reciente desde la <u>[**página de lanzamientos de NeoVim**](https://github.com/neovim/neovim/releases)</u>, ya sea en formato `.appimage` o `.tar.gz`.

    <Tabs>
      <TabItem 
        value="tarball" 
        label={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Instalación desde el archivo Tarball</span>
          </div>
        } 
      >
        
      En mi caso elegí la versión 0.11.5 y descargué el archivo `nvim-linux-x86_64.tar.gz`. Una vez descargado, hacemos lo siguiente:

      ```bash title="bash"
      tar xzvf nvim-linux-x86_64.tar.gz
      ```

      Una vez extraído el contenido del archivo, NeoVim ya está listo para utilizarse. El siguiente comando no realiza ninguna instalación; simplemente ejecuta el binario desde la carpeta recién extraída.

      ```bash title="bash"
      ./nvim-linux-x86_64/bin/nvim
      ```

      Aquí ya quedó funcionando, pero escribir el código anterior cada vez que querramos usar NeoVim es impráctico, por lo que procederemos a 'renombrarlo'. 

      ```bash title="bash"
      # Cada vez que se escriba 'nvim' ejecute './nvim-linux-x86_64/bin/nvim', haciendo más cómodo el uso de NeoVim.
      echo "alias nvim='~/Descargas/nvim-linux-x86_64/bin/nvim'" >> ~/.bashrc
      #Recargar para actualizar.
      source ~/.bashrc
      nvim --version 
      ```

      Si llegaste hasta aquí y devuelve una versión igual que has descargado, ya tienes todo lo necesario para continuar con la instalación de LazyVim.
      
      </TabItem>

      <TabItem 
        value="appimage" 
        label={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Instalación vía AppImage</span>
          </div>
        }
        default
      >

      Desde el repositorio oficial de NeoVim en GitHub descarga el archivo `nvim-linux-x86_64.appimage`. En mi caso descargué la versión 0.12.4. Una vez finalizada la descarga, muévete a la carpeta Descargas (o a la ubicación donde hayas guardado el archivo) y ejecuta lo siguiente:

      ```bash title="Bash"
      chmod u+x nvim-linux-x86_64.appimage && ./nvim-linux-x86_64.appimage
      #Luego de esto se debería ejecutar NeoVim
      ```
      Ahora NeoVim funciona, pero únicamente si ejecutas el archivo desde la carpeta donde lo descargaste. Lo ideal es que esté disponible desde cualquier ubicación del sistema. 

      ```bash title="Bash"
      mkdir -p ~/.local/bin #Crea este directorio.
      mv /ruta/a/tu/archivo/nvim-linux-x86_64.appimage ~/.local/bin/nvim #Mueve el archivo desde donde esté a la carpeta que has creado.
      chmod u+x ~/.local/bin/nvim #Otorga permisos de ejecución.
      ```

      Sin embargo, en Linux Mint MATE la carpeta `~/.local/bin` no venía incluida en mi variable `PATH`. Para solucionarlo edité mi archivo `.bashrc` y añadí la siguiente configuración:
      
      ```bash title="Bash"
      nano ~/.bashrc #Con el editor nano, abre el archivo del PATH.
      #Al final del acrhivo, pega lo siguiente:
      export PATH="$HOME/.local/bin:$PATH" #Recordar guardar y salir.
      source ~/.bashrc #Recargar.
      nvim --version 
      ```

      Si llegaste hasta aquí y devuelve una versión igual que has descargado, ya tienes todo lo necesario para continuar con la instalación de LazyVim.

      </TabItem>
    </Tabs>

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
  Para instalarlo, el proceso es muy sencillo. Solo debes ejecutar el siguiente comando en la terminal:

  ```powershell title="PowerShell"
  winget install nvim
  ```

  Una vez terminado, cierra y vuelve a abrir la terminal. Este proceso te instala la última versión disponible, la cual en mi caso fue la 0.11.6. Al igual que en Linux, puedes verificar la versión instalada mediante el siguiente comando:

  ```bash title="PowerShell"
  nvim --version
  ```

  Si llegaste hasta aquí y devuelve una versión igual o superior a 0.11.2, ya tienes todo lo necesario para continuar con la instalación de LazyVim.

  </TabItem>
</Tabs>
