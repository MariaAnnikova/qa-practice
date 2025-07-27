const axios = require('axios');

async function DataWithError() {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
		return res.data;
	} catch (error) {
		console.log('Помилка Axios:', error);
		return `Помилка: ${error.response?.status} ${error.response?.statusText}`;
	}
}

test('повинен повернути повідомлення про 404', async () => {
	const result = await DataWithError();
	expect(result).toMatch(/Помилка: 404 Not Found/);
});

module.exports = DataWithError;