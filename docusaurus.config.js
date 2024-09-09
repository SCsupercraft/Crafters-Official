// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Crafters Official',
	// tagline: 'Dinosaurs are cool',
	favicon: 'img/Logo.png',

	// Set the production url of your site here
	url: 'https://scsupercraft.github.io/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/Crafters-Official/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Crafters Official', // Usually your GitHub org/user name.
	projectName: 'crafters-official-website', // Usually your repo name.

	onBrokenLinks: 'ignore',
	onBrokenMarkdownLinks: 'ignore',

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
					routeBasePath: '/games',
					sidebarPath: './sidebars.js',
				},
				blog: {
					routeBasePath: '/updates',
					showReadingTime: false,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					postsPerPage: 'ALL',
					blogSidebarTitle: 'All updates',
					blogSidebarCount: 'ALL',
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'ignore',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'fnag',
				path: 'games/fnag',
				routeBasePath: 'fnag',
				sidebarPath: './sidebars.js',
				// ... other options
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'block-lands',
				path: 'games/block-lands',
				routeBasePath: 'block-lands',
				sidebarPath: './sidebars.js',
				// ... other options
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Crafters Official',
				logo: {
					alt: 'Crafters Official Logo',
					src: 'img/Logo.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'sidebar',
						position: 'left',
						label: 'Games',
					},
					{ to: '/updates', label: 'Updates', position: 'left' },
					{
						href: 'https://github.com/SCsupercraft/Crafters-Official',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Pages',
						items: [
							{
								label: 'Games',
								to: '/games',
							},
						],
					},
					{
						title: 'Featured',
						items: [
							{
								label: 'FNAG',
								to: '/games/fnag',
							},
						],
					},
					/*{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus',
							},
						],
					},*/
					{
						title: 'More',
						items: [
							{
								label: 'Updates',
								to: '/updates',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/SCsupercraft/Crafters-Official',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} SCsupercraft.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
		}),
};

export default config;
