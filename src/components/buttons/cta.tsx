import Link, { LinkProps } from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export type CTAProps = {
	title: string
	url: LinkProps['href']
}

export const CTAButton = ({ title, url }: CTAProps): JSX.Element => (
	<Link href={url} className="btn-white inline-block">
		{title} <ArrowRightIcon className="h-5 w-5 inline-block" />
	</Link>
)
