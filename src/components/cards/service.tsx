import { LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'
import Button from '../buttons'

export type CardProps = {
	title: string
	description: string
	color: 'green' | 'blue' | 'violet'
	btnTitle?: string
	url?: LinkProps['href']
}

export const ServiceCard = ({
	title,
	description,
	color,
	btnTitle = undefined,
	url = undefined
}: CardProps): JSX.Element => {
	// switch case for colors
	let borderColor = ''
	let bgColor = ''

	switch (color) {
		case 'green':
			borderColor = 'border-[--green-dark]'
			bgColor = 'bg-[--green-bg]'
			break
		case 'blue':
			borderColor = 'border-[--blue-dark]'
			bgColor = 'bg-[--blue-bg]'
			break
		case 'violet':
			borderColor = 'border-[--violet-dark]'
			bgColor = 'bg-[--violet-bg]'
			break
		default:
			borderColor = 'border-[--green-dark]'
			bgColor = 'bg-[--green-bg]'
	}

	return (
		<div className="bg-[--card-bg] mb-10 border border-[--green-dark] rounded-lg p-5">
			<div className="flex flex-row justify-between">
				<h1 className={twMerge('text-2xl mb-5 text-[--green-dark]')}>{title}</h1>
				<span className={twMerge('w-[100px] h-[30px] rounded-full border', bgColor, borderColor)}></span>
			</div>
			<p className="text-gray-600 mb-5 font-semibold">{description}</p>
			{btnTitle && url && <Button.CTA title={btnTitle} url={url} />}
		</div>
	)
}
