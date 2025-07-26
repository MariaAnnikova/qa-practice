/*const axios = require('axios');
async function fetchWithHeadersAndParams() {
	const config = {
		headers: {
			'X-Custom-Header': 'TestHeaderValue',
		},
		params: {
			userId: 1,
		},
	};
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config);
	return response.data;
}
test('повертає пости з userId=1', async () => {
	const data = await fetchWithHeadersAndParams();
	expect(Array.isArray(data)).toBe(true);
	expect(data.length).toBeGreaterThan(0);
	data.forEach((post) => {
		expect(post.userId).toBe(1);
	});
});*/

const axios = require('axios');

async function fetchWithHeadersAndParams() {
	const config = {
		headers: {
			'X-Custom-Header': 'TestHeaderValue',
		},
		params: {
			userId: 1,
		},
	};
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config);

	console.log({
		status: response.status,
		headers: response.headers,
		dataSample: response.data.slice(0, 2),
	});

	return response.data;
}

test('повертає пости з userId=1', async () => {
	const data = await fetchWithHeadersAndParams();
	expect(Array.isArray(data)).toBe(true);
	expect(data.length).toBeGreaterThan(0);
	data.forEach((post) => {
		expect(post.userId).toBe(1);
	});
});