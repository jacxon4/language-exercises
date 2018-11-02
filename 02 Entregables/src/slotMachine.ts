// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos
// insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá
// incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres
// booleanos aleatorios. En caso de que los tres booleanos sean true debe un mensaje por consola:
// "Congratulations!!!. You won <número de monedas> coins!!" y reiniciar las monedas almacenadas,
// ya que las hemos conseguido y han salido de la máquina
// En caso contrario deberá mostrar otro mensaje: "Good luck next time!!"


interface SlotMachine {
    runRandom: () => boolean[];
    play: () => void;
}

class SlothMachine implements SlotMachine {
    private coins: number;

    constructor() {
        this.coins = 0;
    }

    runRandom() {
        return [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5];
    }

    play() {
        this.coins++;
        let result = this.runRandom();
        if (result.every((elem) => elem === true)) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"