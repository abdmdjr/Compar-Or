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
		script: [
			{
				async: 'true',
				defer: 'true',
				'data-domain': 'compar-or.fr',
				src: 'https://plausible.io/js/plausible.js'
			}
		],
		link: [
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Overlock+SC&display=swap'
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
			},
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			},
			{ rel: 'manifest', href: '/site.webmanifest' }
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	/* 	loading: {
		color: 'orange',
		height: '2px'
	}, */
	/*
	 ** Global CSS
	 <script async defer data-domain="comparor.herokuapp.com" src="https://plausible.io/js/plausible.js"></script>
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '~plugins/vue-carousel', ssr: false },
		{ src: '~plugins/vue-notification', ssr: false },
		'~/plugins/vee-validate.js'
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
