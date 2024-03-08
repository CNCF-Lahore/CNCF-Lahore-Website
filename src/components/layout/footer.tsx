import Link from 'next/link'
import { Linkedin, Instagram } from 'lucide-react'
import threads from '@/images/socials/threads-icon.svg'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export const FooterComponent = (): JSX.Element => (
	<div className="px-5">
		<footer className="container bg-[--blue-bg] border py-20 px-10 rounded-b-none border-[--blue-dark] min-h-[70vh]">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
				<div className="pb-0 md-pb-10 col-span-1">
					<h2 className="text-lg">Stay informed on feature releases, product roadmap, and community events!</h2>
					<div className='flex max-sm:h-28 max-sm:w-28 item-center space-x-10 mt-8 sm:mt-52'>
						<Link href={'https://www.linkedin.com/company/kubernetes-community-days-lahore/'} target='_blank'>
							<Linkedin color='#000000' size={60}/>
						</Link>

						<Link href={'https://www.instagram.com/kcdlahore/'} target='_blank'>
							<Instagram color='#000000' size={60}/>
						</Link>

						<Link href={'https://www.threads.net/@kcdlahore'} target='_blank'>
							<Image src={threads} alt='https://www.threads.net/@kcdlahore' height={50} width={50} />
						</Link>
					</div>
				</div>
				<div className="col-span-1">
					<div className="grid md:grid-cols-3 grid-cols-1 gap-10">
						<div className="md:col-span-2">
							<Link
								href="https://cncflahore.slack.com/"
								target='_blank'
								className="bg-[--violet-bg] box-shadow-lg flex-1 border border-[--violet-bg] flex flex-col justify-between text-[--green-dark] rounded-lg p-5"
							>
								<h1 className="text-lg">
									Join our global
									<br /> community
								</h1>
								<ArrowRightCircleIcon className="h-5 w-5 mt-5 ml-auto inline-block" />
							</Link>
						</div>
						{/* <div className="">
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
						// </div> */}
						<div className="md:col-span-2">
							<Link
								href="https://mail.googlecloudlahore.com/subscription/form"
								target='_blank'
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
