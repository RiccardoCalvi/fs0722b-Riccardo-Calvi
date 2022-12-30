var url = "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/natale/api/shape.json";
var requestOptions = { method: 'GET', redirect: 'follow' };
var forme = [];
var Forma = /** @class */ (function () {
    function Forma(istruzioni) {
        this.id = istruzioni.id;
        this.nome = istruzioni.nome;
        this.altezza = istruzioni.altezza;
        this.lunghezza = istruzioni.lunghezza;
    }
    Forma.prototype.calcolaArea = function () {
        return this.altezza * this.lunghezza;
    };
    return Forma;
}());
fetch(url, requestOptions)
    .then(function (response) { return response.json(); })
    .then(function (result) {
    result.forEach(function (elemento) {
        forme.push(new Forma(elemento));
    });
    console.log(forme);
    forme.forEach(function (elemento) {
        console.log(elemento.calcolaArea());
    });
});
