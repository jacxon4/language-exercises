// --- EJERCICIO ------------------------------------------------------------------------

// [!] NOTA: Realiza primero el ejercicio "values".

// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

// Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo
// el sistema de calificación español:
// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4

function reduceArray(prevValue, newValue) {
  return prevValue+newValue;
}

function stringifyQualification(qualification) {
  return (qualification===10)?'Matricula de Honor':
  (qualification>9)?'Sobresaliente':
  (qualification>7)?'Notable':
  (qualification>6)?'Bien':
  (qualification>5)?'Suficiente':
  (qualification>4)?'Insufuciente':'Muy deficiente';
}

function printAverage(classResults) {
  const arrValues = Object.values(classResults);
  return stringifyQualification(arrValues.reduce(reduceArray)/arrValues.length);
}
console.log(printAverage(eso2o));
// TIP: Rompe en tantas funciones auxiliares como necesites.
// TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
// En Array.prototype también cuentas con otro método que podría serte de utilidad
// para transformar un array a un único valor.
