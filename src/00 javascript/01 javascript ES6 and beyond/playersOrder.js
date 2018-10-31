// --- EJERCICIO ------------------------------------------------------------------------

// En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador
// actual ha consumido su turno, pasa al final de la cola y le toca al siguiente.
// Dada una lista inicial de jugadores, implementa una función que devuelva la nueva lista
// de jugadores, en el orden correcto, después de X turnos.
// TIP: Aunque se puede resolver con el operador %, intenta idear una solución usando
// spread/rest & destructuring.

const getPlayersOrder = (players, turns) => {
  for (let i = 0; i < turns; i++) {
    [first, ...rest] = players;
    players = [...rest,first];
  }
  return players;

};

// Un ejemplo:
let newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 0);
console.log(newOrderIn2Turns); // ["Ana", "Juan", "Pablo", "Lucia"]
newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 1);
console.log(newOrderIn2Turns); // ["Juan", "Pablo", "Lucia", "Ana"]
newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // [ "Pablo", "Lucia", "Ana", "Juan"]
newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 3);
console.log(newOrderIn2Turns); // ["Lucia", "Ana", "Juan","Pablo"]
newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 4);
console.log(newOrderIn2Turns); // ["Ana", "Juan", "Pablo", "Lucia"]
