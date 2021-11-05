import CardLogo from './CardLogo'
import Image from 'next/image'

const ActionCard = ({
	cardNumber = 87,
	shooting = 42,
	finish = 33,
	playMaking = 66,
	defense = 54,
	cardImage = '/images/04.jpeg',
	cardName = 'Phoenix Suns',
}) => {
	return (
		<div className='w-64 border border-gray-50 rounded-3xl px-2 py-2 flex items-center justify-center flex-col'>
			<div className='flex justify-between items-center w-full'>
				<p className='mx-2'>{cardNumber}</p>
				<div className='flex items-center gap-x-3 mx-2'>
					<CardLogo />
					<CardLogo />
				</div>
			</div>
			<div className='relative rounded-lg my-2 w-60 text-center h-72 bg-green-100 overflow-hidden object-center object-contain'>
				<Image
					src={cardImage}
					layout='fill'
					objectFit='cover'
					alt='image'
				/>
			</div>
			<div className='flex justify-evenly items-center w-full my-1'>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{shooting}</span>
					<span className='text-gray-700 text-xs font-medium'>
						Shooting
					</span>
				</p>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{finish}</span>
					<span className='text-gray-700 text-xs font-medium'>
						Finish
					</span>
				</p>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{playMaking}</span>
					<span className='text-gray-700 text-xs font-medium'>
						Playmaking
					</span>
				</p>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{defense}</span>
					<span className='text-gray-700 text-xs font-medium'>
						Defense
					</span>
				</p>
			</div>
			<h4 className='border-t w-full border-gray-50 pt-2 font-semibold'>
				{cardName}
			</h4>
		</div>
	)
}

export default ActionCard
