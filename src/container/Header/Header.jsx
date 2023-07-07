import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};

const Header = () => (
	<div id='home' className='app__header app__flex'>
		<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='app__header-info'
		>
			<div className='app__header-badge'>
				<div className='badge-cmp app__flex'>
					<div style={{ marginLeft: 20 }}>
						<h1 className='head-text'>Hello, world</h1>
						<h1 className='head-text'>
							I'm <span>Courtney</span>
						</h1>
					</div>
				</div>

				<div className='tag-cmp app__flex'>
					<p className='bold-text'>Full Stack Web Developer</p>
				</div>
			</div>
		</motion.div>

		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className='app__header-img'
		>
			<img src={images.profile} alt='profile-bg' className='profile-bg' />

			<motion.img
				whileInView={{ scale: [0, 1] }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				src={images.circle}
				alt='profile-circle'
				className='overlay-circle'
			/>
		</motion.div>

		<motion.div
			variants={scaleVariants}
			whileInView={scaleVariants.whileInView}
			className='app__header-circles'
		>
			{[images.javascript, images.react, images.sass].map((circle, index) => (
				<div className='circle-cmp app__flex' key={`circle-${index}`}>
					<img src={circle} alt='profile-bg' />
				</div>
			))}
		</motion.div>
	</div>
);


export default AppWrap(Header, 'home');