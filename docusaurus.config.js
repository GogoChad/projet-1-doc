import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Linux Hardener',
  tagline: 'Audit, conformité et remédiation Linux',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },
  themes: ['@docusaurus/theme-mermaid'],
  favicon: 'img/logo.svg',
  url: 'http://localhost:3000',
  baseUrl: '/',
  organizationName: 'linux-hardener',
  projectName: 'linux-hardener',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/og-linux-hardener.svg',
    metadata: [
      {name: 'theme-color', content: '#0a0f14'},
      {name: 'description', content: 'Documentation technique de Linux Hardener 0.6.0'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Linux Hardener',
      logo: {
        alt: 'Linux Hardener',
        src: 'img/logo.svg',
        width: 28,
        height: 28,
      },
      items: [
        {to: '/docs/intro', label: 'Documentation', position: 'left'},
        {to: '/docs/installation', label: 'Installation', position: 'left'},
        {to: '/docs/architecture', label: 'Architecture', position: 'left'},
        {to: '/docs/commandes', label: 'Commandes', position: 'left'},
        {to: '/docs/api', label: 'API', position: 'left'},
        {to: '/docs/developpement', label: 'Développement', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Démarrage', to: '/docs/installation'},
            {label: 'Commandes', to: '/docs/commandes'},
            {label: 'Contrôles', to: '/docs/controles'},
          ],
        },
        {
          title: 'Plateforme',
          items: [
            {label: 'API & Dashboard', to: '/docs/api'},
            {label: 'Agent', to: '/docs/agent'},
            {label: 'Docker Lab', to: '/docs/docker-lab'},
          ],
        },
        {
          title: 'Projet',
          items: [
            {label: 'Architecture', to: '/docs/architecture'},
            {label: 'Développement', to: '/docs/developpement'},
            {label: 'Dépannage', to: '/docs/depannage'},
          ],
        },
      ],
      copyright: `Linux Hardener · Documentation technique · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
