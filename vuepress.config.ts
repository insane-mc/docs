import fs from 'fs'
import path from 'path'
import frontmatter from 'frontmatter'
import { SidebarItem, defaultTheme, defineUserConfig } from 'vuepress'

const sourceDir = __dirname

function generateSidebarFrom(dir: string): Array<SidebarItem> {
	return fs.readdirSync(dir, { withFileTypes: true })
		.filter(item => item.isDirectory() && fs.existsSync(path.join(dir, item.name, 'README.md')))
		.map(item => {
			const data: any = frontmatter(fs.readFileSync(path.join(dir, item.name, 'README.md')).toString())?.data || {}
			return {
				text: data.title || item.name,
				link: '/' + path.relative(__dirname, path.join(dir, item.name)).replace(/\\/g, '/'),
			}
		})
}

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'InsaneMC',
	description: '疯狂的 Minecraft 数据包构建工具',

	head: [
		['link', { rel: "shortcut icon", href: "/logo.png" }],
		['meta', { name: "msapplication-TileColor", content: "#3eaf7c" }],
		['meta', { name: "theme-color", content: "#ffffff" }],
	],

	base: '/',
	public: `${sourceDir}/.vuepress/assets`,

	theme: defaultTheme({
		// logo: '/avatar.png',

		repo: 'insane-mc/imc',
		docsRepo: 'insane-mc/docs',

		contributors: false,
		lastUpdatedText: '上次更新',
		editLinkText: '帮助我们改善此页面',

		navbar: [
			{ text: '入门指南', link: '/intro/' },
			{ text: 'API 文档', link: '/api/' },
			{ text: 'IMCL 文档', link: '/imcl/' },
			{ text: '官方实践', link: '/packages/' },
		],

		sidebar: {
			'/intro/': [
				{ text: '快速上手', link: '/intro/' },
				{ text: 'README.md (English)', link: '/intro/readme-en/' }
			],

			'/api/': [
				{ text: 'API 文档', link: '/api/' },
				...generateSidebarFrom(path.join(__dirname, 'api')),
			],

			'/imcl/': [
				{ text: 'IMCL 文档', link: '/imcl/' },
				...generateSidebarFrom(path.join(__dirname, 'imcl')),
			],

			'/packages/': [
				{ text: '官方实践', link: '/packages/' },
				...generateSidebarFrom(path.join(__dirname, 'packages')),
			],
		}
	}),

})