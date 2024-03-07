export const HomeSplit = (): JSX.Element => (
	<div className="w-full grid-cols-2 pt-0 md:pt-40 md:grid">
		<div className="relative pt-20 md:pt-40 md:pb-40 bg-[--green-dark]">
			<div className="flex items-center w-full h-full px-5 py-10 ml-auto md:pr-20 md:py-20 max-w-[800px]">
				<div className="w-full">
					<h1 className="text-4xl mb-5 font-semibold text-[--green-light]">BentoCloud</h1>
					<h2 className="text-4xl mb-5 font-semibold text-[--violet-bg]">
						Bring your AI products to market 10x Faster Faster Faster
					</h2>
					<p className="font-semibold text-gray-100 text-lg">
						Free developers from the time-consuming process of messing with infrastructure, so they can focus on
						innovating with AI
					</p>
					<p className="mt-20 text-[--green-light] text-2xl leading-relaxed">
						Deliver AI products in a fast and repeatable way <br />
						Harness GPU for inference without the headaches <br />
						Unlock insight and performance of your models
					</p>
				</div>
			</div>
		</div>
		<div className="h-full bg-[--violet-bg]">
			<div className="flex items-center justify-center w-full h-full">
				<div className="relative flex justify-center w-full"></div>
			</div>
		</div>
	</div>
)
