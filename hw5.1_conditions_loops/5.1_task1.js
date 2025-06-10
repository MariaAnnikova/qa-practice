let averageGrade = 91;
let message = "Ваш середній бал: ";

if (averageGrade < 60) {
  message += "Незадовільно";
} else if (averageGrade <= 70) {
  message += "Задовільно";
} else if (averageGrade <= 80) {
  message += "Добре";
} else if (averageGrade <= 90) {
  message += "Дуже добре";
} else if (averageGrade <= 100) {
  message += "Відмінно";
} else {
  message = "Невірне значення бала";
}

console.log(message);