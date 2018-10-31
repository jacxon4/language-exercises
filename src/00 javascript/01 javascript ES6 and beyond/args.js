// --- EJERCICIO ------------------------------------------------------------------------

// Dada la siguiente función:
function f( a, {b} = {}, c = 100 ) {
  console.log( arguments.length );
  console.log(a, a === arguments[0] );
  console.log(b, b === arguments[1] );
  console.log(c, c === arguments[2] );
};

// A. ¿Qué muestra por consola esta llamada?
f("JS rocks!", {"b": "b"});
/*
2               --> Hay 2 argumentos de entrada cuando se llaman
JS rocks!, true --> Coincide el parametro con lo que estamos recogiendo
b, false        --> Por destructuring coge string(b) y no son lo mismo ya que el argumento contiene todo el objeto
100, false      --> Se inicializa la variable, pero no existe el argumento y por tanto no son iguales
* */

// B. ¿Y con estos argumentos?
f({"b": "b"});
/*
1               --> Solo se envia un argumento
{"b": "b"}, true--> Coincide el parametro con lo que estamos recogiendo
undefined, true --> Al no proporcionarse el parametro en la llamada (undefined) no hará un fallback a {}, el objeto undefined no contiene la propiedad b y no se ha asignado por defecto
100, false      --> Se inicializa la variable, pero no existe el argumento y por tanto no son iguales

* */

// C. ¿Y ahora?
f("JS sucks!", null, 13);
/*
Error de consola ya que no hace ni el destructuring de un null de entrada
* */
