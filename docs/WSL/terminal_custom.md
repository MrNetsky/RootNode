---
id: terminal-cutom-arch
title: Customizando mi terminal
sidebar_label: Terminal custom
sidebar_position: 6
description: Modificando la visual de mi terminal e instalando las herrmientas necesarias para ello.
tags:
  - linux
  - windows
  - wsl
keywords: [arch, linux, oh-my-posh, curl, nerdfonts, wsl, wsl2]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Una vez modificada la estética de Windows Powershell 7, me encuentro con que a Arch, no le aplican dichas modificaciones visuales. Lo cual no es un problema, porque quiero configurarlo para que sea diferente. La idea es que, si tengo que trabajar en una terminal donde una mitad sea PowerShell y la otra Arch/WSL2, pueda distinguirlas fácilmente. Incluso, si tengo que utilizar otra distro dentro de WSL2, esta también tendrá una apariencia diferente a las otras dos.

Dentro de las modificaciones que quiero hacer es instalar una nueva NerdFont. La elegida: **FiraCode**. Esto no implica que desinstalaré la que actualmente uso, la cual es JetBrainsMono, ya que ésta quedará para su uso dentro de PowerShell 7.

## Instlar FiraCode NerdFont

Para ello me dirigí al [repo de nerdfonts](https://github.com/ryanoasis/nerd-fonts/releases/tag/v3.5.1) donde busqué la mía y descargué el archivo `.zip`. 

Una vez dentro de la carpeta podrás observar todos los archivos `.ttf`. Nerd Fonts ofrece distintas variantes de una misma tipografía; para utilizarla en una terminal alcanza con instalar la variante que necesitemos. En mi caso, elegí *FiraCode Nerd Font Mono*.

Para instalarla en Windows hay que hacer doble clic sobre el archivo .ttf. Se abrirá una ventana donde podremos visualizar la tipografía y, arriba a la izquierda, encontraremos el botón Instalar. Lo presionamos y esperamos unos segundos. Una vez finalizado el proceso, la ventana se cerrará. Repetimos el procedimiento con los archivos que queramos instalar.

¿Hay alguna forma menos engorrosa de hacerlo? Seguro, pero yo la desconozco y esto fue lo que hice. ¿Era necesario instalar todas? Honestamente no lo sé, pero prefiero que sobre y no que falte.

:::warning Algo importante
Las fuentes se instalan en Windows, no dentro de Arch Linux. Windows Terminal es quien se encarga de mostrarlas, independientemente de la distribución de WSL2 que estemos utilizando.
:::

## Crear una nueva paleta de colores

Luego cree una paleta nueva de colores para la terminal de Arch, para ello hago `ctrl` + `,` y una vez dentro de configuraciones, abajo a la izquierda dice "Abrir archivo JSON", en la parte inferior izquierda.

Dentro del archivo `settings.json` busqué la propiedad `"schemes":{}`. Ahí yo ya tenía cargado una configuración, la de Tokyo Night, por lo que era importante no reemplazarla.

En Windows Terminal, schemes es un arreglo que contiene los distintos esquemas de colores. Por eso, para agregar uno nuevo, debemos colocar una coma después del objeto anterior y pegar el siguiente esquema como otro elemento del arreglo.

Esta es la paleta que elegí:

```json title="settings.json"
{
    "name": "Arch Carbon",
    "background": "#080A0D",
    "foreground": "#EEE9DF",
    "cursorColor": "#16B8A6",
    "selectionBackground": "#26343A",
    "black": "#080A0D",
    "red": "#E06C75",
    "green": "#65A875",
    "yellow": "#D8B56D",
    "blue": "#6C9BD2",
    "purple": "#B39DDB",
    "cyan": "#16B8A6",
    "white": "#EEE9DF",
    "brightBlack": "#59636F",
    "brightRed": "#F07178",
    "brightGreen": "#83C995",
    "brightYellow": "#E7C77A",
    "brightBlue": "#82AAFF",
    "brightPurple": "#C792EA",
    "brightCyan": "#5DE4C7",
    "brightWhite": "#FFFFFF"
}
```

:::warning Atención
El fragmento anterior representa solamente el objeto que debemos agregar. No hay que reemplazar todo el contenido de schemes ni pegarlo fuera de la estructura principal del archivo.
:::

## Configurar la apariencia del perfil de Arch Linux

Una vez que tuve la fuente y la paleta de colores, me fui con `Ctrl` + `,` a las configuraciones de Windows Terminal. Allí seleccioné el perfil de Arch Linux (vos deberías dirigirte a la distribución que necesites) y, dentro de Apariencia, elegí la paleta de colores y la tipografía.

Peeeeeeeeeero no funcionó. Mi terminal se veía exactamente igual.

No es que haya hecho algo mal, sino que Windows Terminal administra la apariencia de cada perfil de manera independiente. En mi caso, ya tenía configurado el perfil de PowerShell 7, pero eso no significa que los cambios se apliquen automáticamente al perfil de Arch Linux.

Hay otro detalle que puede generar confusión: si abrimos PowerShell 7 y desde allí ejecutamos wsl -d ArchLinux, estaremos iniciando Arch dentro de la sesión que ya teníamos abierta. En ese caso, la apariencia seguirá siendo la del perfil de PowerShell.

Para que Windows Terminal aplique la configuración de Arch, tenemos que abrir directamente el perfil de Arch Linux desde el menú de perfiles de la aplicación.

Si abrimos una terminal de Arch de esta manera, veremos que todo está como debiera. No obstante, esto es impráctico, al menos para mí, por lo que lo solucionaremos más adelante.

## Oh my posh

Por el momento nos iremos a instalar Oh my Posh, y para este fin, necesitamos `curl`, por lo que sugiero que chequees que lo tienes instalado, aunque lo más probable es que si. 

También necesitaremos unzip, realpath y dirname, ya que son dependencias utilizadas por el instalador.

Para instalar Oh My Posh ejecutamos lo siguiente:

```bash title="Bash"
curl -s https://ohmyposh.dev/install.sh | bash -s
```

Pero mientras se instalaba me decía que se había instalado en la carpeta `/home/pablo/.local/bin` misma que **NO** estaba en mi **PATH**, razón por la cual debo agrgarla para que mi equipo pueda encontrar la herramienta que hemos instalado.

Ahora bien... ¿Cómo me dí cuenta que no estaba en mi PATH? Porque los comandos que uso habitualmente para chequear que se haya instalado correctamente no devolvían nada. Por ello hice lo siguiente:

```bash title="Bash"
export PATH="$HOME/.local/bin:$PATH"

command -v oh-my-posh # /home/pablo/.local/bin/oh-my-posh
oh-my-posh version    # 32.1.0
```

El primer comando modifica la variable PATH de la sesión actual, agregando el directorio donde se instaló Oh My Posh. Luego, command -v permite comprobar si el sistema encuentra el ejecutable y oh-my-posh version muestra la versión instalada.

Ahora bien, cuando cerré mi sesión y la abrí, me encontré con la triste realidad de que eso solo había funcionado durante esa sesión. Razón por la cual había que modificar el `.bashrc`. Para ello escribí:

```bash title="Bash"
nvim ~/.bashrc
```

Una vez dentro, agregué al final del archivo `export PATH="$HOME/.local/bin:$PATH"`, que anteriormente habíamos escrito en la terminal. Luego guardé y salí con `:wq`.

## Crear el archivo de configuración de Oh My Posh

Ahora toca crear el `~/.config/oh-my-posh` para luego poder editarlo. 

```bash title="Bash"
mkdir -p ~/.config/oh-my-posh
```

El parámetro -p permite crear los directorios necesarios y evita que el comando falle si el directorio ya existe.

Una vez creado, vamos a generar el archivo de configuración que utilizará Oh My Posh:

```bash title="Bash"
nvim ~/.config/oh-my-posh/arch-carbon.omp.json
```

Y el contenido que llevará será el siguiente:

```json title="arch-carbon.omp.json"
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "version": 4,
  "blocks": [
    {
      "type": "prompt",
      "alignment": "left",
      "segments": [
        {
          "type": "session",
          "style": "powerline",
          "powerline_symbol": "\uE0B0",
          "foreground": "#17191D",
          "background": "#EEE9DF",
          "template": "  {{ .UserName }} "
        },
        {
          "type": "git",
          "style": "powerline",
          "powerline_symbol": "\uE0B0",
          "foreground": "#071B19",
          "background": "#16B8A6",
          "template": " {{ .HEAD }}{{ if .BranchStatus }} {{ .BranchStatus }}{{ end }}{{ if .Working.Changed }}  {{ .Working.String }}{{ end }}{{ if .Staging.Changed }}  {{ .Staging.String }}{{ end }} ",
          "properties": {
            "branch_icon": "\uE0A0 ",
            "fetch_status": true,
            "fetch_upstream_icon": true
          }
        }
      ]
    },
    {
      "type": "prompt",
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "type": "time",
          "style": "plain",
          "foreground": "#EEE9DF",
          "template": "  {{ .CurrentDate | date .Format }} ",
          "options": {
            "time_format": "15:04"
          }
        },
        {
          "type": "path",
          "style": "plain",
          "foreground": "#16B8A6",
          "template": "│ {{ .Path }} ",
          "options": {
            "style": "folder"
          }
        }
      ]
    },
    {
      "type": "prompt",
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "type": "text",
          "style": "plain",
          "foreground": "#16B8A6",
          "template": "❯ "
        }
      ]
    }
  ]
}
```

Una vez listo mi archivo de configuraciones, lo que sigue es probarlo antes de activarlo, para ello ejecuté:

```bash title="Bash"
oh-my-posh print primary --config ~/.config/oh-my-posh/arch-carbon.omp.json
```

Este comando permite visualizar el prompt generado a partir del archivo de configuración. De esta manera podemos comprobar que se esté interpretando correctamente antes de incorporarlo al inicio de Bash.

## Activar Oh My Posh en Bash

Habiendo constatado que todo está correcto, lo que hice fue agregarlo al bashrc para que se ejecuten los cambios. Para ello primero debo abrir dicho archivo:

```bash title="Bash"
nvim ~/.bashrc
```

Y dentro de este agregamos al final, debajo de la línea que incorporamos anteriormente para el PATH, lo siguiente:

```bash title="Bash"
eval "$(oh-my-posh init bash --config ~/.config/oh-my-posh/arch-carbon.omp.json)"
```

Luego de guardar y salir, refrescamos la terminal, para que se apliquen los cambios:

```bash title="Bash"
source ~/.bashrc
```

Y ahora podremos apreciar los cambios en la terminal.

Luego de esto pensé que iba a tener que trabajar en lo mismo para tmux, pero no. Adquiere tal cual los cambios, así que no tuve que hacer nada. Esto se debe a que tmux utiliza la terminal que lo está ejecutando y, cuando inicia una nueva sesión de Bash, esta carga su configuración habitual.

## El problema del perfil de Windows Terminal

Ahora bien, todavía nos queda resolver el tema del inicio...

*¿Habrá alguna manera para que la terminal cambie del estilo que posee en PowerShell 7 a la estética que tiene Arch en WSL2?*

No, peeeeeeeeeeeeeeeeeero, pude hacer que ambas coexistan en la misma ventana. Para ello, volvemos a buscar el archivo de configuraciones. Hacemos `ctrl` + `,` y abrimos el `settings.json`. 

Una vez dentro, lo que tenemos que hacer es agregar dos acciones personalizadas dentro de la propiedad actions. Estas acciones le indican a Windows Terminal qué perfil debe abrir y hacia dónde tiene que dividir el panel.

En mi caso, configuré una acción para Arch Linux y otra para PowerShell 7:

```json title="settings.json"
        {
            "command": {
                "action": "splitPane",
                "split": "right",
                "profile": "{2e8aa6a2-ca99-5d33-891a-dce03d288bf6}"
            },
            "id": "User.SplitArchRight"
        },
        {
            "command": {
                "action": "splitPane",
                "split": "right",
                "profile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}"
            },
            "id": "User.SplitPowerShellRight"
        }
```

La acción `splitPane` permite dividir el panel actual y abrir otro. En este caso, utilizo "split": "right" para que el nuevo panel aparezca a la derecha. La propiedad `profile` indica qué entorno queremos iniciar.

:::warning Importante
Los identificadores `profile` corresponden a los `GUID` de mis perfiles de Arch Linux y PowerShell 7. Si vas a replicar esta configuración, tenés que reemplazarlos por los identificadores de tus propios perfiles. Podés encontrarlos dentro de la propiedad profiles de **settings.json**.
:::

Luego asignamos los atajos de teclado. Para ello buscamos la propiedad `keybindings` y agregamos las siguientes entradas:

```json title="settings.json"
        {
            "id": "User.SplitArchRight",
            "keys": "alt+shift+a"
        },
        {
            "id": "User.SplitPowerShellRight",
            "keys": "alt+shift+p"
        }
```

Como podemos observar, cada atajo hace referencia al identificador de una de las acciones que creamos anteriormente. De esta manera, `Alt` + `Shift` + `a` abre Arch Linux en un panel nuevo, mientras que `Alt` + `Shift` + `p` abre PowerShell 7.

Guardé y cerré. Los cambios se aplicaron y ahora puedo trabajar con ambos entornos dentro de una misma ventana de Windows Terminal, cada uno conservando su propia apariencia.

<img
  src={useBaseUrl('/img/archCustom.png')}
  alt="Dos terminales con estéticas diferentes en una misma ventana."
/>

Y así conseguimos lo que buscábamos, tener PowerShell 7 y Arch Linux en WSL2 compartiendo espacio de trabajo, pero con configuraciones visuales independientes.