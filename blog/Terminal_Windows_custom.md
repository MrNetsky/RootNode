---
slug: personalizacion-windows-terminal-powershell
title: Personalización de Windows Terminal y PowerShell 7
sidebar_label: Personalización de Windows Terminal
authors: [MrNetsky]
tags: [linux]
---

Mi idea era mejorar la estética de mi terminal de Windows. Para ello decidí cambiar el esquema de colores, instalar Oh My Posh y personalizar el prompt de PowerShell.

Durante el proceso pasé por tres etapas: la terminal original, una primera versión con Tokyo Night Storm y, finalmente, una configuración personalizada que se adapta mejor a mi forma de trabajar.

## 1. Seleccionar el perfil de PowerShell

Windows Terminal permite utilizar diferentes shells desde una misma aplicación: PowerShell, Símbolo del sistema, Git Bash, Ubuntu mediante WSL, entre otros.

Para esta configuración elegí PowerShell 7 como terminal principal. Para comprobar qué versión está ejecutándose, podemos utilizar:

```powershell
$PSVersionTable.PSVersion
```
Es importante distinguir entre Windows Terminal, que es la aplicación que muestra la terminal, y PowerShell, que es el intérprete de comandos que utilizamos dentro de ella. En otras palabras, Windows Terminal proporciona la interfaz y PowerShell se encarga de interpretar y ejecutar los comandos.

## 2. Incorporar el esquema de colores Tokyo Night

Mi primera intención fue cambiar los colores de la terminal por los de Tokyo Night. Sin embargo, el esquema no aparecía entre las opciones disponibles de Windows Terminal, así que tuve que incorporarlo manualmente.

Windows Terminal guarda sus esquemas de colores en el archivo `settings.json`. Este archivo permite definir tanto los colores disponibles como la apariencia de los distintos perfiles. La documentación oficial explica este procedimiento en [Color schemes de Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes).

Desde Windows Terminal, abrir el menú desplegable de la barra superior. Entrar en Configuración. Una vez aquí brir el archivo JSON de configuración desde la opción correspondiente.

El archivo que necesitamos es el `settings.json` de Windows Terminal, no el perfil de PowerShell ni el archivo de Oh My Posh. Dentro de `settings.json`, buscar la propiedad "schemes". En una instalación donde todavía no se hayan añadido esquemas personalizados, puede aparecer como un arreglo vacío, como era mi caso:

```json
"schemes": []
```

En ese caso, hay que reemplazarlo por el siguiente contenido. Si ya existen otros esquemas, se debe agregar el nuevo objeto a la lista sin eliminar los anteriores.

```json title = "settings.json"
"schemes": [
    {
        "name": "Tokyo Night",
        "background": "#1a1b26",
        "foreground": "#c0caf5",
        "cursorColor": "#c0caf5",
        "selectionBackground": "#283457",
        "black": "#15161e",
        "red": "#f7768e",
        "green": "#9ece6a",
        "yellow": "#e0af68",
        "blue": "#7aa2f7",
        "purple": "#bb9af7",
        "cyan": "#7dcfff",
        "white": "#a9b1d6",
        "brightBlack": "#414868",
        "brightRed": "#f7768e",
        "brightGreen": "#9ece6a",
        "brightYellow": "#e0af68",
        "brightBlue": "#7aa2f7",
        "brightPurple": "#9d7cd8",
        "brightCyan": "#7dcfff",
        "brightWhite": "#c0caf5"
    }
],
```

**<u>Importante</u>:**  el fragmento anterior muestra la propiedad schemes completa. Al integrarla en settings.json, hay que respetar las comas entre las propiedades del objeto JSON. No debemos pegarla como un objeto independiente fuera de la estructura principal del archivo.

Una vez guardados los cambios, volvemos a la configuración de Windows Terminal, buscamos el perfil de PowerShell 7 y nos dirigimos a Apariencia. En el selector de esquemas de colores debería aparecer la opción Tokyo Night. La seleccionamos y guardamos los cambios.

Con esto, el fondo, el texto y los colores de la terminal adoptan la paleta seleccionada.

Este esquema se aplica a la apariencia general de la terminal. Más adelante, Oh My Posh tendrá su propia configuración de colores para el prompt.

