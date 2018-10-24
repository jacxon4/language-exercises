// --- EJERCICIO ------------------------------------------------------------------------

// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula
// junto a estos datos métodos que implementen la funcionalidad de:
// - Hacer reset: poner a undefined o null ambos resultados.
// - Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!

function getRandomDiceThrow() {
    return Math.floor(Math.random() * 6) + 1;
}

function Dice() {
    var first; 
    var second;
}

Dice.prototype.throw = function () {
    this.first = getRandomDiceThrow();
    this.second = getRandomDiceThrow();
    this.print();
}

Dice.prototype.reset = function () {
    this.first = undefined;
    this.second = undefined;
}

Dice.prototype.print = function() {
    if (this.first === undefined || this.second === undefined) {
        console.log('Primero lanza los dados lerdo');
    } else if ((this.first === 6) && (this.second === 6)) {
        console.log('¬€¬€~#~€¬¬€~#~€¬¬€~#~€¬¬€~#~€¬  Lo has petado ¬€¬€~#~€¬¬€~#~€¬¬€~#~€¬¬€~#~€¬');
    } else {
        console.log(this.first + this.second);
    }

}

