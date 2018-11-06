const morseAlphabet = {

    "0": "-----",

    "1": ".----",

    "2": "..---",

    "3": "...--",

    "4": "....-",

    "5": ".....",

    "6": "-....",

    "7": "--...",

    "8": "---..",

    "9": "----.",

    "a": ".-",

    "b": "-...",

    "c": "-.-.",

    "d": "-..",

    "e": ".",

    "f": "..-.",

    "g": "--.",

    "h": "....",

    "i": "..",

    "j": ".---",

    "k": "-.-",

    "l": ".-..",

    "m": "--",

    "n": "-.",

    "o": "---",

    "p": ".--.",

    "q": "--.-",

    "r": ".-.",

    "s": "...",

    "t": "-",

    "u": "..-",

    "v": "...-",

    "w": ".--",

    "x": "-..-",

    "y": "-.--",

    "z": "--..",

    ".": ".-.-.-",

    ",": "--..--",

    "?": "..--..",

    "!": "-.-.--",

    "-": "-....-",

    "/": "-..-.",

    "@": ".--.-.",

    "(": "-.--.",

    ")": "-.--.-"
};

interface MorseSymbol<T> {
    [key: string]: T;
}

interface MorseTransmitter {
    morseAlphabet: MorseSymbol<string>;
    writer: (message: string) => void;
    timeOut: (unit: number) => void;
    timeUnit?: number;
    translate: (message: string)=> string[][];
    //transmit:(message: string) => void;

}

const timeOut = (unit: number) => (message: string) => setTimeout(writer(message), unit * 50);
const dashTimeOut = timeOut(3);
const letterTimeOut = timeOut(3);
const wordTimeOut = timeOut(7);
const writer = (message) => console.log(message);
const splitWords = (message: string): string[] => message.split(' ');
const splitLetters = (message: string): string[] => message.split('');
const map = (dictionary) => (message: string) => splitWords(message).map((word) => splitLetters(word).map((letter) => dictionary[letter]));

const createMorseTransmitter = (morseAlphabet: MorseSymbol<string>, timeUnit: number = 10) => ({
    morseAlphabet,
    timeUnit,
    writer,
    timeOut,
    translate: (message)=> map(morseAlphabet)(message),
    //transmit: (callback) => callback(),


});


let transmitter: MorseTransmitter = createMorseTransmitter(morseAlphabet, 100);
console.log(transmitter);