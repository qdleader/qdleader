import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import { navbar } from "./navbar.js"
import { searchPlugin } from "@vuepress/plugin-search"
import { backToTopPlugin } from "@vuepress/plugin-back-to-top"
import { nprogressPlugin } from "@vuepress/plugin-nprogress"
// import { clipboardPlugin } from 'vuepress-plugin-clipboard'
import { viteBundler } from "@vuepress/bundler-vite"
import { copyCodePlugin } from "@vuepress/plugin-copy-code"
// import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import path from "path"
import { catalogPlugin } from "@vuepress/plugin-catalog"
import { sitemapPlugin } from "@vuepress/plugin-sitemap"

import { copyrightPlugin } from '@vuepress/plugin-copyright'

export default defineUserConfig({
	extendsPage: (page) => {
		// 在 routeMeta 中设置目录信息
		page.routeMeta = {
			// 目录标题
			title: page.title,
			// ... 其他信息
		}
	},
	lang: "zh-CN",
	base: "/qdleader/",
	title: "Hi FE ！",
	description: "qdleader,前端面试题大全, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经",
	// plugins: [
	// 	autoCatalogPlugin({
	// 		// 不为 /foo/ 生成目录页
	// 		exclude: ["/foo/"],
	// 	}),
	// ],
	head: [
		// 设置 favor.ico，.vuepress/public 下
		["link", { rel: "icon", href: "https://qdleader.github.io/qdleader/qdleader.jpg" }],
		// SEO
		[
			"meta",
			{
				name: "keywords",
				content: "前端开发,qdleader,前端面试题大全, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经",
			},
			["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
			["meta", { name: "google-site-verification", content: "q56zlN4YQIQUwgGTM80BLZwESirvmrp0h9e7SHfg_Gg" }],
		],
		[["meta", { name: "google-site-verification", content: "q56zlN4YQIQUwgGTM80BLZwESirvmrp0h9e7SHfg_Gg" }]],
		[
			"script",
			{},
			`var _hmt = _hmt || [];
			(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?c448e2224bfefb1edc964cdd6e7b1175";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
			})()`,
		],
	],
	theme: defaultTheme({
		navbar,
		repo: "qdleader/qdleader",
		docsBranch: "master",
	}),
	// theme: themeSidebar(),
	resolve: {
		alias: [
			{
				// this is required for the SCSS modules
				find: /^~(.*)$/,
				replacement: "$1",
			},
		],
	},
	plugins: [
		searchPlugin({
			locales: {
				"/": {
					placeholder: "Search",
				},
				"/zh/": {
					placeholder: "搜索",
				},
			},
			hotKeys: ["s", "/", "enter"],
			// 排除首页
			isSearchable: (page) => page.path !== "/",
			// 允许搜索 Frontmatter 中的 `tags`
			getExtraFields: (page) => page.frontmatter.tags ?? [],
		}),
		backToTopPlugin(),
		nprogressPlugin(),
		copyCodePlugin({}),
		catalogPlugin({
			// 你的选项
		}),
		sitemapPlugin({
			// 选项
			hostname: "qdleader.github.io/qdleader",
		}),
		copyrightPlugin({
			author: "qdleader",
			link: 'Original posted at :link'
			// options
		  }),
	],
	bundler: viteBundler({
		viteOptions: {},
		vuePluginOptions: {},
	}),
})
