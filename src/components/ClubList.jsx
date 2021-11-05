import Image from 'next/image'

const ClubList = ({ listImage, listText }) => {
	return (
		<div className='border-b border-gray-50 flex items-center gap-x-5 pb-2 my-2'>
			<div className='relative border border-gray-200 rounded-full h-16 w-16 overflow-hidden object-contain object-center'>
				<Image src={listImage} alt='' layout='fill' objectFit='cover' />
			</div>
			<h3 className='text-base font-semibold'>{listText}</h3>
		</div>
	)
}

export default ClubList
