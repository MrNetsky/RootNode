---
slug: wifi-hp530
title: 'Solucionar problemas de WiFi en una HP530 con Linux Mint Mate'
sidebar_label: Problemas de WiFi
authors: [MrNetsky]
tags: 
    - linux
---

import Comment from '@site/src/components/GiscusComponent';

Es muy probable que muy pocos tengan el mismo problema que yo. Primero, porque la mayoría de estos equipos ya han sido desechados o acumulan polvo en algún rincón. Y, honestamente, si bien llevo adelante esta página para mostrar mi aprendizaje, el motivo exacto de este blog es servir como recordatorio para mi yo del futuro.

Este problema ya lo solucioné tres veces y cada vez tuve que investigar cómo hacerlo. Posiblemente deba hacerlo un par de veces más en el futuro porque uso este equipo para pruebas, pero ya no quiero renegar más. Por ello, estamos aquí reunidos para aprender a resolver esta cuestión.

Lo primero es identificar el problema, el cual honestamente no es muy complicado: simplemente no podés conectarte al WiFi. Además, en esta notebook hay un botón con una luz azul que habilita o deshabilita el WiFi y dicho botón no emite ninguna luz, por lo que no hay mucho margen para equivocarse.

Pero siempre hay que hacer un diagnóstico, así que primero hay que averiguar qué placa tengo y conocer el estado de las conexiones inalámbricas. Para ello escribí:

```bash title="Bash"
#Esto lo hice para cerciorarme que mi placa siga viva y que no haya roto algo una de las tantas veces que abrí mi computadora. 
lspci | grep -i network #La placa de esta HP530 es una BCM4312.
rfkill list 
```

El rfkill me dice que hay un hard blocked, lo que implica un bloqueo por hardware. Sin embargo, el botón no daba señales de vida y no creía que se hubiera roto ni que la luz se hubiese quemado.

Por lo cual procedí a borrar toda existencia del controlador que traía la computadora. Para ello escribí:

```bash title="Bash"
sudo apt purge broadcom-sta-dkms
```

Esto es porque voy a instalar un controlador diferente. Tengan en cuenta que, si dos controladores quieren manejar el mismo dispositivo, la computadora aplica la del Rey Salomón: ninguno de los dos termina cumpliendo correctamente su cometido.

```bash title="Bash"
sudo apt install firmware-b43-installer
sudo reboot
```

No siempre es necesario ejecutar `sudo reboot`. Las dos primeras veces que hice este proceso lo necesité, pero esta última vez funcionó incluso antes de reiniciar.

Una vez instalado el nuevo controlador, el botón volvió a encender su luz azul y la conexión WiFi volvió a funcionar. Honestamente no investigué en profundidad por qué este controlador funciona y el otro no, porque para este equipo mi objetivo era simplemente recuperar la conectividad inalámbrica, ya que solo tengo un cable ethernet y lo uso con mi pc de escritorio.

PD: Si llegaste hasta acá porque tu vieja HP 530 también se quedó sin WiFi o porque mis blogs son exageradamente buenos, podes dejarme un comentario más abajo. Nos vemos!

<Comment />