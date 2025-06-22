const newArray = [10, 20, 30, 40, 50]
const newArraySum = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log ("Сума елементів масиву:", newArraySum)