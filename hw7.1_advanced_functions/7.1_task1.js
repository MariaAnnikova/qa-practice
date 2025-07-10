const handleNum = (num, evenCallback, oddCallback) => {
	if (num % 2 === 0) {
		evenCallback(num);
	} else {
		oddCallback(num);
	}
};

const handleEven = (number) => console.log(`Number ${number} is even`);
const handleOdd = (number) => console.log(`Number ${number} is odd`);

handleNum(44, handleEven, handleOdd);
handleNum(71, handleEven, handleOdd);
