// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no el libro.
// Un libro es un objeto con "title" como string y "isRead" como booleano.
// En caso de no existir el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón
// Opcional : utiliza TypeScript para añadir los tipos adecuados

interface book {
    title: string,
    isRead: boolean
}

const bookEvaluate = (titleToSearch: string) => (book: book):boolean => (book.title === titleToSearch) && (book.isRead === true);

const isBookRead = (books: book[], titleToSearch: string): boolean => books.some(bookEvaluate(titleToSearch));

// Ejemplo:
var books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false