import { HomeHeader } from './header'
import { HomePartners } from './partners'
import { HomeServices } from './services'
import { HomeSpeakers } from './speakers'
import { HomeSponsors } from './sponsors'
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

export default HomeComponents
