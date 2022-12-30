let forme = []

class Forma {
    id: number;
    altezza: number;
    lunghezza: number;
    profondita: number;

    constructor(istruzioni) {
        this.id = istruzioni.id;
        this.altezza = istruzioni.altezza;
        this.lunghezza = istruzioni.lunghezza;
    }

}

const quadrato = new Forma()

console.log(quadrato)
