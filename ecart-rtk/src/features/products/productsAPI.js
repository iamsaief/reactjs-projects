import axios from '../../utils/axios';

export const getProducts = async () => {
	const response = await axios.get(`/products`);

	return response.data;
};
