import Image from 'next/image'

const Advert = ({ image }) => {
	return (
		<div className='h-screen bg-black text-gray-50 px-7 font-raleway text-center flex justify-center items-center w-screen flex-col '>
			<div className=''>
				<h5 className='text-4xl font-bold'>
					Our Art is inspired by other monkey-based collections.
				</h5>
			</div>
			<div className='relative'>
				<div
					style={{
						width: '100%',
						height: '30vh',
						position: 'absolute',
						overflow: 'hidden',
						bottom: 0,
						left: 0,
						right: 0,
					}}
					className=''
				>
					<Image src={image} layout='fill' alt='image' />
				</div>
			</div>
		</div>
	)
}

export default Advert
