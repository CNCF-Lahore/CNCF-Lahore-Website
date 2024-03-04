import Image from 'next/image'

type SpeakerCardProps = {
	name: string
	role: string
	img: string
	socials?: {
		facebook?: string
		twitter?: string
		linkedin?: string
		instagram?: string
		youtube?: string
		github?: string
		website?: string
	}
}

export const SpeakerCard = ({ name, role, img, socials = undefined }: SpeakerCardProps): JSX.Element => {
	return (
		<div className="bg-white rounded-xl border border-[--green-dark]">
			<div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-t-xl bg-gray-200">
				<Image
					src={img}
					alt={name}
					width={600}
					height={600}
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
				/>
			</div>
			<div className="mt-4 p-5">
				<h2 className="text-2xl text-gray-800">{name}</h2>
				<h3 className="text-gray-600 font-semibold mb-20">{role}</h3>
				<div className="flex flex-row gap-5">
					{socials &&
						Object.keys(socials).map((key) => (
							<a key={key} href={socials[key as keyof typeof socials]} target="_blank" rel="noreferrer">
								<Image src={`/images/socials/${key}.svg`} alt={key} width={50} height={50} className="h-8 w-8" />
							</a>
						))}
				</div>
			</div>
		</div>
	)
}
