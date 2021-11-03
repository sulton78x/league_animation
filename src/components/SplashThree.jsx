import Image from 'next/image'

const SplashThree = () => {
	return (
		<div className='h-screen bg-gray-900 text-center px-7 flex items-center justify-center flex-col gap-y-10 text-green-100 font-raleway font-semibold'>
			<h4 className='text-3xl'>
				Every Player&apos;s dream to play for a well-performing Club.
			</h4>
			<div>
				<Image
					src='/images/phone01.jpeg'
					alt=''
					width={200}
					height={400}
				/>
			</div>
		</div>
	)
}

export default SplashThree
