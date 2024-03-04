import { CTAButton, CTAProps } from './cta'
import { Children } from 'react'

export const Button = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(Button)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const CTA = ({ title, url }: CTAProps) => <CTAButton title={title} url={url} />
Button.CTA = CTA

export default Button
