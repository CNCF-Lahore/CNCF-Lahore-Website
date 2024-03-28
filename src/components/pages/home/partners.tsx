import Image from 'next/image'

const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ]
export const HomePartners = () => {
	return (
		<div className="container px-5 md:px-5 mt-20">
			<h1 className="text-4xl mb-4 text-center">Community & Media Partners</h1>
			<p className="md:w-1/2 w-ful text-gray-600 text-center mx-auto font-semibold mb-20">
				Meet the Visionaries Behind the Cloud Revolution! Our Distinguished Speakers Bring Expertise and Innovation to
				the Stage. Get Inspired by the Faces Shaping the Future of Cloud Technology.
			</p>
			<div className="grid md:grid-cols-6 grid-cols-2 gap-5 mb-20">
				{IMAGES.map((i) => (
					<div key={i} className="aspect-h-9 border rounded-lg aspect-w-16 w-full object-contain">
						<Image
							src={`/images/partners/${i}.png`}
							alt="partner"
							width={600}
							content="contain"
							className="object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
							height={600}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
