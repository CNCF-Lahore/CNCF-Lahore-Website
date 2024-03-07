import Image from 'next/image'
import Card from '@/components/cards'

// if btnTitle is provided, url should also be provided and vice versa
export const HomeServices = (): JSX.Element => (
	<div className="bg-white my-20 py-20 px-5">
		<div className="container">
			<div className="flex md:flex-row items-center flex-col gap-10">
				<div className="md:w-1/2 w-full">
					<h1 className="text-xl font-bold text-[--blue-dark]">KCD Lahore</h1>
					<h2 className="text-4xl my-5 font-bold text-[--green-dark]">Kubernetes Community Days Lahore</h2>
					<p className="text-gray-600 font-semibold mb-20">
						Experience the power of community at the Kubernetes Community Days in Lahore! When a diverse group of
						experts comes together to learn, network, and share knowledge on all things cloud native.
					</p>
					<Card.Service
						title="01. Modals"
						description="Manage and version all your models in an open and standardized format"
						color="green"
					/>
					<Card.Service
						title="02. Modals"
						description="Manage and version all your models in an open and standardized format"
						color="blue"
					/>
					<Card.Service
						title="03. Modals"
						description="Manage and version all your models in an open and standardized format"
						color="violet"
					/>
				</div>
				<div className="md:w-1/2 w-full">
					<Image
						src="/images/logo.png"
						className="block md:ml-auto mx-auto"
						width="500"
						height="500"
						alt="KCD Lahore"
					/>
				</div>
			</div>
		</div>
	</div>
)
