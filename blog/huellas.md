---
slug: huellas
title: 'Cómo desbloquear Linux Mint con tu huella digital'
sidebar_label: Huellas en Linux
authors: [MrNetsky]
tags: 
    - linux
    - python
---

import Comment from '@site/src/components/GiscusComponent';

Desde que adquirí mi notebook quise poder habilitar la huella digital, ya que se trata de una Lenovo ThinkPad T470s usada. No tenía estrictos motivos de seguridad, sino quizás uno más superficial: no podía convivir con la idea de tener algo en mi PC que no funcionara. Sin embargo, luego de dos intentos fallidos, en los cuales no pude ver ni un mínimo acercamiento a mi meta, dejé de intentarlo.

Hasta hoy. Luego de una breve búsqueda, di con un repositorio de alguien que ya había solucionado este problema. A continuación verán el proceso que llevé a cabo y mis sensaciones a lo largo del mismo.

:::info Información
La distribución de mi equipo es Linux Mint, cuyo administrador de paquetes es apt. Si posee una distribución derivada de Arch o Fedora, en el README.md del repositorio de GitHub podrá encontrar las instrucciones correspondientes.
:::

Fuí al siguiente [repo](https://github.com/uunicorn/python-validity?tab=readme-ov-file) y en la terminal escribí lo siguiente:

```bash title="bash"
sudo apt remove fprintd
sudo add-apt-repository ppa:uunicorn/open-fprintd
sudo apt-get update
sudo apt install open-fprintd fprintd-clients python3-validity

```

Una vez finalizado el proceso escribí lo siguiente:

```bash title="bash"
fprintd-enroll
```

Aquí tuve que asentar un dedo unas cuantas veces mientras se guardaba el registro. Como ese comando no tiene parámetros, asume que la huella guardada es la del dedo índice derecho y sugiero que NO hagan la boludez que yo hice de usar el dedo pulgar. No porque pase algo malo, sino porque es exageradamente incómodo, al menos en este equipo.

Mientras apoyaba el dedo en el sensor, vi encenderse una luz encima del lector y ya con eso fui feliz. Ni siquiera sabía si el lector o la luz que posee encima funcionaban, pero al menos ahora ya estaba más cerca de hacerlo andar.

Habilité el desbloqueo del equipo con la huella escribiendo:

```bash title="bash"
sudo pam-auth-update
```

Luego de presionar *Enter* entrarás en una interfaz donde no funciona el mouse. Vas a tener que moverte con las flechas y, en la opción "Fingerprint authentication", oprimir la *barra espaciadora*. Verás que aparece un "*" y luego tendrás que salir. La manera más rápida es presionando *Tab*, que te llevará hasta "Aceptar", y ahí oprimir Enter.

Bloqueé la pantalla con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd> para probar si funcionaba. Entonces oprimí cualquier tecla para que me pidiera autenticación y, en vez de solicitarme la contraseña como era habitual, me pidió que colocara el dedo en el sensor. Funcionaba, y yo estaba completamente feliz. Pero...

Cuando suspendí la compu no me pidió la huella. ¿Qué sucedió? Pues parece que, al reanudarse el equipo, el sensor no se reinicializa correctamente y deja de responder. Esto lo comprobé de la siguiente manera:

```bash title="bash"
fprintd-verify
```

Y me devolvía un error. Sin embargo, había una solución: reiniciar los servicios. Para ello escribí lo siguiente:

```bash title="bash"
systemctl restart python3-validity
systemctl restart open-fprintd
```

Pero me seguía sucediendo lo mismo, no reaccionaba. Entonces ejecuté los mismos comandos una vez más y bloqueé mi pantalla. Cuando me pidió autenticación, volvió a solicitar la huella. O sea que el método funcionaba; sólo había que lograr que este proceso se ejecutara de manera automática al reanudarse el equipo, ya sea desde una suspensión o desde un apagado.

Esta función la va a cumplir el siguiente script:

```bash title="bash"
#!/bin/sh
if [ "$1" = "post" ]; then
    systemctl restart python3-validity
    systemctl restart open-fprintd
fi
```

Es importante no olvidar otorgarle permisos de ejecución. Para ello escribimos:

```bash title="bash"
sudo chmod +x /lib/systemd/system-sleep/python-validity-resume
```

Una vez terminado, suspendí la compu, pero no me iniciaba pidiéndome la huella, sino únicamente la contraseña. Pensé que no estaba funcionando o que estaba teniendo problemas con la jerarquía de los métodos de autenticación. Para poner a prueba mi hipótesis bloqueé la pantalla y, efectivamente, la huella funcionaba.

Lo que aparentemente sucede es que el script no llega a ejecutarse a tiempo. Entonces, al no estar disponible la huella como método de autenticación, el sistema utiliza el método que sí tiene disponible: la contraseña.

Terminé de constatarlo cuando suspendí la compu, pero no la reanudé inmediatamente. La dejé un rato hasta que desapareció la opción de ingresar la contraseña. En ese momento presioné cualquier tecla y el equipo me solicitó la huella.

El estado actual de mi compu es este. Seguramente podría mejorar el script, pero la verdad es que no me voy a poner con ello pronto. Me funciona y me resulta útil. Probablemente, cuando lo necesite, lo haré y lo estaré comentando por acá.

No obstante, quiero decir que estoy súper contento de haber logrado hacer funcionar el lector de huellas de mi computadora. 

**PD:** Cada día me fascino más con Linux. Que tengan un lindo día!

<Comment />