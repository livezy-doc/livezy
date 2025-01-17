// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LivEzy',
  tagline: '',
  favicon: 'img/livesy-logo.ico',
  

  // Set the production url of your site here
  url: 'https://livezy-doc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/livezy/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'livezy-doc', // Usually your GitHub org/user name.
  projectName: 'livezy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LivEzy',
        logo: {
          alt: 'Life Made Easy',
          src: 'img/livezy-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'User Guide',
          },
          
		  {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Release Notes',
          },
		  
		  
          {
            href: 'https://liv-ezy.com/',
            label: 'Discover Us',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/intro',
              },
			  
			  
			  {
                label: 'Release Notes',
                to: '/docs/intro',
              },
			  
			  
			  
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/jmr-infotech/mycompany/verification/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/JMRInfotech?mibextid=ZbWKwL',
              },
             
            ],
          },
          {
            title: 'More',
            items: [
              
			  
			  
			  {
                label: 'Knowledge Bank',
                href: 'https://jmrinfotech.com/related-resources/',
              },
			  
			  
			  
			  {
                label: 'News Room',
                href: 'https://jmrinfotech.com/newsroom/',
              },
			  
			  
			  
              {
                label: 'Join JMR',
                href: 'https://jmrinfotech.com/current-openings-at-jmr-infotech/',
              },
			  
			  
			   {
                label: 'Contact Us',
                href: 'https://jmrinfotech.com/contact-us/',
              },
			  
			  
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JMR Infotech.`,
		
		
		
		
		logo: {
        alt: 'Follow Us',
        src: 'img/JMR_LOGO.png',
        href: 'https://jmrinfotech.com/',
		target: 'blank',
        width: 60,
        height: 60,
      },
		
		
		
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
	
	
	

	themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
	
 


}


export default config;
