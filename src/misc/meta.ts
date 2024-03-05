import { Metadata } from 'next'

const common_meta: Metadata = {
	applicationName: 'KCD Lahore',
	description: 'CNCF KCD Texas presents KCD Texas 2024 | Apr 12, 2024. Find event and ticket information.',
	keywords: 'Cloud Native, Cloud Native community groups, Kubernetes Cloud Native meetup, Kubernetes meetup',
	authors: [{ name: 'Zaid Bari', url: 'https://itszbari.com' }]
}

export const home_meta: Metadata = {
	title: 'Home | KCD Lahore',
	...common_meta
}
