import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'react-feather'
import Button from '../utilities/Button'
import { Google } from '@icons-pack/react-simple-icons'

const Footer = () => {
	return (
		<footer className='font-raleway relative right-0 left-0 bottom-0 bg-gray-100 w-full inset-x-0 px-5 py-10 sm:px-10 text-center sm:text-left'>
			<div className='sm:grid sm:grid-cols-2 sm:gap-x-10 sm:pt-5 sm:pb-8'>
				<div>
					{/* Logo */}
					<div>
						<Image
							src='/images/fireshipLogo.png'
							alt=''
							width={80}
							height={80}
							objectFit='cover'
						/>
					</div>
					<h3 className='font-semibold text-gray-900 text-2xl sm:px-0 px-5 my-3 sm:mt-0'>
						Learning made human, with the help of AI.
					</h3>
					<Button />
				</div>
				{/* Second Column */}
				<div className='sm:flex sm:items-start sm:justify-evenly'>
					<div>
						<h3 className='font-semibold text-gray-700 text-lg pt-4 sm:pt-0'>
							Company
						</h3>
						<ul className='font-bold text-gray-900 text-lg flex flex-col gap-3 my-3'>
							<Link href='/about-us'>
								<a>About Us</a>
							</Link>
							<Link href='/overview'>
								<a>Overview</a>
							</Link>
							<Link href='/data-protection'>
								<a>Data Protection</a>
							</Link>
							<Link href='/legal'>
								<a>Legal Notice</a>
							</Link>
						</ul>
					</div>
					<div>
						<h5 className='font-semibold text-lg text-gray-900 pt-4 sm:pt-0'>
							Social
						</h5>
						<div className='flex items-center gap-5 justify-center my-5 sm:my-3'>
							<Twitter />
							<Instagram />
							<Linkedin />
							<Google />
						</div>
					</div>
				</div>
			</div>
			<p className='border-t border-gray-500 text-center pt-2 text-sm sm:text-lg font-semibold'>
				&copy; {new Date().getFullYear()} Rumble Kong League. All Rights
				Reserved.
			</p>
		</footer>
	)
}

export default Footer
