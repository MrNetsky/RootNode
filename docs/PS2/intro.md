---
id: intro
title: "Introducción al softmode"
sidebar_label: "Softmode"
sidebar_position: 1
description: Todo lo que necesitas saber antes de comenzar a modificar una PS2.
tags:
  - ps2-modding
keywords: [ps2, OPL]
---

Hola, gente. He venido a explicarles cómo realizar determinadas configuraciones para su PS2 y compartir mi experiencia personal al hacerlas. Pero antes sería útil saber para qué querríamos hacerlas... ¿no?

Mi motivación personal es que nunca tuve una consola de videojuegos, pero siempre quise una. Tiempo después tuve la posibilidad de adquirir una PS2 Slim a un bajo precio. Sin embargo, cuando finalmente la tuve, no tenía nada para hacer con ella; al fin y al cabo, sin juegos no había absolutamente nada que hacer. Quizás usted piense que todo lo que se explicará en esta sección yo ya lo sabía, pero la realidad es que no.

Fue un impulso por no dejar pasar una gran oportunidad y, en ese momento, no lo pensé demasiado. Así fue como empecé a investigar qué podía hacer con ella, hasta descubrir que la PlayStation 2 tiene una enorme comunidad que ha desarrollado herramientas para ampliar las funciones originales de la consola sin necesidad de realizar modificaciones de hardware.

Eso me venía muy bien, porque aunque soy bastante curioso y me gusta aprender, no tenía los conocimientos ni la destreza para realizar una modificación de hardware sin correr el riesgo de dañar la consola.

Primero que nada... ¿qué es un softmod?

Un softmod es una modificación realizada mediante software que permite que la consola haga cosas para las que originalmente no fue diseñada o que Sony nunca tuvo previsto que hiciera.

Pero... ¿cómo conseguimos eso en una PlayStation 2?

Para responder esa pregunta primero necesitamos conocer algunos conceptos importantes.

Cuando se habla de modificar una PS2 mediante software suelen aparecer muchos nombres: **Free McBoot**, **FunTuna**, **Open PS2 Loader (OPL)** y **wLaunchELF**.

Es fácil pensar que todos hacen lo mismo, pero en realidad cada uno cumple una función diferente y trabajan en conjunto.

Para entender el resto de esta documentación primero veremos qué hace cada uno.

## Las herramientas del softmod

### Free McBoot (FMCB)

Es el exploit más conocido para PlayStation 2. Se instala en una Memory Card y permite ejecutar aplicaciones caseras (homebrew) al iniciar la consola. Funciona de forma automática en la mayoría de las PS2 Fat y en muchas Slim, aunque algunos modelos más recientes dejaron de ser compatibles.

### FunTuna

Es un exploit alternativo pensado para los modelos de PS2 Slim donde Free McBoot dejó de ser compatible. Aprovecha una vulnerabilidad diferente y requiere iniciarlo manualmente desde el navegador de la consola (entras a la Memory Card, vuelves atrás y recién ahí el exploit se activa en pantalla). Esta es la opción que utilizo, ya que mi PS2 Slim pertenece a la serie SCPH-9000x, la mía especificamente es *SCPH-90006*.

### Open PS2 Loader (OPL)

Es la aplicación diseñada específicamente para cargar tus juegos de PS1 y PS2 (en diferentes formatos) desde un pendrive USB, un disco duro interno, un MXSIO o mediante un cable de red (SMB). No modifica la consola, simplemente carga los juegos utilizando el método de almacenamiento que hayas configurado.

### wLaunchELF

Es uno de los gestores de archivos más completos para PlayStation 2. Te permite explorar las Memory Cards (mc0:, mc1:), pendrives USB (mass:), o el disco rígido (hdd0:). Con él puedes copiar partidas, mover aplicaciones, instalar nuevos programas y editar configuraciones.

---

A partir de este punto veremos cada una de estas herramientas por separado. Aunque pueden parecer muchas al principio, cada una tiene una función muy concreta y, una vez que entiendas cómo se relacionan entre sí, el funcionamiento del softmod de PlayStation 2 resulta bastante sencillo.