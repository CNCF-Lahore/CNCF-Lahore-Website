import Image from 'next/image'

const IMAGES = [1, 2, 3, 4]
export const HomeSponsors = () => {
	return (
		<div className="container px-5 mt-20">
			<h1 className="text-4xl mb-4 text-center">Sponsors</h1>
			<p className="md:w-1/2 w-ful text-gray-600 text-center mx-auto font-semibold mb-20">
				Powered by our Partners: Nurturing Innovation, Together.
			</p>
			<div className="grid md:grid-cols-4 grid-cols-2 gap-5 mb-20">
				{IMAGES.map((i) => (
					<div key={i} className="aspect-h-9 border rounded-lg aspect-w-16 w-full object-contain">
						<Image
							src={`/images/sponsors/${i}.png`}
							alt="partner"
							width={600}
							content="contain"
							className="object-contain mix-blend-multiply"
							height={600}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
