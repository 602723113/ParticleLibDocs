// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ParticleLib',
  tagline: '一个随便写的但是还挺稳的粒子特效库',
  url: 'https://effect.zoyn.top/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zoyn', // Usually your GitHub org/user name.
  projectName: 'ParticleLib', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ParticleLib',
        logo: {
          alt: 'ParticleLib 的主页',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'start',
            position: 'left',
            label: '指南',
          },
          {to: '/blog', label: '神识!', position: 'left'},
          {
            href: 'https://github.com/602723113/ParticleLib',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '指南',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ',
                href: 'https://jq.qq.com/?_wv=1027&k=COwCwxSW',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: 'https://blog.zoyn.top/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/602723113',
              },
            ],
          },
        ],
        copyright: `MIT Licensed | Copyright © 2020-2023 Zoyn Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
