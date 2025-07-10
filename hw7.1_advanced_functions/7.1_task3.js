function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Обидва аргументи повинні бути числами');
	}
	if (denominator === 0) {
		throw new Error('Ділення на нуль заборонено');
	}
	return numerator / denominator;
}

// Коректні числа:
try {
	const result1 = divide(10, 2);
	console.log(`10 / 2 = ${result1}`);
} catch (error) {
	console.error(`Помилка: ${error.message}`);
} finally {
	console.log('Робота завершена');
}

// Error: Denominator = 0:
try {
	const result2 = divide(5, 0);
	console.log(`5 / 0 = ${result2}`);
} catch (error) {
	console.error(`Помилка: ${error.message}`);
} finally {
	console.log('Робота завершена');
}

// Error: некоректний тип аргументу:
try {
	const result3 = divide('a', 3);
	console.log(`'a' / 3 = ${result3}`);
} catch (error) {
	console.error(`Помилка: ${error.message}`);
} finally {
	console.log('Робота завершена');
}
