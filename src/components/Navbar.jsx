import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Camera } from 'react-feather'
import Logo from './Logo'

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false)

	const handleSidebar = () => {
		setSidebar(!sidebar)
	}

	return (
		<div className=''>
			<motion.nav className='bg-black font-raleway fixed h-14 sm:h-16 md:h-16 flex border-b border-gray-50 items-center justify-between inset-x-0 top-0 px-4 sm:px-7 md:px-10'>
				<div className='flex gap-x-10 z-50'>
					{/* Left Side -- Toggle Menu */}
					<button
						className='hidden sm:inline-flex transition '
						onClick={handleSidebar}
					>
						<Menu className='text-white hover:text-blue-500 focus:text-blue-500 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6' />
					</button>
					{/* Logo */}
					<Logo />
				</div>
				<div className='font-roboto whitespace-nowrap flex items-center gap-2 sm:gap-4 md:gap-8'>
					<button className='hidden sm:inline-flex text-white border text-sm sm:text-lg md:text-lg border-gray-50 py-1 px-4 rounded-full font-normal outline-none  focus:outline-none mr-2   whitespace-nowrap'>
						Sign In
					</button>
					<motion.button className='hidden sm:inline-flex bg-gray-100 text-sm sm:text-lg md:text-lg py-1 px-4 rounded-full outline-none focus:outline-none whitespace-nowrap font-normal text-gray-900'>
						Sign Up
					</motion.button>
					{/* Toggle Menu */}
					<button
						className='transition sm:hidden'
						onClick={handleSidebar}
					>
						<Menu className='text-white hover:text-blue-500 focus:text-blue-500 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6' />
					</button>
				</div>
			</motion.nav>
			{/* Sidebar Container */}
			<div>
				{/* sidebar overlay -- covers part of the page... */}
				<div
					className={
						sidebar
							? 'bg-black cursor-pointer fixed inset-0 opacity-70 visible'
							: 'hidden opacity-0'
					}
					onClick={handleSidebar}
				></div>
				{/* sidebar */}
				<div
					className={
						sidebar
							? 'bg-purple-500 z-50 duration-300 fixed inset-y-0 left-0 transition-left md:w-64 w-full h-full'
							: 'bg-purple-500 z-50 duration-500 fixed inset-y-0 -left-full transition-left md:w-64 w-full h-full'
					}
				>
					{/* sidebar close button */}
					<button
						className='bg-gray-300 text-white absolute right-4 p-2 rounded-full top-4 transition hover:text-red-400 bg-opacity-50'
						onClick={handleSidebar}
					>
						<X className='text-black w-6 h-6 font-bold' />
					</button>

					{/* Sidebar Menu */}
					<div className='h-screen flex items-center justify-center px-7 py-10 flex-col gap-y-8'>
						<h2 className='font-semibold text-xl'>Menu</h2>
						<ul className='flex flex-col items-center h-full justify-center font-bold font-openSans text-black text-2xl'>
							<li className='hover:bg-purple-800 w-full text-center py-3'>
								<Link href='/'>
									<a>Home</a>
								</Link>
							</li>
							<li className='hover:bg-purple-800 w-full text-center py-3'>
								<Link href='/clubs'>
									<a>Clubs</a>
								</Link>
							</li>
							<li className='hover:bg-purple-800 w-full text-center py-3'>
								<Link href='/stakings'>
									<a>Stakings</a>
								</Link>
							</li>
							<li className='hover:bg-purple-800 w-full text-center py-3'>
								<Link href='/kongs'>
									<a>My Kongs</a>
								</Link>
							</li>
						</ul>
						{/* Authentication Buttons */}
						<div className='flex flex-col gap-y-6 w-full font-bold sm:hidden'>
							<button className='border border-black text-gray-50 rounded-full py-3'>
								Sign In
							</button>
							<button className='bg-black text-gray-50 rounded-full py-3'>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
