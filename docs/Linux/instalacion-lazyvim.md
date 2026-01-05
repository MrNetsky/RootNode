---
sidebar_position: 3
---

Instalación de LazyVim
======================

{/* 
Esto es un comentario para el código JavaScript/JSX/React. No es un comentario de Markdown. ¿Entonces por qué lo hago de esta manera? Pues el entorno de Docusaurus se ejecta en JS/JSX/React.
*/}

<!-- Pero así también puedo acotar y diría que es mejor. -->

Mi motivación en aprender a usar esta herramienta surge desde la necesidad de utilizar una notebook vieja. Debido a sus limitaciones, pese a que puedo instalar y utilizar VSCode, no es práctico, por su extrema lentitud, obviamente por las limitaciones propias de este hardware.

Inicialmente este equipo tenía un HDD de 128Gb, con 2.5Gb de RAM y Windows 7. Actualmente tiene un SSD de 256Gb, con 4Gb de RAM y Linux Mint en su versión Mate. El procesador es un Intel Celeron M 520 @ 1.60GHz. Es el mismo, ya que por una limitacion de BIOS y de refrigeración, pero principalmente por mi completo desconocimiento no puedo cambiar de procesador (Por ahora. Igual tampoco hay muchas opciones que traigan una mejora significativa al funcionamiento de mi notebook)

Esta guía esta destinada a gente, que como yo, son nuevos en Linux y su funcionamiento por lo que se especificará cada aspecto que inicialmente no supe y tuve que averiguar. De más está decir que puede que cuando leass esto tenga un error o se haya desactualizado, o puede que haya algo que no entiendas por lo que te invito a que lo comentes.

:::danger IMPORTANTE
Esta una distro basada en Ubuntu que a su vez, está basado en Debian, por lo que si posees una distro diferente, puede que necesites utilizar tu propio sistema de gestión de paquetes. Para este sistema operativo se utilizará apt.
:::

## Elementos a instalar

:::tip NOTA
Si bien el orden NO es estrictamente necesario, yo lo hice así y recomiendo que también lo hagas así.
:::

1. NeoVim
2. git
3. NerdFont
4. tree-sitter-cli
    + gcc/clang
    + NodeJS/npm
5. curl
6. Terminal
    + alacritty
    + ghostty
7. fzf-lua
    + fzf
    + fdfind
    + ripgrep
8. lazygit
9. lazyvim
Antes de empezar con todo esto, utilizar:

```bash
sudo apt update
sudo apt upgrade
```
Esto es porque update actualiza la información sobre qué software existe y dónde encontrarlo. Mientras que upgrade previene conflictos de dependencias, mantiene la seguridad y garantiza la estabilidad.

### Instalación de NeoVim

:::tip NOTA 
Es importante tener una versión a 0.11.2 o posterior. 
:::

```bash
sudo apt install neovim
```

