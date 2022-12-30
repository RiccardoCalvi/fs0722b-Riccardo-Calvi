var forme = [];
var Forma = /** @class */ (function () {
    function Forma(istruzioni) {
        this.id = istruzioni.id;
        this.altezza = istruzioni.altezza;
        this.lunghezza = istruzioni.lunghezza;
    }
    return Forma;
}());
var quadrato = new Forma();
console.log(quadrato);
