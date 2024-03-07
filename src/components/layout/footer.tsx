import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

export const FooterComponent = (): JSX.Element => (
	<div className="px-5">
		<footer className="container bg-[--blue-bg] border py-20 px-10 rounded-b-none border-[--blue-dark] min-h-[70vh]">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-10">
				<div className="pb-20 md-pb-10 col-span-1">
					<h2 className="text-lg">Stay informed on feature releases, product roadmap, and community events!</h2>
				</div>
				<div className="col-span-1">
					<div className="grid  md:grid-cols-3 grid-cols-1 gap-10">
						<div className="md:col-span-2">
							<Link
								href="/"
								className="bg-[--violet-bg] box-shadow-lg flex-1 border border-[--violet-bg] flex flex-col justify-between text-[--green-dark] rounded-lg p-5"
							>
								<h1 className="text-lg">
									Join our global
									<br /> community
								</h1>
								<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
							</Link>
						</div>
						<div className="">
							<Link
								href="/"
								className="bg-[--blue-dark] box-shadow-lg flex-1 border border-[--blue-dark] flex flex-col justify-between text-[--blue-bg] rounded-lg p-5"
							>
								<h1 className="text-lg">
									Start a free <br /> trial
								</h1>
								<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
							</Link>
						</div>
						<div className="">
							<Link
								href="/"
								className="bg-[--green-dark] box-shadow-lg flex-1 border border-[--green-dark] flex flex-col justify-between text-[--green-bg] rounded-lg p-5"
							>
								<h1 className="text-lg">
									Schedule a <br />
									demo
								</h1>
								<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
							</Link>
						</div>
						<div className="md:col-span-2">
							<Link
								href="/"
								className="bg-white box-shadow-lg flex-1 border border-[--green-dark] flex flex-col justify-between text-[--green-dark] rounded-lg p-5"
							>
								<h1 className="text-lg">
									Subscribe our <br /> newsletter
								</h1>
								<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
)
