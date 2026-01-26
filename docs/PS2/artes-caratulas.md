---
id: artes-caratulas
title: "Gestión de Artes y Carátulas"
sidebar_label: "Artes y carátulas para OPL"
sidebar_position: 6
description: Obtención y uso de herramientas para dicha gestión.
tags:
  - ps2
  - retro
keywords: [ps2, OPL]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning
Este paso es opcional, si llegaste hasta el paso anterior, podrás disfrutar de tus juegos sin ningún problema, pero si querés mejorar tu experiencia de usuario, te sugiero que hagas lo siguiente.
:::

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
    
OPL Manager nos permite modificar cómo se ve el juego dentro del OPL en la PS2. Si tienes la v24, además deberás tener instalado Microsoft Windows Desktop Runtime, el cual es un paquete esencial que permite ejecutar aplicaciones modernas de escritorio creadas con .NET en tu PC Windows. Descargarlo e instalarlo, es sumamente sencillo, por lo que no lo inluiremos dentro de este tutorial. Si tienes la v21.4 esta última instalación no será necesaria.

La primera vez que lo abras te pedirá una ruta de donde puede encontrar los juegos. Pon la de tu pendrive. Una vez aquí verás lo siguiente, donde abrirás el gestor de imágenes. Ten en cuenta que NO te apareceran estos juegos sino lo que vos tengas instalados.

<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', textAlign: 'center' }}>

![OPL Manager 1](./img/OPLM1.png)

![OPL Manager 2](./img/OPLM2.png)

</div>

Aquí selecionarás las imágenes que te gusten. Una vez que hayas terminado, cierra la ventana y listo. Luego verás las modificaciones dentro del OPL que se ejecuta en tu PS2. No es necesario que cierres y abras esta ventana para configurar cada juego, podrás navegar entre todos los que tengas disponibles con las flechas.
  </TabItem>
</Tabs>