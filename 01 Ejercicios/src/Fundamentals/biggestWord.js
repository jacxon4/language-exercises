// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
// En caso de haber varias con longitud máxima que devuelva siempre la primera.

function biggestWord(phrase) {
  return phrase.split(" ").sort(function(elem1, elem2){
    return elem2.length - elem1.length;
  })[0];
  
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "JavaScript"
console.log(biggestWord("JavaScript mola, pero si te pasan los ejercicios mal no tanto")); // "JavaScript"
