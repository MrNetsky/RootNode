import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comment() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="MrNetsky/RootNode"
      repoId="R_kgDOQ0WUXQ"
      category="Announcements"
      categoryId="DIC_kwDOQ0WUXc4C102M"
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