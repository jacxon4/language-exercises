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
    transmit: (message: string)=> void;

}

const timeOut = (unit: number) => (message: string) => setTimeout(writer(message), unit * 100);
const dashTimeOut = timeOut(3);
const letterTimeOut = timeOut(3);
const dotTimeOut = timeOut(1);
const wordTimeOut = timeOut(7);
const writer = (message: string) => console.log(message);
const splitWords = (message: string): string[] => message.split(' ');
const splitLetters = (message: string): string[] => message.split('');
const translate = (dictionary) => (message: string) => splitWords(message).map((word) => splitLetters(word).map((letter) => dictionary[letter]));


const createMorseTransmitter = (morseAlphabet: MorseSymbol<string>, timeUnit: number = 100): MorseTransmitter => ({
    transmit: (message)=> translate(morseAlphabet)(message).forEach((wordArr: string[]) => {
         wordArr.forEach((letter: string) => {
            letter.split('').forEach( (symbol: string) => {
                (symbol === "-") ? dashTimeOut("ON") : dotTimeOut("ON");
                dotTimeOut("OFF");
            });
            letterTimeOut("OFF");
        });
        wordTimeOut("OFF");
    }),
});


let transmitter: MorseTransmitter = createMorseTransmitter(morseAlphabet, 100);
console.log('transmitter', transmitter);