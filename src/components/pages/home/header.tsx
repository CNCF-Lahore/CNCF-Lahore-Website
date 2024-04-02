import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import Button from '@/components/buttons'
import { Hero } from '@/components/carousel/carousel';
import Asset1 from "@/images/carousel/Asset 1.svg";
import Asset2 from "@/images/carousel/Asset 2.svg";
import Asset3 from "@/images/carousel/Asset 3.svg";




const backgroundImages = [Asset1, Asset2, Asset3];

const HeaderBTN1 = (): JSX.Element => (
	<Link
		href="https://kubecamp.kcdlahore.org/"
		target='_blank'
		className="bg-[--green-dark] box-shadow-lg flex flex-col flex-1 border border-[--green-dark] justify-between text-[--green-bg] rounded-lg p-5"
	>
		<h1 className="text-lg">
			Start Kubernetes Bootcamp
			{/* Get <br /> Started */}
		</h1>
		<ArrowRightCircleIcon className="h-5 mt-5 ml-auto w-5 inline-block" />
	</Link>
)

const HeaderBTN2 = (): JSX.Element => (
	<Link
		href="https://cncf-lahore.github.io/Playground-Landing/"
		target='_blank'
		className="bg-[--blue-dark] box-shadow-lg flex-1 border border-[--blue-dark] flex flex-col justify-between text-[--blue-bg] rounded-lg p-5"
	>
		<h1 className="text-lg">
			Kubernetes Playground
			{/* Start a free <br /> trial */}
		</h1>
		<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
	</Link>
)

export const HomeHeader = (): JSX.Element => (
	
	<div className="px-5">
		<header className="container px-10 bg-[--blue-bg] border py-20 my-10 border-[--blue-dark] flex md:flex-row flex-col gap-10 min-h-[70vh]">
			<div className="flex justify-between w-full flex-col gap-10 h-auto">
				<div>
					<h1 className="md:text-5xl text-4xl font-bold text-emerald-900">Empowering Cloud Natives:</h1>
					<h1 className="md:text-5xl text-4xl font-bold text-[--blue-dark]">Innovate, Integrate, Accelerate</h1>
					{/* <h1 className="md:text-5xl text-4xl font-bold text-emerald-900">Applications</h1> */}
				</div>
				<div>
					<p className="text-gray-600 font-bold desciption">
						Unlock the Power of Kubernetes: Innovate, Connect, Transform at KCD Lahore 2024.
						{/* BentoML is the platform for <br /> software engineers to build AI products. */}
					</p>
				</div>
				
				<div>
					<Button.CTA title="Grab Your Ticket" url="https://www.meetup.com/cncf-lahore/events/299706813/" />
					<p className="font-bold mt-5 text-gray-600">
						{/* Orchestrating millions of containers daily, across the globe. <br />
						Empowering a global community of millions of developers and professionals. <br /> */}
						Adopted by over 10,000 organizations worldwide, including giants like <br /> Netflix, Uber, and Google.
						{/* Billions of predictions per day <br />
						3000+ community members <br />
						Used by 1000+ organizations */}
					</p>
				</div>
			</div>
			<div className="flex h-auto items-stretch flex-col md:w-1/2">
				<div className='ml-0 -mt-10 md:-mt-10 md:ml-24 max-md:h-40'>
					<Hero images={backgroundImages} />
				</div>
				<div className="h-full">{/* <Mosque /> */}</div>
				
				<div className="flex flex-col md:gap-10 gap-5 md:flex-row h-auto items-stretch">
				
					<HeaderBTN1 />
					<HeaderBTN2 />
				</div>
			</div>
		</header>
	</div>
)
