---
id: usuarios-y-privilegios
title: Configurando un usuario personal
sidebar_label: Usuario y privilegios
sidebar_position: 4
description: Configurar un usuario y sus privilegios.
tags:
  - linux
  - windows
  - wsl
keywords: [arch, linux, sudo, neovim]
---

La idea ahora que sé dónde estoy parado, es configurar un usuario normal para trabajar sin privilegios administrativos permanentes, configurar `sudo` para poder ejecutar tareas administrativas cuando sea necesario, entender cómo funcionan los grupos, qué permisos otorgan y por último, comprobar que todo funcione como debería.

## Consultar usuarios y grupos existentes

Lo primero que hay que hacer es consultar las bases de datos, para ello usamos los siguientes comandos:

```bash title="Bash"
getent passwd
getent group
```

¿Por qué ejecutamos estos comandos?
- `getent passwd`: permite consultar las cuentas de usuario registradas en el sistema y conocer sus datos. En mi caso, comprobé que todavía no existía una cuenta personal.
- `getent group`: permite consultar los grupos existentes e identificar cuáles podrían ser relevantes para administrar permisos. Aquí encontré que existe `wheel`, un grupo tradicionalmente utilizado en Arch Linux para conceder privilegios administrativos mediante una regla de sudoers.

Es importante aclarar que pertenecer a wheel no concede privilegios administrativos por sí solo. Para que esto suceda, también necesitamos configurar sudo para que reconozca a los integrantes de ese grupo.

## Crear el usuario

Ahora que sé qué usuarios y grupos existen, voy a crear mi propia cuenta. Para llevar adelante esto utilicé el siguiente comando:

```bash title="Bash"
useradd -m -G wheel -s /bin/bash pablo
```

¿Qué significa cada opción?

- `useradd`: crea una nueva cuenta de usuario.
- `-m`: crea el directorio personal del usuario en /home.
- `-G wheel`: agrega al usuario al grupo suplementario wheel.
- `-s /bin/bash`: establece Bash como shell de inicio de sesión.
- `pablo`: es el nombre de mi nueva cuenta.

Es importante distinguir entre el grupo principal y los grupos suplementarios. En este caso, el grupo principal también se llama pablo, mientras que wheel es un grupo suplementario que utilizaremos posteriormente para conceder permisos administrativos.

Para comprobar que todo esté correcto, ejecuté los siguientes comandos:

```bash title="Bash"
id pablo            # UID=1000(pablo) GID=1000(pablo) groups=1000(pablo),998(wheel)
getent passwd pablo # pablo:x:1000:1000::/home/pablo:/bin/bash
passwd pablo
```

- `id pablo`: muestra el UID, el GID principal y los grupos a los que pertenece mi usuario.
- `getent passwd pablo`: muestra la información de la cuenta, en este caso la mía, incluyendo mi directorio personal y su shell.
- `passwd pablo`: permite establecer la contraseña del usuario. El sistema solicitará ingresarla y repetirla para confirmar.

Con esto ya tenemos nuestra cuenta personal creada. Sin embargo, todavía necesitamos configurar los permisos administrativos.

## Configurar `sudo`

Como estamos trabajando directamente como root, podemos instalar sudo sin necesidad de utilizarlo.

```bash title="Bash"
pacman -S sudo
pacman -Q sudo
```

El primer comando instala el paquete y el segundo permite comprobar que se encuentra instalado, mostrando la versión correspondiente.

Ahora necesito configurar sudo para que los integrantes del grupo wheel puedan ejecutar comandos con privilegios administrativos.

Para editar el archivo de configuración necesitaré un editor de texto. En mi caso decidí instalar Neovim, porque ya estoy familiarizado con él y posteriormente me pondré a la tarea de configurar LazyVim.

Si hay diferencias con el proceso de instalación en Linux Mint, las mencionaré en su correspondiente artículo. Así que, si te interesa, te sugiero que visites mi [Guía de instalación de LazyVim](/docs/neovim/intro.md).

Antes de instalarlo, quise comprobar qué versión ofrecía Pacman y si cumplía con los requisitos que necesitaba. En mi caso, la versión disponible era la 0.12.6-1, por lo que decidí continuar con la instalación. El proceso que seguí fue el siguiente:

```bash title="Bash"
pacman -Si neovim
pacman -S neovim
nvim --version
```

Una vez que ya tengo un editor disponible, modifico la configuración de sudo. Para ello ejecuto:

```bash title="Bash"
EDITOR=nvim visudo
```
Esto abre el archivo de configuración de sudoers utilizando Neovim como editor. Luego la línea `# %wheel ALL=(ALL:ALL) ALL`, que está cerca del final y la descomenté, borrando el `#` del inicio de la línea.

De esta manera, los integrantes del grupo wheel podrán ejecutar comandos con privilegios administrativos mediante sudo. Una vez realizado el cambio, guardé el archivo y salí de Neovim con `:wq`. Para comprobar que la configuración no tenga errores de sintaxis, ejecuté:

```bash title="Bash"
visudo -c # Obtuve un resultado indicando que la sintaxis es correcta.
```

## Comprobar el nuevo usuario

Ahora que he creado mi usuario y configurado sus permisos administrativos, cambiaré de la sesión de root y trabajaré desde mi nueva cuenta. Para ello ejecuté:

```bash title="Bash"
su - pablo # Cambia de usuario, en mi caso de root a pablo.
```

Este comando cambia al usuario pablo. El parámetro - permite iniciar una sesión de inicio de sesión (login shell), cargando su entorno y directorio personal. Para comprobar que el cambio se realizó correctamente, ejecuté:

```bash title="Bash"
whoami # pablo
id # UID=1000(pablo) GID=1000(pablo) groups=1000(pablo),998(wheel)
```

Ahora mi consola inicia de la siguiente manera: `[pablo@BYTE-ALCHEMIST ~]$`

## Configurar a `pablo` como usuario predeterminado de Arch en WSL2

Esto es importante porque cuando abramos WSL2 la próxima vez lo que sucederá es que iniciaremos en `root`, no significa que lo que hemos hecho hasta ahora no sirva, simplemente tenemos que hacer que Arch en WSL2 inicie en el usuario de forma predeterminada, en mi caso es `pablo`.

Para ello primero nos sercioramos que este paso sea necesario y si lo es, ejecutamos el 2do comando 

```bash title="Bash"
sudo cat /etc/wsl.conf 
```
En mi caso tuve que editarlo, así que utilicé:

```bash title="Bash"
sudo nvim /etc/wsl.conf
```

Dentro del archivo agregué al final, la siguiente configuración:

```bash
[user]
default=pablo
```

Es importante no confundir esta sección con [boot], que contiene otras configuraciones relacionadas con el inicio de la distribución. En mi caso, ya tenía habilitado systemd, por lo que conservé esa configuración.

¿Qué significa cada apartado?

- `[boot]`: Contiene configuraciones relacionadas con el inicio de la distribución.
- `systemd=true`: habilita systemd al iniciar WSL.
- `[user]`: contiene configuraciones relacionadas con el usuario predeterminado.
- `default=pablo` indica que WSL debe iniciar Arch con el usuario pablo.

De esta manera dejamos de depender de root para el trabajo cotidiano y solamente recurrimos a los privilegios administrativos cuando realmente los necesitamos.