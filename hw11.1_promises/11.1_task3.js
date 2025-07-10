async function fetchTodoAsync() {
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		if (!resp.ok) {
			throw new Error(`Помилка HTTP ${resp.status}`);
		}
		return await resp.json();
	} catch (err) {
		console.error('Помилка при отриманні todo:', err);
		throw err;
	}
}

async function fetchUserAsync() {
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
		if (!resp.ok) {
			throw new Error(`Помилка HTTP ${resp.status}`);
		}
		return await resp.json();
	} catch (err) {
		console.error('Помилка при отриманні user:', err);
		throw err;
	}
}

(async () => {
	try {
		const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
		console.log('Promise.all:');
		console.log('Todo:', todo);
		console.log('User:', user);

		const firstFinished = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
		console.log('Promise.race:');
		console.log(firstFinished);
	} catch (err) {
		console.error('Помилка при виконанні Promise.all або Promise.race:', err);
	}
})();
