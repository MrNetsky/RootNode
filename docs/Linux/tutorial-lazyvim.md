---
sidebar_position: 4
---
# Primeros pasos en LazyVim

:::info INFORMACIÓN
Este documento se encontrará en constante actualización.
:::

**Contenidos:**
+ Configuraciones necesarias
+ Comandos útiles

## Configuraciones necesarias

### Subrayado del autocorrector

Yo tenía un problema, el cual consataba de un subrayado en rojo, similar a cuando tienes un error ortográfico en Miscrosoft Word, pero casi todo el documento completo, independientemente de su extensión. El problema es que el autocorrector detectaba errores, lo cual es obvio, porque está en ingles y yo escribo en español. Por lo que escribí lo siguiente:

```vim 
:set nospell
```

Esto es pan para hoy y hambre para mañana, ya que había que hacerlo con cada artículo que edites y si lo cerrabas, pero posteriormente lo abrías, necesariamente tendrás que hacer lo mismo. Por lo que hice algo más definitivo.

Abrí el archivo ~/.config/nvim/lua/config/options.lua con el fin de escribir lo siguiente:

```lua
vim.opt.spell = false
```

Pero cuando abría un archivo Markdown, el subrayado persistía, por lo que nuevamente entré al archivo anteriormente citado y agregué la siguiente línea.

```lua 
vim.opt.spelllang = { "en" }
```

Aún con ello, el subrayado se negaba a retirarse. Eso si, no todo es malas noticias el subrayado desapareció de todos los archivos, a excepción de Markdown o txt. Por lo que tuve que sacar la artillería pesada y entrar al archivo ~/.config/nvim/lua/config/autocmds.lua y aquí escribí lo siguiente:

```lua 
-- Desactivar spell para tipos de archivo específicos si options.lua falla
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "markdown", "text", "gitcommit" },
  callback = function()
    vim.opt_local.spell = false
  end,
})
```

Y ahora si, desapareció el subrayado de todos los archivos que abría en LazyVim. Pero ustedes se preguntarán cómo sabía yo que estaba apagado o encendido el autocorrector, aparte de la obvia observación de las lineas rojas, usaba el siguiente comando:

```vim  
:verbose set spell?
```

Si te responde con un mensaje que dice spell, está activado y si dicho mensaje dice nospell, estará desactivado.
## Comandos útiles

:::info INFORMACIÓN
Este apartado **NO** sigue un órden lógico, al menos no de momento. Ya que voy anotando lo que me parece útil y a medida que lo voy aprendiendo, pero si en un futuro esto cambia, verá esta etiqueta modificada o directamente no la verá. 
:::

**Insert + salto de linea**
> 'o'

**Explorador**
> space + e

**Srcoll entre el explorador y el buffer activo**
> ctrl + 'h' ó 'l'

**Scroll entre buffers**
> shift + 'h' ó 'l' IMPORTANTE: Este scroll no incluye al explorador y no tiene tope, ya que si tienes dos documentos abiertos y haces dos veces shift + 'l' volverás al mismo del que partíste. 

**Cerrar el explorador** 
> esc ó ':' + 'q' IMPORTANTE: tener activo el explorador, de lo contrario cerrará lo que encuentre activo.

**Crea un archivo nuevo**
> space + 'e' + 'a'

**Cerrar un buffer (archivo abierto)**
> space + 'b' + 'd' ó : + 'b' + 'd'


