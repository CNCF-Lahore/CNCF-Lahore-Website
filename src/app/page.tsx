import HomeComponents from '@/components/pages/home'

export default function Home() {
	return (
		<main>
			<HomeComponents.Header />
			<HomeComponents.Partners />
			<HomeComponents.Services />
			<HomeComponents.Speakers />
			{/* <HomeComponents.Sponsors /> */}
			{/* <HomeComponents.Split /> */}
			{/* <HomeComponents.Testimonials /> */}
		</main>
	)
}
