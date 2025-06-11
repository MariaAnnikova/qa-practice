let averageGrade = 91;
let message = "Ваш середній бал: ";

if (averageGrade < 0 || averageGrade > 100) {
  message += "Невірне значення бала";
}
 else if (averageGrade < 60) {
  message += "Незадовільно";
} else if (averageGrade <= 70) {
  message += "Задовільно";
} else if (averageGrade <= 80) {
  message += "Добре";
} else if (averageGrade <= 90) {
  message += "Дуже добре";
} else if (averageGrade <= 100) {
  message += "Відмінно";
} 
console.log(message);