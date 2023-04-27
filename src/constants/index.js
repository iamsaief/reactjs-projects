import { ecartThumb, minitubeThumb } from '../assets';

const projects = [
	{
		name: 'Ecart RTK',
		description: 'An e-commerce project that allows users to add/remove items to their cart and checkout',
		tags: [
			{
				name: 'React',
				color: 'pink-text-gradient',
			},
			{
				name: 'Redux-Toolkit',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwindcss',
				color: 'orange-text-gradient',
			},
			{
				name: 'Framer-Motion',
				color: 'green-text-gradient',
			},
		],
		thumbnail: ecartThumb,
		source_code_link: 'https://github.com/iamsaief/reactjs-projects/tree/main/ecart-rtk',
		live_link: '/ecart-rtk/dist/index.html',
	},
	{
		name: 'Minitube',
		description:
			'A youtube clone where user can Search/List videos; Play a video by selecting from the list and/or from related videos',
		tags: [
			{
				name: 'React',
				color: 'pink-text-gradient',
			},
			{
				name: 'Redux',
				color: 'green-text-gradient',
			},
			{
				name: 'Redux-Toolkit',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwindcss',
				color: 'orange-text-gradient',
			},
		],
		thumbnail: minitubeThumb,
		source_code_link: 'https://github.com/iamsaief/reactjs-projects/tree/main/minitube-rtk',
		live_link: '/minitube-rtk/dist/index.html',
	},
];

export { projects };
