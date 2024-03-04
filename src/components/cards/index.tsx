import { CardProps, ServiceCard } from './service'
import { Children } from 'react'

export const Card = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(Card)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const Service = ({ title, description, color, btnTitle = undefined, url = undefined }: CardProps) => (
	<ServiceCard title={title} description={description} color={color} btnTitle={btnTitle} url={url} />
)
Card.Service = Service

export default Card
