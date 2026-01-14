---
sidebar_position: 9
---

# Instalación de lazygit

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