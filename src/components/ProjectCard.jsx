import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { fadeIn } from '../utils/motion';

function ProjectCard({ index, name, description, tags, thumbnail, source_code_link, live_link }) {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt className="bg-[#151030] rounded-2xl w-full">
				{/* Image Card- group */}
				<div className="group relative overflow-hidden border-2 border-white/30 rounded-xl max-h-[250px]-">
					<div className="group-hover:bg-black/70 inset-0 absolute z-10 transition-all duration-300"></div>
					<img
						className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500 aspect-[4/3]"
						src={thumbnail}
						alt="work img 1"
					/>

					{/* Buttons */}
					<div className="absolute left-0 bottom-0 w-full p-3 z-30 transition-all duration-500 delay-200 text-3xl text-white flex gap-x-2 items-center justify-center">
						<a
							href={`${source_code_link}`}
							target="_blank"
							className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-100 rounded-lg group/btn bg-gradient-to-br from-purple-600 to-blue-500 group-hover/btn:from-purple-600 group-hover/btn:to-blue-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300/80 translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-200"
						>
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover/btn:bg-opacity-0">
								Source Code
							</span>
						</a>
						<a
							href={`${live_link}`}
							target="_blank"
							className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300/80 font-medium rounded-lg text-sm px-5 py-3 text-center translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-300"
						>
							See Live
						</a>
					</div>
				</div>
			</Tilt>
			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-[#aaa6c3] text-[14px] line-clamp-4">{description}</p>
			</div>
			<div className="mt-4 flex flex-wrap gap-x-2">
				{tags.map((tag) => (
					<p key={tag.name} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</motion.div>
	);
}

export default ProjectCard;
