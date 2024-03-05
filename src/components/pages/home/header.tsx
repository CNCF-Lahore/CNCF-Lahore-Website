import { ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const HeaderCTA = (): JSX.Element => (
	<div className="header_cta">
		<Link href="/" className="btn-white inline-block">
			Grab Your Ticket <ArrowRightIcon className="h-5 w-5 inline-block" />
		</Link>
		<p className="font-bold mt-5 text-gray-600">
			Powering Global Innovation with Kubernetes: <br />

			Orchestrating millions of containers daily, across the globe. <br />
			Empowering a global community of millions of developers and professionals. <br />
			Adopted by over 10,000 organizations worldwide, including giants like <br /> Netflix, Uber, and Google.
			{/* Billions of predictions per day <br />
			3000+ community members <br />
			Used by 1000+ organizations */}
		</p>
	</div>
)

const HeaderBTN1 = (): JSX.Element => (
	<div className="header_btn_1">
		<Link
			// href="/"
			href="https://cncf-lahore.github.io/Playground-Landing/"
			className="bg-[--green-dark] box-shadow-lg flex flex-col border border-[--green-dark] justify-between text-[--green-bg] rounded-lg p-5"
		>
			<h1 className="text-lg">
				Start Kubernetes Bootcamp
				{/* Get <br /> Your Ticket */}
			</h1>
			<ArrowRightCircleIcon className="h-5 mt-5 ml-auto w-5 inline-block" />
		</Link>
	</div>
)

const HeaderBTN2 = (): JSX.Element => (
	<div className="header_btn_2">
		<Link
			// href="/"
			href="https://cncf-lahore.github.io/Playground-Landing/"
			className="bg-[--blue-dark]  box-shadow-lg border border-[--blue-dark] flex flex-col justify-between text-[--blue-bg] rounded-lg p-5"
		>
			<h1 className="text-lg">
				Kubernetes Playground
			</h1>
			<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
		</Link>
	</div>
)

export const HomeHeader = (): JSX.Element => (
	<div className="px-5">
		<header className="parent container bg-[--blue-bg] h-[70vh] border py-20 my-10 border-[--blue-dark]">
			<div className="header_title">
			 
				<h1 className="text-5xl font-bold text-emerald-900">Empowering Cloud Natives:</h1>
				<h1 className="text-5xl font-bold text-[--blue-dark]">Innovate, Integrate, Accelerate</h1>
				{/* <h1 className="text-5xl font-bold text-emerald-900">Applications</h1> */}
			</div>
			<div className="header_description">
				<p className="text-gray-600 font-bold desciption">
					Unlock the Power of Kubernetes: Innovate, Connect, Transform at KCD Lahore 2024.
					{/* BentoML is the platform for <br /> software engineers to build AI products. */}
				</p>
			</div>
			<HeaderCTA />
			<div className="header_image"> </div>
			<HeaderBTN1 />
			<HeaderBTN2 />
		</header>
	</div>
)
