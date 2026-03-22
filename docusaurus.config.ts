import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RootNode',
  tagline: 'Un espacio para explorar la evolución tecnológica: desde el flujo de trabajo en la terminal hasta el modding de hardware retro.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://MrNetsky.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/RootNode/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrNetsky', // Usually your GitHub org/user name.
  projectName: 'RootNode', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MrNetsky/RootNode/tree/main/',
        },
        blog: {
          showReadingTime: true,
          //Esta opción de abajo, permite ver TODOS los blog y no solo una cantidad específica
          blogSidebarCount: 'ALL', 
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MrNetsky/RootNode/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
      {
        src: 'https://kit.fontawesome.com/883a12fdd2.js', // Reemplaza con tu Kit ID o un CDN
        crossorigin: 'anonymous',
      },
    ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RootNode',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/MrNetsky/RootNode',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contenido',
          items: [
            {
              html: `
                <a href="/RootNode/docs/category/neovim" class="footer__link-item">
                  <i class="fas fa-keyboard"></i> Guía LazyVim
                </a>
              `,
            },
            {
              html: `
                <a href="/RootNode/docs/category/ps2" class="footer__link-item">
                  <i class="fas fa-gamepad"></i> OPL en PS2
                </a>
              `,
            },
            {
              html: `
                <a href="/RootNode/blog/tmux" class="footer__link-item">
                  <i class="fas fa-terminal"></i> Blog: tmux
                </a>
              `,
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              html: `
                <a href="https://www.linkedin.com/in/pablo-ac97/" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
              `,
            },
            {
              html: `
                <a href="mailto:pablo.leandro.ac@gmail.com" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <i class="fas fa-envelope"></i> Mail
                </a>
              `,
            },
            {
              html: `
                <a href="https://x.com/PablitooAC97" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <i class="fab fa-x-twitter"></i> X
                </a>
              `,
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              html: `
                <a href="https://github.com/MrNetsky/Apuntes" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <i class="fab fa-github"></i> ¡Mis apuntes!
                </a>
              `,
            },
            {
              html: `
                <a href="https://github.com/MrNetsky/RootNode/issues" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <i class="fas fa-lightbulb"></i> Sugerencias o errores
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
