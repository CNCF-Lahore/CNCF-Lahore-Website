import { HomeHeader } from './header'
import { HomePartners } from './partners'
import { HomeServices } from './services'
import { HomeSpeakers } from './speakers'
import { HomeSplit } from './split'
import { HomeSponsors } from './sponsors'
import { HomeTestimonials } from './testimonials'
import { Children } from 'react'

export const HomeComponents = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(HomeComponents)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const Header = () => <HomeHeader />
HomeComponents.Header = Header

const Services = () => <HomeServices />
HomeComponents.Services = Services

const Speakers = () => <HomeSpeakers />
HomeComponents.Speakers = Speakers

const Partners = () => <HomePartners />
HomeComponents.Partners = Partners

const Sponsors = () => <HomeSponsors />
HomeComponents.Sponsors = Sponsors

const Split = () => <HomeSplit />
HomeComponents.Split = Split

const Testimonials = () => <HomeTestimonials />
HomeComponents.Testimonials = Testimonials

export default HomeComponents