Es probable que instale un versión más antigua, pero estable, en mi caso fue la 0.9.5, entonces lo que hice fue elegir la versión, luego descargar el archivo .appimage o .tar.gz de la siguiente <u>[**página**](https://github.com/neovim/neovim/releases)</u>. Yo en este caso elegí la versión 0.11.5 y descargaré el archivo nvim-linux-x86_64.tar.gz. Con esto listo, hacemos lo siguiente:

```bash
tar xzvf nvim-linux-x86_64.tar.gz
```
Una vez extraidos los datos del archivo, ya quedó listo, el siguiente código **NO** es una instalación, lo que escribiremos es una ruta de acceso:

```bash
./nvim-linux-x86_64/bin/nvim
```
Aquí ya quedó funcionando, pero escribir el código anterior cada vez que querramos usar NeoVim es impráctico, por lo que procederemos a 'renombrarlo'. Lo que hace esta primera linea de código, es que cada vez que se escriba 'nvim' ejecute './nvim-linux-x86_64/bin/nvim', haciendo más cómodo el uso de NeoVim.
```bash
echo "alias nvim='~/Descargas/nvim-linux-x86_64/bin/nvim'" >> ~/.bashrc
```
Lo que hace la segunda línea de código es ejecutar los cambios inmediatamente. Esto lo hacemos para no tener que cerrar y abrir nuevamente la terminal para que se apliquen los cambios.
```bash
source ~/.bashrc
```

### Instalación git

```bash
sudo apt install git
git --version
```

La versión que instale va a ser superior a la necesaria, asi que no hay que hacer nada más.

### Instalación de una NerdFont

Lo primero es es ir al repositorio en [GitHub](https://github.com/ryanoasis/nerd-fonts 'NerdFont en GitHub') y descargar la NerdFont deseada.

:::tip NOTA 
Descargar las fuentes parcheadas.
:::

Una vez hecho eso, es necesario mover los archivos para poder utlizarlos, para ello primero debo ubicar dónde estan mis archivos, para luego reubicarlos.

```bash
mv  ~/Descargas/HackNerdFont-Bold.ttf ~/.local/share/fonts/ttf/
```
El proceso lo repetiremos tantas veces como NerdFont tengamos. Es importante resaltar que la carpeta fonts no existía en mi sistema por ende la tuve crear, mucho menos la carpeta ttf, la cual también cree. Use el procedimiento, pero las carpetas y sus ubicaciones pueden variar de sistema a sistema, por lo que debe tener cuidado.

:::danger IMPORTANTE
Cada editor tendrá su forma para configurar estas fuentes. Aquí sólo se verá la forma de configurarlo en alacritty y ghostty, cuya instlación podrá ver más adelante, por lo que deberá primero instalar y luego volver a esta sección.

En caso de que usted use otra terminal, deberá buscar cómo hacer esta configuración.
:::

<u>**alacritty**</u>

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

<u>**ghostty**</u>

Aquí la sintaxis es un poco diferente, pero en escencia es lo mismo. Por cierto, el tamaño de la letra no es necesario. Yo lo especifiqué así porque es de mi preferencia.
```bash
font-family = "Hack Nerd Font"
font-style = "Regular"
font-style-bold = "Bold"
font-style-italic = "Italic"
font-style-bold-italic = "Bold Italic"

font-size = 13
```
### Instalación de tree-sitter-cli
Es requisito FUNDAMENTAL tener instalado un complilador de C para que nvim-treesitter pueda instalar cualquier parser de idioma. Esto es porque tree-sitter-cli es la herramienta gestora que coordina la creación de la biblioteca del parser, mientras que el complilador de C transforma el código fuente del parser, en la biblioteca binaria que NeoVim usar para entender el código.

Para ello, debemos verificar si tenemos uno instalado en el sistema. Toda distro de Linux viene con un compilador de C instalado como gcc:
```bash
gcc --version
```
Pero sino también podemos instalar clang:
```bash
sudo apt install clang
```
Y posteriormente verificamos la versión:
```bash
clang --version
```

Es necesario instalar NodeJS y npm previamenete. Esto es debido porque la herramienta está escrita en JS/TS y se ejecuta en dicho entorno y para poder instalarla necesitamos el gestor de paquetes de dicho entorno.
```bash
sudo apt install nodejs
sudo apt install npm
```
Verificar que todo se haya instalado bien.
```bash
nodejs --version
npm --version
```
Ahora que estamos listos podemos instalar tree-sitter-cli.
```bash
sudo npm install -g tree-sitter-cli
```
Para que el binario se ubique en el PATH (como usr/local/bin), es necesario utilizar -g. Finalmente corroboramos que todo funcione correctamente.
```bash
tree-sitter -version
```

### Instalación de curl

```bash
sudo apt install curl
curl --version 
```
Similar que en git, simplemente es ésto.

### Instalación de una terminal nueva

:::danger IMPORTANTE
Si no descargas alguna de estas dos terminales, deberás elegir otra, ya que soportan todos los colores e íconos de lazyvim y las nerdfonts. Se sugieren estas: alacritty, kitty(Linux y MacOS), wezterm, iterm2(MacOS) y ghostty(Linux y MacOS).
:::

<u>**alacritty**</u>

Yo elegí esta ya que este proceso lo llevo a cabo en una notbook del 2008 y es la que menos recursos le significaban a mi equipo. 

El proceso es el siguiente:
```bash
sudo apt install alacritty 
```
Posteriormente corroboro la versión.
```bash
alacritty --version
```

<u>**ghostty**</u>

Elegí esta terminal porque me gustó lo que vi, para probarla, ya que ahora quiero instalar nuevamente lazyvim pero en una notebook más actual, una Lenovo T470s con 256Gb NVMe, 16Gb de RAM y un procesador i5 7ma gen. El proceso es sencillo y es el siguiente:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh)"
```
Posteriormente corroboro la versión.
```bash
ghostty --version
```

### Instalación de fzf-lua

:::tip NOTA
Esta instalación es OPCIONAL
:::

Es un plugin que integra la potencia del motor de busqueda fzf, con NeoVim, para que pueda integrarse con otros backends como lo son ripgrep y fdfind. fd se encarga de encontrar archivos, mientras que rg busca contenido (texto) dentro de los archivos.

```bash
sudo apt install fzf
sudo apt install fd-find
sudo apt install ripgrep
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

### Instalación de lazygit

:::tip NOTA
Esta instalación es OPCIONAL
:::

:::danger IMPORTANTE
Puede ser utilizardo incluso sin instalar LazyVim y todos sus complementos, en un futuro aquí se linkeará un tutorial de uso de LazyGit. Pero lo que si recomendaría, es que si usted NO sabe usar git, aprenda a utilizarlo y posteriormente se interiorice en el funcionamiento de esta herramienta.
:::

De la siguiente manera se selecciona la versión más actual para descargar. En mi caso es la 0.57.0.
```bash
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
```
Descarga el binario comprimido. Ten en cuenta que si no tienes instalado tar, este comando no funcionará, por lo que te recomiendo que verifiques la versión, si te la devuelve, entonces ejecuta el siguiente comando. En caso contrario, deberás antes de llevar a cabo este paso, instalar tar. 
```bash
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
```
Descomprime el archivo descargado.
```bash
tar xf lazygit.tar.gz
```
Instalar en esta carpeta. ¿Por qué la elegí? Porque es una carpeta estándar de Linux para programas instalados manualmente que deben estar disponibles para todos los usuarios en el sistema.
```bash
sudo install lazygit /usr/local/bin
```
Elimina el archivo descargado.
```bash
rm lazygit.tar.gz lazygit
```

Puede que después de todo esto cuando verifiquemos la versión nos dé el siguiente error: 

*-bash: /home/pablo/.local/bin/lazygit: No existe el archivo o el directorio*

Esto quiere decir que el sistema NO está encontrando el binario en la ruta que espera que esté. Para ello, moveremos el binario a la ruta correcto y lo primero que haremos es buscar la dirección del archivo.
```bash
which lazygit
```
Luego, en el caso de que no tengas esta carpeta, deberás crearla.
```bash
mkdir -p ~/.local/bin
```
Ya sabiendo dónde estaba el archivo y a dónde lo vamos alojar, lo muveremos.
```bash
sudo mv /usr/local/bin/lazygit ~/.local/bin/
```
Finalmente chequearemos la versión para serciorarnos de que la instalación se haya concluido de forma correcta.
```bash
lazygit --version
```

### Instalación de lazyvim

Hacer una copia de seguridad de mis archivos actuales de NeoVim. Vease que los 3 que están separados, NO son obligatorios, pero si recomendables.

```bash
mv ~/.config/nvim{,.bak}

mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```
Clonar el motor de arranque:

```bash
git clone https://github.com/LazyVim/starter ~/.config/nvim
```
Elimina la carpeta .git para que puedas agregarla a tu propio repositorio más tarde.

```bash
rm -rf ~/.config/nvim/.git
```

¡Empieza Neovim!

```bash
nvim
```

----

Y luego de todo este procedimiento tenemos finalmente configurado nuestro IDE, espero te haya gustado y sevido esta guía, posteriormente haremos un tutorial sobre el uso de esta magnífica herramienta que seguramente podrás ver por aquí también, sin nada más para agregar, ¡hasta pronto!



















