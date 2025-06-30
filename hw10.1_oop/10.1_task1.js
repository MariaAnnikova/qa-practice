// Варіант 1. Без функції:

/* import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Гаррі Поттер', 'Дж. К. Ролінг', 1997);
const book2 = new Book('Гобіт, або Туди і Звідти', 'Джон Р.Р. Толкін', 1937);
const ebook1 = new EBook('Цифрова фортеця', 'Ден Браун', 1998, 'PDF');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

book1.title = 'Гаррі Поттер і філософський камінь';
console.log(book1.title);

ebook1.fileFormat = 'EPUB';
console.log (ebook1.fileFormat)

const oldest = Book.getOldestBook([book1, book2, ebook1]);
console.log('Найдавніша книга:');
oldest.printInfo();

const newEbook = EBook.fromBook(book2, 'MOBI');
console.log (newEbook)
newEbook.printInfo(); */

//Варіант 2. З використанням функції:

import Book from './Book.js';
import EBook from './EBook.js';

function main() {

  const library = [
    new Book('Гаррі Поттер і філософський камінь', 'Дж. К. Ролінг', 1997),
    new Book('Гобіт, або Туди і Звідти', 'Джон Р. Р. Толкін', 1937),
    new EBook('Цифрова фортеця', 'Ден Браун', 1998, 'EPUB'),
  ];

  console.log('Усі книги:');
  library.forEach(book => book.printInfo());

  const oldest = Book.getOldestBook(library);
  console.log('Найдавніша книга:');
  oldest.printInfo();

  const newEbook = EBook.fromBook(oldest, 'MOBI');
  console.log('Створено eBook на базі Book:');
  newEbook.printInfo();
}

main();