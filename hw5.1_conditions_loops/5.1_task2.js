let averageGrade2 = 101;
let message2 = "Ваш середній бал: ";

switch (true) {
  case (averageGrade2 < 0 || averageGrade2 > 100): 
  message2 += "Невірне значення бала";
  break;
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
}
console.log(message2)