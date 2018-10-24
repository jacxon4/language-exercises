// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

// Solución:
function subsets(word) {
  var arr = Array.from(word).map((letter,index) => word.substr((word.length-index))).reverse();
  arr.pop();
  return arr;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// Challenge: No utilices arrays auxiliares ni bucles for/do/while.
// TIP: Una forma válida de "iterar" es utilizando algún método de Array
