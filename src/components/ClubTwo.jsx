import AdCard from '../utilities/AdCard'

const ClubTwo = () => {
	return (
		<div className='bg-black h-screen px-7 flex flex-col items-center justify-evenly'>
			<h2 className='text-gray-200 text-center font-semibold text-xl'>
				Clubs are a collective of Kongs that offers users the possibilty
				to compete in leagues.
			</h2>
			{/* Ad Cards */}
			<div className=''>
				<AdCard bgColor='red-500' date='12 September' />
				<AdCard date='12 September' />
				<AdCard bgColor='purple-500' date='12 September' />
				<AdCard bgColor='blue-500' date='12 September' />
			</div>
		</div>
	)
}

export default ClubTwo
