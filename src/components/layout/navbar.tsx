import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export const NavbarComponent = (): JSX.Element => (
	<div className="px-5">
		<nav className="max-w-[1600px] md:mx-auto sticky bg-white border border-t-0 border-black rounded-b-xl py-4 px-10 flex flex-row justify-between items-center">
			<Link href={'/'} className="brand">
				KCD Lahore
			</Link>
			<ul className="md:flex flex-row justify-between gap-10 hidden">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>
					<Link href="/">Contact</Link>
				</li>
			</ul>
			<Link href={'/'} className="btn btn-blue font-normal">
				Register <ArrowRightIcon className="h-5 w-5 inline-block" />
			</Link>
		</nav>
	</div>
)
