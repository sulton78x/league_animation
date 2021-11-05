const AdCard = ({ bgColor, date }) => {
	return (
		<div
			className={
				bgColor
					? `bg-${bgColor} border border-gray-700 rounded-3xl p-5 text-gray-900 my-2`
					: `bg-black text-gray-300 border border-gray-700 rounded-3xl p-5 my-2`
			}
		>
			<h3 className='mb-5 font-semibold text-lg'>
				We&apos;re bringing power to publishers.
			</h3>
			<p className='border-t border-gray-700 pt-3'>{date}</p>
		</div>
	)
}

export default AdCard
