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
		navbar: [{
			text: '首页',
			link: '/',
		}, {
			text: 'API',
			link: '/api/',
		}, {
			text: '语法',
			link: '/syntax/',
		}],
	}),
})