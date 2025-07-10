let student = {};

student.firstName = 'Марія';
student.lastName = 'Аннікова';
student.age = 32;
student.courses = ['Математика', 'Історія', 'Програмування'];

console.log(JSON.stringify(student, null, 2));
