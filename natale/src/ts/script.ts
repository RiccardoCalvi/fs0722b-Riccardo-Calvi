const url = "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/natale/api/shape.json"
const requestOptions: object = { method: 'GET', redirect: 'follow' };
let forme = []

class Forma {
    id: number;
    altezza: number;
    lunghezza: number;
    profondita: number;
    nome: string;

    constructor(istruzioni) {
        this.id = istruzioni.id;
        this.nome = istruzioni.nome
        this.altezza = istruzioni.altezza;
        this.lunghezza = istruzioni.lunghezza;
    }

    calcolaArea(){
        return this.altezza * this.lunghezza
    }

}



  
fetch(url, requestOptions)
.then(response => response.json())
.then(result => {
    
    result.forEach(elemento => {
        forme.push(new Forma(elemento))
    });
    console.log(forme)
    forme.forEach(elemento => {
        console.log(elemento.calcolaArea())
    });
})
