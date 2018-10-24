// --- EJERCICIO ------------------------------------------------------------------------

// A. Intenta razonar cual será el resultado de la consola al ejecutar este código:

var a = 1;
let b = 2;

{
  try {
    console.log(a, b);
  } catch (error) {
  }
  let b = 3;
  console.log(a, b);
}

console.log(a, b);

() => {
  console.log(a);
  var a = 5;
  let b = 6;
  console.log(a, b);
};

console.log(a, b);

/*
* el bloque try dentro de un objeto no hace nada ya que es como una función sin ejecutar
* 1,3
* 1,2
* No se ejecuta lo que se ha definido como función ya que nadie lo ejecuta
* 1,2
* */


// B. Sin tocar ninguno de los 'console.log' anteriores, modifica ligeramente el
// código para que muestre la siguiente secuencia:

console.log('Segundo ejercicio');
a = 1;
b = 2;

{
  let b = 3;
  console.log(a, b);
  console.log(a, b);
}


console.log(a, b);

(() => {
  var a = 5;
  console.log(a);
  let b = 6;
  console.log(a, b);
})();

console.log(a, b);

// 1 3
// 1 3
// 1 2
// 5
// 5 6
// 1 2
