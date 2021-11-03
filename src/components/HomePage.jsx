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

const HomePage = () => {
	return (
		<motion.div className=''>
			<Navbar />
			<Landing />
			<Showcase />
			<SplashOne />
			<SplashThree />
			<Threevs3 />
			<Actionable />
			<Advert image='/images/useImg9.webp' />
			<Rebound />
			<Footer />
		</motion.div>
	)
}

export default HomePage
