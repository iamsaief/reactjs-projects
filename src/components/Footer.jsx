import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';

function Footer() {
	return (
		<footer className="py-5 mt-5 text-center">
			<div className="container mx-auto">
				<div className="flex justify-center text-[20px] text-slate-700 gap-x-6">
					<a href="https://github.com/iamsaief" target="_blank" className="hover:text-slate-600">
						<FaGithub />
					</a>
					<a href="https://www.linkedin.com/in/saiefalemon/" target="_blank" className="hover:text-slate-600">
						<FaLinkedin />
					</a>
					<a href="https://codepen.io/iamsaief/pens/public" target="_blank" className="hover:text-slate-600">
						<FaCodepen />
					</a>
					<a href="https://codesandbox.io/u/iamsaief" target="_blank" className="hover:text-slate-600">
						<FiCodesandbox />
					</a>
				</div>
				<div className="mt-5 text-white/25 text-sm font-light">
					&copy; {new Date().getFullYear()} | made with{' '}
					<span className="text-[.65em] leading-none bg-clip-text text-transparent bg-sky-900 opacity-[.9]">💜</span> by{' '}
					<a
						className="hover:underline hover:text-white/40 underline-offset-2"
						href="https://www.linkedin.com/in/saiefalemon/"
						target="_blank"
					>
						Saief Al Emon
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
