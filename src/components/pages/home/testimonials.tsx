import Card from '@/components/cards'

export const HomeTestimonials = (): JSX.Element => (
	<div className="container my-20 px-5">
		<h1 className="text-4xl mb-20">What our customers say</h1>
		<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
			<Card.Testimonial
				span={2}
				title="Koo started to adopt BentoML more than a year ago as a platform of choice for model deployments and monitoring. From our early experience it was clear that deploying ML models, a statistic that most companies struggle with, was a solved problem for Koo. The BentoML team works closely with their community of users like I've never seen before. Their AMAs, the advocacy on Slack and getting on calls with their customers, are much appreciated by early-adopters and seasoned users"
				subtitle="Harsh Singhal, Head of Machine Learning, Koo"
			/>
			<Card.Testimonial
				title="BentoML is helping us future-proof our machine learning deployment infrastructure at Mission Lane. It is enabling us to rapidly develop and test our model scoring services , and to seamlessly deploy them into our dev, staging, and production Kubernetes clusters."
				subtitle="Mike Kuhlen, Data Science & Machine Learning Solutions and Strategy, Mission Lane"
			/>
			<Card.Testimonial
				title="BentoML enables us to deliver business value quickly by allowing us to deploy ML models to our existing infrastructure and scale the model services easily"
				subtitle="Shihgian Lee, Senior Machine Learning Engineer, Porch"
			/>
			<Card.Testimonial
				title="BentoML is an excellent tool for saving resources and running ML at scale in production"
				subtitle="Woongkyu Lee, Data and ML Engineer, LINE"
			/>
			<Card.Testimonial
				title="BentoML has helped us scale the way we help our users package and test their models. Their framework is core piece of our product. Really happy to be a part of the BentoML community"
				subtitle="Gabriel Bayomi, CEO, OpenLayer"
			/>
		</div>
	</div>
)
