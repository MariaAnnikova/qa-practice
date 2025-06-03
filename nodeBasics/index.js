import chalk from 'chalk';

console.log(chalk.blue('Синій текст') + chalk.reset(' — далі звичайний'));
console.log(chalk.red('Червоний'));
console.log(chalk.green('Зелений'));
console.log(chalk.yellow.bold('Жовтий жирний'));
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));