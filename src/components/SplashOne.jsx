import Image from 'next/image'

const SplashOne = () => {
	return (
		<div className='bg-black h-screen flex items-center text-center justify-center flex-col gap-y-5 text-green-100 font-raleway px-7'>
			<h2 className='text-4xl font-bold'>
				synergies, substitutions, and making tactical decisions.
			</h2>
			<div>
				<Image
					src='/images/phone02.jpg'
					alt=''
					width={200}
					height={400}
				/>
			</div>
		</div>
	)
}

export default SplashOne
