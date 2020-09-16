/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		extend: {
			spacing: {
				'268': '268px',
				'310': '310px',
				'820': '820px',
				'249': '249px',
				'715': '715px',
				'479': '479px',
				'529': '529px',
				'309': '309px',
				'172': '172px',
				'18': '1.8rem',
				'60': '15rem',
				'72': '21rem',
				'15': '3.5rem',
				'9': '2.25rem'
			},
			fontSize: {
				'1xl': '1.45rem',
				'3xl': '1.8rem',
				'5xl': '3.85rem'
			},
			screens: {
				// eslint-disable-next-line prettier/prettier
				'lg': '1025px'
			},
			textColor: {
				primary: '#40327a'
			}
		}
	},
	variants: {},
	plugins: []
}
