import { defaultTheme, defineUserConfig } from 'vuepress'

const sourceDir = __dirname

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'InsaneMC',
	description: '疯狂的 Minecraft 数据包构建工具',

	base: '/',
	public: `${sourceDir}/.vuepress/assets`,

	theme: defaultTheme({
		logo: '/logo.png',

		repo: 'insane-mc/imc',
		docsRepo: 'insane-mc/docs',

		lastUpdatedText: '上次更新',		
		contributorsText: '贡献者',
		editLinkText: '帮助我们改善此页面',

		navbar: [
			{ text: '入门指南', link: '/intro/' },
			{ text: 'API 文档', link: '/api/' },
			{ text: 'IMCL 语法', link: '/syntax/' },
		],

		sidebar: {
			'/intro/': [
				{ text: '快速上手', link: '/intro/' },
				{ text: 'README.md (English only)', link: '/intro/insane-mc/' }
			],

			'/api/': [
			],

			'/syntax/': [
			],
		}
	}),

})