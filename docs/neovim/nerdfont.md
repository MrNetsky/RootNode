---
sidebar_position: 4
---

# Instalación de una NerdFont

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