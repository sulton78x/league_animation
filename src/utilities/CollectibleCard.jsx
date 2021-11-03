import { motion } from 'framer-motion'
import Image from 'next/image'

const CollectibleCard = ({ image }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			transition={{ type: 'spring', stiffness: 300 }}
			className=''
		>
			<div className='relative w-16 h-20 object-contain border border-white rounded-lg overflow-hidden object-center'>
				<Image
					src={image}
					alt='nft'
					width={80}
					height={80}
					layout='fill'
				/>
			</div>
		</motion.div>
	)
}

export default CollectibleCard
