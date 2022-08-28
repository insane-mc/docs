import { defaultTheme, defineUserConfig } from 'vuepress'

const sourceDir = __dirname

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'InsaneMC',
	description: '疯狂的 Minecraft 数据包构建工具',

	base: '/',
	public: `${sourceDir}/assets`,

	theme: defaultTheme({
		logo: '/logo.png',

		repo: 'insane-mc/docs',

		navbar: [{
			text: '指南',
			link: '/intro/',
		}, {
			text: '语法',
			link: '/syntax/',
		}, {
			text: 'API',
			link: '/api/',
		}],

		sidebar: {
			'/intro/': [{
				text: '快速上手',
				link: '/intro/',
			}, {
				text: 'README.md (English)',
				link: '/intro/insane-mc/',
			}],

			'/api/': [

			],

			'/syntax/': [

			],
		}
	}),

})