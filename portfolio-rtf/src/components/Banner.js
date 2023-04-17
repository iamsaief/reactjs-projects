import React from 'react';
import avatarImg from '../assets/avatar.svg';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
	return (
		<section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-12">
					{/* Text */}
					<div className="flex-1 text-center lg:text-left font-secondary">
						<motion.h1
							variants={fadeIn('up', '0.3')}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[50px] lg:text-[75px] font-bold leading-[.8] uppercase"
						>
							Saief <span>Al Emon</span>
						</motion.h1>
						<motion.div
							variants={fadeIn('up', '0.4')}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="text-white  mr-2">I am a</span>
							<TypeAnimation
								sequence={['Frontend Engineer', 2000, 'React Developer', 2000, 'JavaScript Enthusiast', 2000]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn('up', '0.5')}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab aspernatur ut illum ullam eaque natus velit
							optio ipsum voluptates
						</motion.p>
						<motion.div
							variants={fadeIn('up', '0.6')}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex items-center gap-x-6 max-w-max mx-auto lg:mx-0 mb-12"
						>
							<button className="btn btn-lg">Contact Me</button>
							<a href="#" className="text-gradient btn-link">
								My Portfolio
							</a>
						</motion.div>
						{/* Socials */}
						<motion.div
							variants={fadeIn('up', '0.7')}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
						>
							<a href="#" target="_blank">
								<FaGithub />
							</a>
							<a href="#" target="_blank">
								<FaLinkedin />
							</a>
							<a href="#" target="_blank">
								<FaCodepen />
							</a>
						</motion.div>
					</div>
					{/* Image */}
					<motion.div
						variants={fadeIn('down', '0.5')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] mx-auto"
					>
						<img src={avatarImg} alt="Avatar img" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
