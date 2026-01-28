---
id: roms-ps2-usb
title: "Cargar juegos PS2 a un USB"
sidebar_label: "Juegos de PS2"
sidebar_position: 4
description: Grabar juegos de PS2 para OPL 
tags:
  - ps2-modding
keywords: [ps2, OPL]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Tengo entendido que las ISOs menores a 4Gb no es necesario grabarlas con un programa en específico, copiando y pegando las ISOs en los lugares correspondientes, funcionarán; siendo menos de 700Mb en la carpeta CD y superando esta cantidad, pero siendo menos de 4Gb en la carpeta DVD. Esta limitación es debido al formato FAT32.  

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
No obstante, no lo hice así, yo independientemente del tamaño lo grabo con USB Util 2.2, pero ustedes pueden probar lo anteriormente dicho y comentarme al respecto. Mi proceso fue el siguiente: Abrir la aplicación, una vez que abierta se irán a 'Archivo' y una vez allí, seleccionarán 'Crear juego desde ISO'.

<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', textAlign: 'center' }}>

![USBU2.2 - 1](./img/usbu1.png)

</div>

Aquí buscarán la carpeta en donde se encuentre alojado el juego y deberán seleccionar la ISO, es importante que lo hagan porque, la opción 'crear' solo estará disponible despues de ésto. También deberán elegir dónde grabarán dicho juego, aquí pongan su pendrive o disco duro. No olviden hacer esto porque la aplicación NO lo hace por defecto y si no cambian la ruta, lo guardará en algún lugar no deseado. Igual no hay mayor problema, si se dan cuenta a mitad de procedimiento, lo cancelan y les dará la opción de eliminar todos los archivos qu haya grabado hasta ese momento.

<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', textAlign: 'center' }}>

![USBU2.2 - 2](./img/usbu2.png)

</div>

Una vez finalizado el proceso, verán lo siguiente. En este menú, podrán visualizar el orden y los nombres con los que los vas a ver dentro del OPL. También podrán modificar dicho orden y los nombres, además desde aquí podran eliminarlos según necesiten. Tenga en cuenta que todos los juegos que usted ve aquí son los que hasta ese momento tenía grabado en mi pendrive, vos verás la cantidad y variedad de juegos que vos hayas decidido subir.

<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', textAlign: 'center' }}>

![USBU2.2 - 3](./img/usbu3.png)

</div>

  </TabItem>
</Tabs>

