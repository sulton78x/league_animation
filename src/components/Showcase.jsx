import ActionCard from '../utilities/ActionCard'
import Link from 'next/link'

const Showcase = () => {
	return (
		<div className='h-screen bg-black text-center text-gray-50 font-raleway flex flex-col items-center justify-center px-7 gap-y-4'>
			<h2 className='text-3xl font-semibold'>
				a set of Unique 10,000 collectable Cards with the unique look.
				<span>
					<Link href='/'>
						<a className='text-purple-600'> meet the Kongs.</a>
					</Link>
				</span>
			</h2>

			{/* Cards */}
			<div>
				<ActionCard />
			</div>
		</div>
	)
}

export default Showcase
