const axios = require('axios');
async function fetchPostById(id) {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		return response.data;
	} catch (error) {
		if (error.response) {
			return `Помилка: ${error.response.status} ${error.response.statusText}`;
		}
		return 'Невідома помилка';
	}
}
jest.mock('axios');

describe('fetchPostById — моки для успішного та помилкового запиту', () => {
	afterEach(() => {
		jest.clearAllMocks(); // очищаємо після кожного тесту
	});

	it('повертає дані поста при успішному запиті', async () => {
		const mockResponse = { data: { id: 1, title: 'Test Post', userId: 1 } };
		axios.get.mockResolvedValueOnce(mockResponse);

		const result = await fetchPostById(1);

		expect(result).toEqual(mockResponse.data);
		expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
	});

	it('повертає повідомлення про помилку при 404', async () => {
		const error = {
			response: {
				status: 404,
				statusText: 'Not Found',
			},
		};
		axios.get.mockRejectedValueOnce(error);

		const result = await fetchPostById(123456);

		expect(result).toBe('Помилка: 404 Not Found');
		expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/123456');
	});

	it('повертає повідомлення про невідому помилку, якщо response відсутній', async () => {
		axios.get.mockRejectedValueOnce(new Error('Network Error'));

		const result = await fetchPostById(5);

		expect(result).toBe('Невідома помилка');
	});
});