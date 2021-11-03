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
		<div className='w-80 border border-gray-50 rounded-3xl px-2 py-3 flex items-center justify-center flex-col'>
			<div className='flex justify-between items-center w-full'>
				<p>{cardNumber}</p>
				<div className='flex items-center gap-x-3'>
					<CardLogo />
					<CardLogo />
				</div>
			</div>
			<div className='relative rounded-lg my-3 w-72 text-center h-80 bg-green-100 overflow-hidden object-center object-contain'>
				<Image
					src={cardImage}
					layout='fill'
					width={80}
					height={100}
					objectFit='cover'
					alt='image'
				/>
			</div>
			<div className='flex justify-evenly items-center w-full my-3'>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{shooting}</span>
					<span className='text-gray-700 font-medium'>Shooting</span>
				</p>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{finish}</span>
					<span className='text-gray-700 font-medium'>Finish</span>
				</p>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{playMaking}</span>
					<span className='text-gray-700 font-medium'>
						Playmaking
					</span>
				</p>
				<p className='flex flex-col'>
					<span className='font-bold text-xl'>{defense}</span>
					<span className='text-gray-700 font-medium'>Defense</span>
				</p>
			</div>
			<h4 className='border-t w-full border-gray-50 pt-2'>{cardName}</h4>
		</div>
	)
}

export default ActionCard
