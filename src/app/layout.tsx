import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'
import Layout from '@/components/layout'
import { home_meta } from '@/misc/meta'
import { sans_serif } from '@/styles/fonts'
import '@/styles/global.css'

export const metadata: Metadata = home_meta

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={twMerge(sans_serif.variable)}>
				<Layout.Navbar />
				{children}
				<Layout.Footer />
			</body>
		</html>
	)
}
