// --- EJERCICIO ------------------------------------------------------------------------

// Descifra el siguiente secreto:
var secret = "sq esqct rts moh egf sql lgsxeogftl tl dqlztkstdgfegrtpqcqlekohzyxfrqdtfzqsl";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz";
var cipher = "qwertyuiopasdfghjklzxcvbnm";

function decrypt(secret) {
  return secret.split("").map((wordLetter) => (wordLetter!==" ")?plain[cipher.indexOf(wordLetter)]:" ").join("");
};

console.log(decrypt(secret));
