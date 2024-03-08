import Image from 'next/image'
import Card from '@/components/cards'

// if btnTitle is provided, url should also be provided and vice versa
export const HomeServices = (): JSX.Element => (
	<div className="bg-white my-20 py-20 px-5">
		<div className="container">
			<div className="flex md:flex-row items-center flex-col gap-10">
				<div className="md:w-1/2 w-full">
					<h1 className="text-xl font-bold text-[--blue-dark]">KCD Lahore</h1>
					<h2 className="text-4xl my-5 font-bold text-[--green-dark]">How to get started with our Kubernetes Bootcamp</h2>
					<p className="text-gray-600 font-semibold mb-20">
					Kickstart your Kubernetes journey with our Bootcamp. Learn to set up, deploy applications, and grasp essential concepts like pods and services. Ideal for beginners, it's your gateway to mastering the Kubernetes ecosystem.
					</p>
					<Card.Service
						title="Step 01"
						description="Join our Kubernetes Bootcamp"
						color="green"
						btnTitle='Go'
						url="https://kubecamp.kcdlahore.org/"
					/>
					<Card.Service
						title="Step 02"
						description="Active your Kubernetes Playground"
						color="blue"
						btnTitle='Go'
						url="https://playground.kcdlahore.org/"
					/>
					<Card.Service
						title="Step 03"
						description="Get your Digital badge by completing a quiz"
						color="violet"
						btnTitle='Go'
						url="https://kubecamp.kcdlahore.org/update-your-app/quiz"
					/>
				</div>
				<div className="md:w-1/2 w-full">
					<Image
						src="/images/logo.png"
						className="block md:ml-auto mx-auto"
						width="300"
						height="300"
						alt="KCD Lahore"
					/>
				</div>
			</div>
		</div>
	</div>
)
