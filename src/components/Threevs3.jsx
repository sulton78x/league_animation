import { ChevronRight } from 'react-feather'

const Threevs3 = () => {
	return (
		<div className='h-screen bg-black w-full flex items-center justify-center flex-col px-7 text-green-100 font-raleway text-center gap-y-10'>
			<h3 className='text-5xl font-roboto font-bold'>3 vs 3</h3>
			<h4>
				Compete with and against other real users and their cards in
				various leagues and compete with for range of rewards and become
				the best of your class.
			</h4>
			<button className='flex items-center gap-3 whitespace-nowrap bg-gray-800 py-3 px-7 rounded-full font-semibold'>
				Learn More{' '}
				<span>
					<ChevronRight />
				</span>
			</button>
		</div>
	)
}

export default Threevs3
