import axios from '../../utils/axios';

export const getProduct = async (id) => {
	const response = await axios.get(`/products/${id}`);

	return response.data;
};
