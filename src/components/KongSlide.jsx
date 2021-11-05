import { ChevronLeft, ChevronRight } from 'react-feather'
import ActionCard from '../utilities/ActionCard'

const KongSlide = () => {
	return (
		<div className='bg-blue-500 flex flex-col items-center justify-center h-screen sm:flex sm:items-center sm:justify-evenly font-raleway px-7'>
			<div className='space-y-7'>
				<h3 className='text-purple-900 text-xl font-semibold'>
					Actionable Insights
				</h3>
				<h5 className='text-4xl font-semibold'>
					The Kongs will always be at the heart of the Rumble Kong
					League
				</h5>
				<div className='flex items-center gap-x-5'>
					<ChevronLeft className='border border-purple-900 font-bold text-purple-900 rounded-full h-10 w-10' />
					<p className='font-bold text-xl'>1 of 4</p>
					<ChevronRight className='border border-purple-900 font-bold text-purple-900 rounded-full h-10 w-10' />
				</div>
			</div>
			{/* card slides */}
			<div className='hidden'>
				<ActionCard />
				<ActionCard />
			</div>
		</div>
	)
}

export default KongSlide
