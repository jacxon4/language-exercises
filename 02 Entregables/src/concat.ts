/*Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
    devuelva la concatenación de ambos. Utiliza rest / spread operators.*/

const concat = (a: any[], b: any[]):any[] => [...a, ...b]; // Implementation here.
console.log('concat: ', concat([1,2],[3,4])); // Implementation here.
console.log('concat: ',concat([1,2],[{a:1},{b:1}])); // Implementation here.


/*
Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
entrada (más de 2).*/

const concatMulti = (...args) => args.reduce((acc,elem) =>[...acc,...elem]);  // Implementation here.
console.log('concatMulti: ',concatMulti([1,2,3,4],[5,6],[7],[8,9,10,11,12]));
console.log('concatMulti: ',concatMulti([1,2],[{a:1},{b:1}],[{c:1,d:1, e:{ee: 1}}]));
