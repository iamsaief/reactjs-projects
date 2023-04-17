import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section id="about" className="section" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row lg:gap-x-20 gap-y-10 lg:gap-y-0 lg:items-center h-screen">
					{/* Image */}
					<motion.div
						variants={fadeIn('right', '0.3')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
					/>
					{/* Text */}
					<motion.div
						variants={fadeIn('left', '0.5')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About me</h2>
						<h3 className="h3 mb-4">I'm a freelance Frontend Developer with 4+ years of experience</h3>
						<p className="mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum dolorem architecto dolore vero
							quidem rem inventore? Reprehenderit architecto laborum amet,
						</p>
						{/* Stats */}
						<div className="flex gap-x-6 lg:gap-x-12 mb-12">
							<div>
								<div className="text-[40px] font-tertiary text-gradient leading-[1] mb-2">
									{inView ? <CountUp start={0} end={5} duration={3} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px]">Years of experience</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient leading-[1] mb-2">
									{inView ? <CountUp start={0} end={13} duration={3} /> : null}K+
								</div>
								<div className="font-primary text-sm tracking-[2px]">Projects Completed</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient leading-[1] mb-2">
									{inView ? <CountUp start={0} end={12} duration={3} /> : null}K+
								</div>
								<div className="font-primary text-sm tracking-[2px]">Satisfied Clients</div>
							</div>
						</div>
						<div className="flex items-center gap-x-6 mb-12">
							<button className="btn btn-lg">Contact Me</button>
							<a href="#" className="text-gradient btn-link">
								My Portfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
