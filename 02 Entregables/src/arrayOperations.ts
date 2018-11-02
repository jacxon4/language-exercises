/*
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Utiliza destructuring.
*/

const head = <T>([head]: Array<T>) => head; // Implementation here.
console.log('head: ',head([1,2,3]));
console.log('head: ',head([{a:1,b:1},{a:2},{b:3}]));

/*Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Utiliza rest operator.*/

const tail = <T>([,...tail]: Array<T>) => tail; // Implementation here.
console.log('tail: ',tail([1,2,3]));
console.log('tail: ',tail([{a:1,b:1},{a:2},{b:3}]));

/*Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.*/

const init = <T>(array: Array<T>) => array.slice(0,-1); // Implementation here.
console.log('init: ',init([1,2,3]));
console.log('init: ',init([{a:1,b:1},{a:2},{b:3}]));

/*Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el úl􀦞mo elemento.*/

const last = <T>(array: Array<T>) => array.pop(); // Implementation here.
console.log('last: ',last([1,2,3]));
console.log('last: ',last([{a:1,b:1},{a:2},{b:3}]));
