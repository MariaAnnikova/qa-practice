//Function Declaration:

function getArea(width, height) {
	return width * height;
}
console.log(getArea(10, 5));

//Function Expression:

const getArea2 = function (width, height) {
	return width * height;
};
console.log(getArea(23, 5));

//Arrow Function:

const getArea3 = (width, height) => width * height;
console.log(getArea(100, 5));
