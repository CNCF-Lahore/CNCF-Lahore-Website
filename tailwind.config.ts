import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#E46B25',
				dark: '#343434',
				light: '#fcf9f0'
			},
			fontFamily: {
				sans: ['var(--font-sans-serif)']
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
}
export default config
