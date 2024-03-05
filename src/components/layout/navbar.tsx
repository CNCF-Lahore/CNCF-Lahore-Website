'use client'
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const NavbarComponent = (): JSX.Element => {
	const [isClient, setIsClient] = useState(false);	// I made it Client-side Component since Hooks don't work over Server-side Component in NextJs
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	  };
  
	useEffect(() => {
		setIsClient(true);
	  }, []); // Empty dependency array ensures this effect runs only once after initial render
	
	  if (!isClient) {
		return <></>; // Don't render anything on the server-side; it's same as return null
	  }
  
	  // Following is a Client-side component
	return (
	  <nav className="max-w-7xl md:mx-auto mx-5 sticky bg-white border border-t-0 border-black rounded-b-xl py-4 px-10 flex flex-row justify-between items-center">
		<Link href={'/'} className="brand">
		  KCD Lahore
		</Link>
		<div className="md:hidden">
		  {/* This div will be displayed only on small screens */}
		  <button className="text-black focus:outline-none" onClick={toggleMenu}>
          {/* Add a button to toggle the menu */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
		</div>
		<div className={`md:flex flex-row items-center gap-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
		  {/* This div will be hidden on small screens */}
		  <ul className="flex flex-col md:flex-row justify-between md:gap-10">
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
		</div>
	  </nav>
	);
  };

// ---------------------------------------

// export const NavbarComponent = (): JSX.Element => (
// 	<nav className="max-w-7xl md:mx-auto mx-5 sticky bg-white border border-t-0 border-black rounded-b-xl py-4 px-10 flex flex-row justify-between items-center">
// 		<Link href={'/'} className="brand">
// 			KCD Lahore
// 		</Link>
// 		<ul className="flex flex-row justify-between gap-10">
// 			<li>
// 				<Link href="/">Home</Link>
// 			</li>
// 			<li>
// 				<Link href="/">About</Link>
// 			</li>
// 			<li>
// 				<Link href="/">Contact</Link>
// 			</li>
// 		</ul>
// 		<Link href={'/'} className="btn btn-blue font-normal">
// 			Register <ArrowRightIcon className="h-5 w-5 inline-block" />
// 		</Link>
// 	</nav>
// )
