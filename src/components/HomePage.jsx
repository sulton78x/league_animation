import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Landing from './Landing'
import Footer from './Footer'
import Rebound from './Rebound'
import Advert from './Advert'
import Actionable from './Actionable'
import Threevs3 from './Threevs3'
import SplashThree from './SplashThree'
import SplashOne from './SplashOne'
import Showcase from './Showcase'
import Club from './Club'
import ClubTwo from './ClubTwo'
import KongSlide from './KongSlide'

const HomePage = () => {
	return (
		<motion.div className=''>
			<div className='z-50'>
				<Navbar />
			</div>
			<div className='z-10 overflow-hidden'>
				<Landing />
				<Showcase />
				<Club />
				<ClubTwo />
				<KongSlide />
				<SplashOne />
				<SplashThree />
				<Threevs3 />
				{/* <Actionable /> */}
				{/* <Advert image='/images/useImg9.webp' /> */}
				<Rebound />
				<Footer />
			</div>
		</motion.div>
	)
}

export default HomePage
