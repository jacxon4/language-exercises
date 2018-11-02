// --- EJERCICIO ------------------------------------------------------------------------

// A. ¿Cual crees que será el resultado de la consola y porqué? TIP: escribe el código equivalente.

function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}

/** 
 * >> undefined, undefined, good job!
  function f() {
  var a;
  function g() {
    return a;
  }
  console.log(a);
  console.log(g());

  a = "good job!";
  
  console.log(a);
}
 */


// B. ¿Y ahora?

var a = 1;

(function() {
  console.log(a); 
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b); 
console.log(c);

/**
 * >> undefined, 1, 4, error
 * 
var a = 1;
b = 4;
(function() {
  var a;
  console.log(a); 
  a = 2;
  var c = 3;
})();

console.log(a);
console.log(b); 
console.log(c);
 */
// C. ¿Y con esta ligera variación?

f();
var a = 1;

function f() {
  console.log(a); 
  b = 4;
  var c = 3;
};

console.log(a);
console.log(b); 
console.log(c);


/**
 * >> undefined, 1, 4, error

var a;
b = 4;
function f() {
  console.log(a); 
  var c = 3;
};

f();
a = 1;
console.log(a);
console.log(b); 
console.log(c);
 */
