import { ChevronRight } from 'react-feather'
import ClubList from './ClubList'

const Club = () => {
	return (
		<div className='h-screen bg-black flex flex-col justify-center items-center text-gray-50 px-7 text-center gap-y-3 font-raleway'>
			<h2 className='font-semibold text-xl'>
				Clubs are a collective of Kongs that offers users the
				possibility to compete in leagues.
			</h2>
			<button className='flex items-center gap-x-2 text-yellow-600 bg-yellow-900 py-3 px-6 rounded-full outline-none'>
				<span className='font-bold text-lg'>Learn More</span>
				<span>
					<ChevronRight />
				</span>
			</button>
			{/* Lists */}
			<div className='w-full flex flex-col justify-center gap-y-2'>
				<ClubList
					listImage='/images/img01.png'
					listText='Toronto Raptors'
				/>
				<ClubList
					listImage='/images/img02.png'
					listText='Memphis Grizzlies'
				/>
				<ClubList
					listImage='/images/img03.png'
					listText='Boston Celtics'
				/>
				<ClubList
					listImage='/images/img04.png'
					listText='Brooklyn Nets'
				/>
				<ClubList
					listImage='/images/img05.png'
					listText='New York Knicks'
				/>
			</div>
		</div>
	)
}

export default Club
