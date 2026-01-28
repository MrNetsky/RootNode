---
id: partidas-terceros
title: "Cargar una partida de un tercero a la Memory Card"
sidebar_label: "Partidas de terceros"
sidebar_position: 8
description: Obtención y configuración de una partida ajena en tu PS2.
tags:
  - ps2-modding
keywords: [ps2, OPL]
---

# Subir partidas de terceros

Esto es con el fin de disfrutar un juego completo, sin estar atado a la necesidad de completar todo el contenido, si no tienes el tiempo o las ganas de hacerlo, yo lo explicaré con el Budokai Tenkaichi 3, ya que no me interesa el modo historia, pero si quiero jugar con otras personas y tener la libertad de elegir el personaje que desee y no al que yo quera dentro de un limitado pull. Por ello hice lo siguiente:

:::warning advertencia
El proceso que voy a llevar a cabo, es para guardar una partida dentro de la memory card física.
:::

**Parte 1: PC**
1. Conseguir una partida guardada. Acá no les voy a decir desde qué página, pero sí les voy a dar unos tips a tener en cuenta:
    - El archivo que descargues deberá ser de extensión .cbs
    - Deberás descargar la partida cuya región coincida con la de tu juego. ¿Pero cómo sabes esto? Con la siguiente guía:
      - SLUS/SCUS --> América
      - SLES/SCES --> Europa/Oceanía
      - SLPM/SLPS --> Japón
2. Una vez, que lo tengas, abres el PS2 Save Builder y busca tu archivo .cbs para abrirlo.
3. Aquí debes seleccionar todos los archivos existentes y le das al click derecho para porder extraer. 
4. Extraerás a una carpeta vacía y la renombrarás con el nombre del archivo, cuya extensión **NO SEA** .bin, .sys o .ico.
5. Copia la carpeta completa en la raiz de tu pendrive, de preferencia que se encuentre en formato FAT32.

**Parte 2: PS2**

1. Acceder al uLaunchELF:
    - Antes de encender la consola, aprieta R1.
    - Enciendela, mientras mantienes presionado R1 hasta que se abra el uLaunchELF.
    - No es la única forma de acceder a este menú, pero es el que yo usé.
2. Oprime círculo para acceder al browser.
3. Desplázate hasta MASS (acceso a los datos del pendrive) y oprime equis.
4. Busca la carpeta y oprime R1 para poder copiarla.
5. Vuelve hacia atras con triángulo y desplázate a MC0 (acceso a los datos de la Memory Card), selecionalo con equis.
6. Una vez aquí, oprimes R1 nuevamente para poder pegar.
7. Habiendo finalizado el proceso, reinicia la consola.

Podrás verificar, que el proceso ha sido completado con éxito, entrando a las partidas guardadas de la memory card y encontrar la partida que has cargado o entrando al juego en cuestión a verificar que haya una partida guardada.