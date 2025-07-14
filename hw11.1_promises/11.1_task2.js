function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Помилка при отриманні todo:', error);
			throw error;
		});
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Помилка при отриманні user:', error);
			throw error;
		});
}

Promise.all([fetchTodo(), fetchUser()])
	.then((results) => {
		const [todo, user] = results;
		console.log('Результат Promise.all:');
		console.log('Todo:', todo);
		console.log('User:', user);
	})
	.catch((error) => {
		console.error('Помилка в Promise.all:', error);
	});

Promise.race([fetchTodo(), fetchUser()])
	.then((result) => {
		console.log('Результат Promise.race:', result);
	})
	.catch((error) => {
		console.error('Помилка в Promise.race:', error);
	});
