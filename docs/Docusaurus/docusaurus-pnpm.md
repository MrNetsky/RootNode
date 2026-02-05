---
id: docusaurus-pnpm
title: Instalar Docusaurus
sidebar_label: Instalar Docusaurus
sidebar_position: 1
description: Guía de instalación de Docusaurus
tags:
  - docusaurus
keywords: [docusaurus]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Docusurus es una herramienta que nos permite crear páginas web estáticas, orientado a documentación principalmente, fue creado por Facebook (Meta), basado en React, utilizando Markdown y MDX para la creación de contenido.

Existen varias maneras de instalar esta herramienta como podrá ver a continuación:

<Tabs>
  <TabItem
    value="npm"
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>npm</span>
      </div>
    }
  >
    Instrucciones para instalar docusaurus a traves de npm...
  </TabItem>

  <TabItem
    value="pnpm"
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>pnpm</span>
      </div>
    }
    default
  >
Primero abrá que instalar pnpm. Puede que ya lo tengas instalado, por lo que te recomiendo que primero, verifiques la versión. Si te devuelve la versión, podrás continuar con el siguiente paso, de lo contrario, comenzaremos con lo siguiente:

## Instalación de pnpm

Supuestamente este paso no deberías hacerlo, pero mi equipo no reconocía a corepack, por ello hice lo siguiente:

```bash
sudo npm install -g corepack
```

Ya teniendo corepack, lo que hay que hacer es habilitarlo

```bash
sudo corepack enable
```

Ahora lo que hay que hacer es instalar la última version de pnpm.

```bash
corepack prepare pnpm@latest --activate
```

Para verificar que lo hemos hecho bien, verificamos la versión.

```bash
pnpm --version
```

## Instalación de Docusaurus

Yo lo crearé en una carpeta en particular, por lo que me dirigiré a ella y escribiré lo siguiente:

```bash
pnpm create docusaurus@latest . classic
```

  </TabItem>
</Tabs>
