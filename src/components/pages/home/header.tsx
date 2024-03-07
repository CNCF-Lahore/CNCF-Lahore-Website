import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import Button from '@/components/buttons'

const HeaderBTN1 = (): JSX.Element => (
	<Link
		href="/"
		className="bg-[--green-dark] box-shadow-lg flex flex-col flex-1 border border-[--green-dark] justify-between text-[--green-bg] rounded-lg p-5"
	>
		<h1 className="text-lg">
			Get <br /> Started
		</h1>
		<ArrowRightCircleIcon className="h-5 mt-5 ml-auto w-5 inline-block" />
	</Link>
)

const HeaderBTN2 = (): JSX.Element => (
	<Link
		href="/"
		className="bg-[--blue-dark] box-shadow-lg flex-1 border border-[--blue-dark] flex flex-col justify-between text-[--blue-bg] rounded-lg p-5"
	>
		<h1 className="text-lg">
			Start a free <br /> trial
		</h1>
		<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
	</Link>
)

export const HomeHeader = (): JSX.Element => (
	<div className="px-5">
		<header className="container px-10 bg-[--blue-bg] border py-20 my-10 border-[--blue-dark] flex md:flex-row flex-col gap-10 min-h-[70vh]">
			<div className="flex justify-between w-full flex-col gap-10 h-auto">
				<div>
					<h1 className="md:text-5xl text-4xl font-bold text-emerald-900">Build, Ship, Scale</h1>
					<h1 className="md:text-5xl text-4xl font-bold text-[--blue-dark]">Generative AI</h1>
					<h1 className="md:text-5xl text-4xl font-bold text-emerald-900">Applications</h1>
				</div>
				<div>
					<p className="text-gray-600 font-bold desciption">
						BentoML is the platform for <br /> software engineers to build AI products.
					</p>
				</div>
				<div>
					<Button.CTA title="Get Started" url="/" />
					<p className="font-bold mt-5 text-gray-600">
						Billions of predictions per day <br />
						3000+ community members <br />
						Used by 1000+ organizations
					</p>
				</div>
			</div>
			<div className="flex h-auto items-stretch flex-col md:w-1/2">
				<div className="h-full">{/* <Mosque /> */}</div>
				<div className="flex flex-col md:gap-10 gap-5 md:flex-row h-auto items-stretch">
					<HeaderBTN1 />
					<HeaderBTN2 />
				</div>
			</div>
		</header>
	</div>
)
