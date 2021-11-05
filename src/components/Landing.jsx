import Button from '../utilities/Button'
import { ChevronDown } from 'react-feather'
import CollectibleCard from '../utilities/CollectibleCard'

const Landing = () => {
	return (
		<div className='h-screen bg-black flex flex-col items-center justify-between px-7 text-center py-10 text-gray-50 font-raleway overflow-hidden'>
			<div className='h-full flex flex-col items-center justify-center gap-y-10'>
				<h2 className='text-4xl sm:text-6xl font-semibold sm:w-3/4'>
					Pass, rebound and be a team player.
				</h2>
				<h3>
					Experience basketball like never before through playing
					collectable digital cards.
				</h3>
				<Button />
				{/* Chevron Down */}
				<ChevronDown />
			</div>
			{/* Animating Cards */}
			<div className=''>
				<div className='flex items-center gap-5 overflow-scroll scrollbar-hide'>
					<CollectibleCard image='/images/img03.png' />
					<CollectibleCard image='/images/img02.png' />
					<CollectibleCard image='/images/img01.png' />
					<CollectibleCard image='/images/img04.png' />
					<CollectibleCard image='/images/img05.png' />
					<CollectibleCard image='/images/img06.png' />
				</div>
			</div>
		</div>
	)
}

export default Landing
