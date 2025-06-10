let averageGrade2 = 100;
let message2 = "Ваш середній бал: ";

switch (true) {
  case (averageGrade2 < 60):
    message2 += "Незадовільно"
    break;
  case (averageGrade2 <= 70):
    message2 += "Задовільно"
    break;
  case (averageGrade2 <= 80):
    message2 += "Добре"
    break;
  case (averageGrade2 <= 90):
    message2 += "Дуже добре"
    break;
  case (averageGrade2 <= 100):
    message2 += "Відмінно"
    break;
  default:
    message2 = "Невірне значення бала";
}
console.log(message2)