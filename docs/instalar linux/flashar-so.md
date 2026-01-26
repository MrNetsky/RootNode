---
id: flashear-iso-ventoy
title: Flashear una imagen ISO con Ventoy
sidebar_label: Ventoy (Crear USB Booteable)
description: Guía paso a paso para crear unidades USB multiso utilizando Ventoy en entornos Linux y Windows.
tags:
  - linux
  - windows
  - sysadmin
keywords: [ventoy, iso, usb booteable, linux mint, flashear iso]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Flashear una imagen ISO

Existen una gran variedad de aplicaciones que pueden llevar a cabo este trabajo, yo sin embargo elegí ***Ventoy***. ¿Por qué? Porque esta disponible en Windows y en Linux. Además te permite tener más de una imagen ISO en un mismo pendrive. 

Para poder usar esta herramienta, primero hay que descargarla, desde esta [<u>página</u>](https://www.ventoy.net/en/download.html).
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
    Descargaremos el archivo cuya extensión sea .tar.gz y en la terminal, primero nos desplazaremos hasta la ubicación de dicho archivo descargado. Una vez aquí escribimos:
    ```bash
    tar xzvf ventoy-1.1.10-linux.tar.gz
    ```
    Una vez descomprimida la carpeta, ejecutaremos el programa mediante esta línea de código, ten en cuenta que deberás poner la contraseña.
    ```bash
    sudo ./VentoyGUI.x86_64
    ```

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
    Descargaremos el archivo cuya extensión sea .zip, también te darás cuenta que es para este SO, porque dice Windows en el nombre del archivo. 

    Una vez descargado extraemos los archivos comprimidos y ejecutamos el que dice: 'Ventoy2Disk.exe'
  </TabItem>
</Tabs>

Ya teniendo disponible nuestra herramienta, solo queda instalarla dentro de nuetra unidad USB, para ello debemos seleccionar dicha unidad, que generalmente está seleccionada por defecto, pero sino selecionala y luego le das a install.



Ya teniendo listo nuestro USB booteable, solamente debemos copiar nuestra ISO de su ubicación actual a la de nuestro pendrive. Una vez finalizado este proceso, estás listo para empezar a instalar tu SO Linux que hayas elegido.