## 3. Seleccionar una Nerd Font

Ya tenía instalada la fuente JetBrainsMono Nerd Font Mono, porque anteriormente había configurado LazyVim. 

Si todavía no tenés una Nerd Font instalada, podés consultar mi otra guía [Configuración de NerdFonts](https://mrnetsky.github.io/RootNode/docs/neovim/instalacion-nerdfonts).

Una Nerd Font incluye caracteres adicionales que permiten representar iconos, separadores y otros símbolos utilizados por herramientas de terminal. Para seleccionarla hay que abrir la configuración de Windows Terminal, ir al perfil de PowerShell 7, entrar en Apariencia y en estilo tipográfico seleccionar la fuente, en mi caso, JetBrainsMono Nerd Font Mono como fuente. NO olvides guardar los cambios.

Es importante resaltar que la fuente debe estar instalada en Windows para que la terminal pueda utilizarla.

## 4. Instalar Oh My Posh

El siguiente paso fue instalar Oh My Posh, una herramienta que permite personalizar el prompt con segmentos, colores, iconos e información contextual, como la rama actual de Git.

Para instalarla mediante WinGet:

```powershell
winget install JanDeDobbeleer.OhMyPosh --source winget
```

Para comprobar que esté disponible:

```powershell
oh-my-posh version #31.9.1
```

### Instalar un tema

Oh My Posh incluye una colección de temas predefinidos. No es necesario instalar cada tema por separado: basta con indicarle a la herramienta cuál queremos utilizar.

Podés consultar la colección en la [galería oficial de temas de Oh My Posh](https://ohmyposh.dev/docs/themes).

Inicialmente utilicé el tema tokyonight_storm, que se carga con el siguiente comando:

```powershell
oh-my-posh init pwsh --config tokyonight_storm | Invoke-Expression
```

Esta línea inicializa Oh My Posh para PowerShell y le indica que utilice el tema Tokyo Night Storm.

La configuración inicial quedó guardada en el perfil de PowerShell para que se cargara automáticamente al abrir una nueva sesión.

### ¿Por qué decidí modificar el tema?

El resultado inicial me gustó, pero había un detalle que no me resultaba cómodo: la forma en que se distribuían visualmente los elementos del prompt y la línea donde se introducían los comandos.

En lugar de conformarme con el tema predefinido, decidí personalizarlo. Quería conservar la estética Tokyo Night, mostrar el usuario y el nombre del equipo, identificar la ruta de trabajo y tener el símbolo de entrada en una segunda línea.

Para lograrlo, creé mi propia configuración JSON.

## 5. Crear el prompt personalizado

Creé el archivo `C:\Users\Usuario\tokyo-night-custom.omp.json`. Éste define los segmentos visuales del prompt. No es el archivo de configuración de Windows Terminal ni el perfil de PowerShell, cumple una función distinta. Procedí a editarlo:

```powershell
nvim "$HOME\tokyo-night-custom.omp.json"
```
Yo utilizo nvim, pero si utilizas VSC, debes reemplazar `nvim` por `code`. Si utilizas otro editor de texto, pues deberas utilizar otra palabra clave.

Si el archivo no existe, el editor permitirá crear un buffer nuevo y guardarlo con ese nombre. De esta manera, el contenido se edita directamente en el editor de código, en lugar de intentar construir el JSON mediante comandos de PowerShell. Y hablando del contenido... Es el siguiente:

```json title = "tokyo-night-custom.omp.json"
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "version": 3,
  "final_space": true,
  "blocks": [
    {
      "type": "prompt",
      "alignment": "left",
      "segments": [
        {
          "type": "session",
          "style": "powerline",
          "foreground": "#c0caf5",
          "background": "#414868",
          "template": " {{ .UserName }}@{{ .HostName }} "
        },
        {
          "type": "path",
          "style": "powerline",
          "powerline_symbol": "\uE0B0",
          "foreground": "#1a1b26",
          "background": "#7aa2f7",
          "template": " {{ .Path }} ",
          "properties": {
            "style": "full"
          }
        },
        {
          "type": "git",
          "style": "powerline",
          "powerline_symbol": "\uE0B0",
          "foreground": "#1a1b26",
          "background": "#9ece6a",
          "background_templates": [
            "{{ if or (.Working.Changed) (.Staging.Changed) }}#e0af68{{ end }}"
          ],
          "template": " {{ .HEAD }}{{ if .Working.Changed }} *{{ end }} "
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
          "foreground": "#7dcfff",
          "template": "❯ "
        }
      ]
    }
  ]
}
```

### ¿Qué hace cada segmento?

- **Session:** muestra el usuario y el nombre del equipo, por ejemplo Usuario@BYTE-ALCHEMIST.
- **Path:** muestra la ruta actual.
- **Git:** muestra la referencia actual, normalmente la rama, y agrega un asterisco cuando detecta cambios en el directorio de trabajo.
- **Text:** dibuja el símbolo ❯ en la segunda línea, donde se introducen los comandos.

Los colores se definen mediante códigos hexadecimales. Los separadores del estilo Powerline utilizan caracteres especiales que pueden representarse gracias a la Nerd Font instalada.

La configuración personalizada no modifica el esquema de colores de Windows Terminal: son dos capas independientes que se complementan visualmente.

## 6. Configurar el perfil de PowerShell

El perfil de PowerShell es un script que se ejecuta al iniciar la sesión. En nuestro caso, se utiliza para cargar Oh My Posh con el archivo JSON personalizado. 

Para hacerlo, primero necesitamos conocer la ubicación del perfil. Esta puede variar entre equipos y usuarios, por lo que es preferible consultar la variable `$PROFILE` en lugar de asumir una ruta fija.


```powershell
$PROFILE 
```

El resultado será la ruta del perfil correspondiente a la sesión actual. En mi caso, por ejemplo, se encuentra dentro del directorio de documentos de PowerShell.

### 6.1 Comprobar si el perfil existe

Antes de editarlo, podemos comprobar si el archivo ya existe:

```powershell
Test-Path $PROFILE # True. El archivo existe, por lo que puede editarse.
```

Si devuelve False, lo que podes hacer es crearlo con el siguiente comando. 

```powershell
New-Item -ItemType File -Path $PROFILE -Force
```

Luego abrí el archivo para volverlo a modificar.

```powershell
nvim $PROFILE
```

### 6.2 Configurar la inicialización de Oh My Posh

La línea que debe quedar en el perfil es:

```powershell
oh-my-posh init pwsh --config "$HOME\tokyo-night-custom.omp.json" | Invoke-Expression
```

Como mi perfil contiene una inicialización anterior que cargaba `oh-my-posh init pwsh --config tokyonight_storm | Invoke-Expression`, reemplacé esa línea por la anterior para que no se carguen ambas configuraciones.

El perfil de PowerShell se encarga de inicializar Oh My Posh, mientras que el archivo tokyo-night-custom.omp.json define cómo se ve el prompt.

Si queremos aplicar los cambios sin cerrar la terminal, podemos ejecutar:

```powershell
. $PROFILE
```

El punto seguido de un espacio y la variable `$PROFILE` indican que se ejecuta el script en la sesión actual. También se puede abrir una pestaña nueva de PowerShell 7 para comprobar el inicio desde cero.

### 6.3 Comprobación opcional

Si querés verificar qué configuración de Oh My Posh está cargando PowerShell, podés consultar el contenido de tu perfil con:

```powershell
Get-Content $PROFILE
```

La línea de inicialización debe apuntar al tema elegido. En la configuración personalizada de esta guía, debe utilizar el archivo `tokyo-night-custom.omp.json`.

También podés comprobar que el archivo existe con `Test-Path "$HOME\tokyo-night-custom.omp.json"`. Estas comprobaciones son útiles para diagnosticar problemas, pero no son necesarias si la configuración ya funciona correctamente.

---

Con estos pasos terminé de personalizar Windows Terminal y PowerShell 7. El resultado combina el esquema de colores Tokyo Night, la tipografía JetBrainsMono Nerd Font Mono y un prompt propio de Oh My Posh que muestra la información que necesito mientras trabajo.

Pero acá no termina, porque la personalización NO aplica a WSL2 y menos cuando uso tmux en Arch, así que en otro momento hablaré de cómo lleve adelante esas modificaciones.