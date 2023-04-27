import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';

function Projects() {
	return (
		<motion.div
			className="sm:px-16 px-6 max-w-7xl mx-auto relative z-0"
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
		>
			<section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
				<motion.div variants={textVariant()}>
					<p
						className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]`}
					>
						My works
					</p>
					<h2
						className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
					>
						Projects.
					</h2>
				</motion.div>
				<div className="w-full flex">
					<motion.p
						variants={fadeIn('', '', 0.1, 1)}
						className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
					>
						I'm a skilled Frontend Developer with experience in JavaScript, and expertise in popular web technologies
						like JavaScript, React, Next, Tailwind, Bootstrap, WordPress, PHP. I'm a quick learner and collaborate
						closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world
						problems. Let's work together to bring your ideas to life!
					</motion.p>
				</div>

				<div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-sm sm:max-w-none mx-auto md:mx-0">
					{projects.map((project, index) => (
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					))}
				</div>
				<div className="mt-10 block text-center">
					<a
						href="https://github.com/iamsaief/reactjs-projects"
						target="_blank"
						className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300/80 ]font-medium rounded-lg text-sm px-5 py-3 text-center transition duration-300 delay-300"
					>
						View more
					</a>
				</div>
			</section>
		</motion.div>
	);
}

export default Projects;
