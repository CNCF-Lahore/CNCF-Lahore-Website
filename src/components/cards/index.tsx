import { ServiceCard, ServiceCardProps } from './service'
import { TestimonialCard, TestimonialCardProps } from './testimonial'
import { Children } from 'react'

export const Card = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(Card)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const Service = ({ title, description, color, btnTitle = undefined, url = undefined }: ServiceCardProps) => (
	<ServiceCard title={title} description={description} color={color} btnTitle={btnTitle} url={url} />
)
Card.Service = Service

const Testimonial = ({ title, subtitle, span }: TestimonialCardProps) => (
	<TestimonialCard title={title} span={span} subtitle={subtitle} />
)
Card.Testimonial = Testimonial

export default Card
