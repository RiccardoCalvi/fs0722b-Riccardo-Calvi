var Articolo = /** @class */ (function () {
    function Articolo(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Articolo.prototype.getSaldoCapo = function () {
        return this.saldo;
    };
    Articolo.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.saldo;
    };
    return Articolo;
}());
