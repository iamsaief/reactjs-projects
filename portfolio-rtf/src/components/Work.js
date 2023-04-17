import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import workImg1 from '../assets/portfolio-img1.png';
import workImg2 from '../assets/portfolio-img2.png';
import workImg3 from '../assets/portfolio-img3.png';

const Work = () => {
	return (
		<section id="work" className="section">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-x-10">
					<motion.div
						variants={fadeIn('right', '0.3')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
					>
						{/* Text */}
						<div>
							<h2 className="h2 text-accent leading-tight">
								My Latest <br /> Work
							</h2>
							<p className="max-w-sm mb-16">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet id modi veritatis velit sunt. Ab
								magnam culpa dolorum dicta delectus.
							</p>
							<button className="btn btn-sm">View all projects</button>
						</div>
						{/* Image Card- group */}
						<div className="group relative overflow-hidden border-2 border-white/30 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							<img className="group-hover:scale-125 transition-all duration-500" src={workImg1} alt="work img 1" />
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient"> UI/UX Design</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">project Title</span>
							</div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('left', '0.2')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10"
					>
						{/* Image Card- group */}
						<div className="group relative overflow-hidden border-2 border-white/30 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							<img className="group-hover:scale-125 transition-all duration-500" src={workImg2} alt="work img 1" />
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient"> UI/UX Design</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">project Title</span>
							</div>
						</div>
						{/* Image Card- group */}
						<div className="group relative overflow-hidden border-2 border-white/30 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							<img className="group-hover:scale-125 transition-all duration-500" src={workImg3} alt="work img 1" />
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient"> UI/UX Design</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">project Title</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
