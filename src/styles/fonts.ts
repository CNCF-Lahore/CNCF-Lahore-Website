import { Open_Sans } from 'next/font/google'

export const sans_serif = Open_Sans({
	weight: ['400', '600', '700', '800'],
	subsets: ['latin-ext'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-sans-serif'
})
