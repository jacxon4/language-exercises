/*Implementa una función clone que, a partir de un objeto de entrada source devuelva
un nuevo objeto con las propiedades de source :*/

const clone = (source) => ({...source});

const clone2 = (source: object) => {
    var target = {};
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
    return target;
};


/*Implementa una función merge que, dados dos objetos de entrada source y target ,
devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
de propiedades con el mismo nombre, source sobreescribe a target .

    Por ejemplo, dados estos 2 objetos:
    const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
    const b = {name: "Luisa", age: 31, married: true};
    el resultado de mezclar a sobre b sería:
    merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", c

TIP: Puedes usar la función “clone” del apartado A.*/

const merge = (source: object, target: object): object => ({...target, ...source});

const merge2 = (source: object, target: object): object => Object.assign(target, source);

const merge3 = (source: object, target: object): object => {
    var newObj = clone2(target);
    for (var attr in source) {
        if (source.hasOwnProperty(attr)) {
            newObj[attr] = source[attr];
        }
    }
    return newObj;
};


// Por ejemplo, dados estos 2 objetos:
var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
var b = {name: "Luisa", age: 31, married: true};
// El resultado de mezclar a sobre b sería:
console.log('merge', merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log('merge2', merge2(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log('merge3', merge3(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
