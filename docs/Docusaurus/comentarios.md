---
id: comentarios
title: Habilitar comentarios de GitHub
sidebar_label: Comentarios
sidebar_position: 2
description: Habilita comentarios para un documento o para todos los de la página.
tags:
  - git
  - docusaurus
  - frontend
keywords: [github, docusaurus, footer, javascript, comentarios]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Hay varias posibilidades para implementar comentarios en tu sitio creado con Docusaurus, pero hoy les voy a mostrar como hacerlo con GitHub a traves de giscus. Para ello deberemos seguir los siguientes pasos.

## GitHub

Dentro de GitHub debemos hacer dos cosas, la primera es habilitar los comentarios. Para ello, priemro debemos ir a ajustes, dentro de *'General'* (que es la página principal y donde aparecemos una vez abierto los ajustes) y en la parte de *'Features'* seleccionamos la opción de *'Discussions'.*

Lo segundo es instalar (o configurar si ya lo han instalado con anterioridad para otro repositorio) [giscus](https://github.com/apps/giscus) en Github. Lo importante configurarlo para este repositorio y una vez selecionado tu repo, guardas los cambios y sigues con el siguiente paso.

## giscus

:::info ¿qué es?
Es un sistema de comentarios gratuito y de código abierto que funciona como una capa sobre GitHub Discussions. A diferencia de otros sistemas, no tiene anuncios ni rastreadores, y almacena todos los comentarios directamente en tu repositorio de GitHub como discusiones.
:::

Primero deberemos habilitar la herramienta, para ello en nuestro repositorio, escribimos lo siguiente:

```bash
pnpm add @giscus/react
```

Luego deberemos habilitar nuestro ID, para ello accedemos a [giscus.app](https://giscus.app/es). En el apartado de *'Repositorio'* escribimos nuestro usuario y repositorio separados por una '/'.

Es necesario que también elijas la categoría, esto nos aportará otro ID imprescindible para la configuración que haremos en el apartado siguiente. Para ello en *'Categoría de discusión'* seleccionamos la opción que más nos guste, aunque se recomienda la opción de *'Annoucements'* para que solo los mantenedores y giscus puedan crear nuevas discusiones.

## Componente en Docusaurus

Será necesario que creen un archivo index.js en src/components/GiscusComponent que contenga el siguiente código, eso sí, deberás reemplazar con tu información los apartados que se encuentran encerrados con corchetes.

```javascript
import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comment() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="[USUARIO/REPOSITORIO]"
      repoId="[ID REPOSITORIO]" // El ID te lo va a dar giscus. Vas a tener que copiar y pegar esa info.
      category="[NOMBRE CATEGORÍA]"
      categoryId="[ID CATEGORÍA]" // Una vez seleccionada la categoría te va a dar este ID, que también deberás pegar aquí.
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      lang="es"
      loading="lazy"
    />
  );
}
```

Un error que a mi me dió luego de esto se debió a que pnpm es muy estricto con las dependencias y aunque Docusaurus usa @docusaurus/theme-common internamente, no te permite importarlo en tu código a menos que lo instales explícitamente en tu proyecto.

Por lo que, dentro de la carpeta de mi proyecto, hice lo siguiente:

```bash
pnpm add @docusaurus/theme-common
```

Luego de esto anduvo perfectamente.

## Footer

Llegado a este punto, solo queda agregar la posibilidad de agregar los comentarios mediante GitHub. Pero podemos hacerlo, de diferentes maneras como podrás ver a continuación.

<Tabs>
  <TabItem
    value="selected"
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Cantidad determinda de páginas</span>
      </div>
    }
    default
  >
Si te interesa que los comentarios estén disponibles para algunos artículos, lo que debes hacer es pegar la siguiente línea al inicio del documento (Se puede pegar en cualquier parte, pero yo a los imports los dejo siempre, debajo de los metadatos).
```Markdown
import Comment from '@site/src/components/GiscusComponent';
```
Luego, al final del documento lo siguiente.

```Markdown
<Comment />
```

  </TabItem>

  <TabItem
    value="all"
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Todo el sitio</span>
      </div>
    }
  >
Deberás crear un archivo index.js en src/theme/DocItem/Footer que contenga lo siguiente:

```javascript
import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Comment from '@site/src/components/GiscusComponent';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div style={{ marginTop: '3rem' }}>
        <Comment />
      </div>
    </>
  );
}
```

Luego esto, verás en c/u de tus artículos los comentarios disponibles.
  </TabItem>
</Tabs>

Para ambas situaciones el resultado es el mismo y pueden verlo aquí abajo, espero que les haya servido, pero sino, pueden comentarlo aquí abajo.
