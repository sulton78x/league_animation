import ActionCard from '../utilities/ActionCard'

const Showcase = () => {
	return (
		<div className='h-screen bg-black text-center text-gray-50 font-raleway flex flex-col items-center justify-center px-7 py-10'>
			<h2 className='text-3xl font-semibold'>
				a set of Unique 10,000 collectable Cards with the unique look.
			</h2>
			<h3 className=''>meet the Kongs.</h3>
			{/* Cards */}
			<div>
				<ActionCard />
			</div>
		</div>
	)
}

export default Showcase
