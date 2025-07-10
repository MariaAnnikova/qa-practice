const car1 = {
	brand: 'Volkswagen',
	model: 'Beetle',
	year: 2016,
};

const car2 = {
	brand: 'Toyota',
	model: 'Corolla',
	owner: 2006,
};

const car3 = {
	...car1,
	...car2,
};
console.log(car3);
