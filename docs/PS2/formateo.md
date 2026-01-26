---
id: formateo
title: "Formateo de unidad USB para grabar juegos"
sidebar_label: "Formateo"
sidebar_position: 2
description: Proceso de formateo a traves de diferentes herramientas y SO.
tags:
  - ps2
  - retro
keywords: [ps2, OPL]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Formateo

El formato que necesitamos es FAT32.

<Tabs>
  <TabItem 
    value="linux" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={useBaseUrl('/img/linux-brands-solid-full.svg')} width="20" height="20" /> 
        <span>Linux</span>
      </div>
    } 
  >
    Instrucciones para Linux Mint...
  </TabItem>

  <TabItem 
    value="windows" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={useBaseUrl('/img/windows-brands-solid-full.svg')} width="20" height="20" /> 
        <span>Windows</span>
      </div>
    }
    default
  >
Pero tenemos 2 escenarios posibles.

## Sin apps externas
Aquí incluso tenemos dos escenarios posibles.

### > 32Gb

Se puede hacer desde 


Puedes hacerlo desde el gestor de archivos. Aquí solo debes buscar el pendrive, dentro del sistema haces click derecho en él y luego verás la siguiente ventana, lo configuras de la menera que ves y le das a inicio. La etiqueta de volumen le puedes poner cualquier cosa, incluso dejarla vacía, la mía dice 'Ventoy' porque es mi pendrive donde flasheo las imágenes de los sistemas Linux para instalarlos en otras pc/notebook.



Una vez finalizado el proceso, puedes empezar a grabar tus juegos.

### < 32Gb

Acá lo que hay que hacer es particionar en espacios más pequeños, los que sean necesarios, dependiedo del tamaño de tu pendrive. Particularmente no he probado este método para correr los juegos, pero es sencillo particionarlo. Para elllo deberás hacer click derecho en inicio y seleccionas la opción 'Administración de discos', verás lo siguiente:



Entonces aquí deberás seleccionar el disco, puedes ponerle nombre a la partición, aunque no es obligatorio. Si es importante que la cantidad que elijas NO supere los 30Gb y que el formato que elijas sea FAT32.

## Con apps externas
Esta es la opción que yo recomiendo en Windows independientemente del tamaño del USB o disco duro HDD. Existen muchísimas aplicaciones que pueden hacer esto mismo, pero es la que yo uso y recomiendo.

### Rufus

Es importante que en la opción de 'Elección de arranque', utilicen la de 'No auto-ejecutable' y que el sistema de archivos sea FAT32 o exFAT (dependiendo de tu versión del OPL)

<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', textAlign: 'center' }}>

![rufus](./img/rufus.png)

</div>

  </TabItem>
</Tabs>