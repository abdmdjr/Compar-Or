module.exports = {
	telemetry: false,
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		htmlAttrs: {
			lang: 'fr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '~plugins/vue-carousel', ssr: false },
		{ src: '~plugins/vue-notification', ssr: false }
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
		'nuxt-material-design-icons'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		proxy: true
	},
	proxy: {
		'/api': {
			target: 'localhost:3000',
			pathRewrite: {
				'^/api': '/'
			},
			changeOrigin: true
		}
	},
	/*
	 ** Build configuration
	 */
	build: {
		transpile: ['vee-validate/dist/rules'],
		extend(config, ctx) {}
	}
}
