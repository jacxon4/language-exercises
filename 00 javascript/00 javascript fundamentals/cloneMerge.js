// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
  var target = {};
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
}

// B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
// El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
// del objeto "target". TIP: Usa la función "clone" del apartado A.

function merge(source, target) {
  // Implementation here.
  //return Object.assign(target,source);
  var newObj = clone(target);
  for (var attr in source){
      newObj[attr] = source[attr];
  }
  return newObj;
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
