export type TestimonialCardProps = {
	title: string
	subtitle: string
	span?: number
}

export const TestimonialCard = ({ title, subtitle, span = 1 }: TestimonialCardProps): JSX.Element => {
	// break subtitle with comma and change color of the lest elemnt to green
	const subtitleArray = subtitle.split(',')
	const lastWord = subtitleArray.pop()
	const subtitleText = subtitleArray.join(',')

	const colSpan = `md:col-span-${span}`

	return (
		<div className={colSpan}>
			<div className="border border-[--green-dark] rounded-xl flex flex-col justify-between w-full h-full p-8 text-quote">
				<div className="mb-10">
					<h2 className="text-gray-900 text-lg after:content-['”'] before:content-['“']">{title}</h2>
				</div>
				<h4 className="text-[#A7A7A7]">
					{subtitleText} <span className="text-gray-900 font-semibold">, {lastWord}</span>
				</h4>
			</div>
		</div>
	)
}
