var url = "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/m3/w1/d4/api/Abbigliamento.json";
var catalogo = document.getElementById("catalogo");
var Articolo = /** @class */ (function () {
    function Articolo(prodotto) {
        this.id = prodotto.id;
        this.codprod = prodotto.codprod;
        this.collezione = prodotto.collezione;
        this.capo = prodotto.capo.charAt(0).toUpperCase() + prodotto.capo.slice(1).toLowerCase();
        this.modello = prodotto.modello;
        this.quantita = prodotto.quantita;
        this.colore = prodotto.colore;
        this.prezzoivaesclusa = prodotto.prezzoivaesclusa;
        this.prezzoivainclusa = prodotto.prezzoivainclusa;
        this.disponibile = prodotto.disponibile;
        this.saldo = prodotto.saldo;
        this.prezzofinale = this.getAcquistoCapo();
    }
    Articolo.prototype.getSaldoCapo = function () {
        return parseFloat((this.prezzoivainclusa / 100 * this.saldo).toFixed(2));
    };
    Articolo.prototype.getAcquistoCapo = function () {
        return parseFloat((this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2));
    };
    return Articolo;
}());
var articoli = [];
fetch(url, { method: 'GET', redirect: 'follow' })
    .then(function (response) { return response.json(); })
    .then(function (result) {
    result.forEach(function (oggetto) {
        articoli.push(new Articolo(oggetto));
    });
    articoli.forEach(function (articolo) {
        creaSchedaProdotto(articolo);
    });
})["catch"](function (error) { return console.log("Errore: ", error); });
function saveProduct(id) {
    window.localStorage.setItem("prodotto", id);
    window.localStorage.setItem("articoli", JSON.stringify(articoli));
}
function creaSchedaProdotto(prodotto) {
    catalogo.innerHTML += "                    <div class=\"col mb-5\">\n    <div class=\"card h-100\">\n        <!-- Sale badge-->\n        <div class=\"badge bg-dark text-white position-absolute\" style=\"top: 0.5rem; right: 0.5rem\">In Saldo</div>\n        <!-- Product image-->\n        <img class=\"card-img-top\" src=\"https://dummyimage.com/450x300/dee2e6/6c757d.jpg\" alt=\"...\" />\n        <!-- Product details-->\n        <div class=\"card-body p-4\">\n            <div class=\"text-center\">\n                <!-- Product name-->\n                <h5 class=\"fw-bolder\">".concat(prodotto.capo, "</h5>\n                <!-- Product reviews-->\n                <div class=\"d-flex justify-content-center small text-warning mb-2\">\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                </div>\n                <!-- Product price-->\n                <span class=\"text-muted text-decoration-line-through\">\u20AC").concat(prodotto.prezzoivainclusa, "</span>\n                \u20AC").concat(prodotto.prezzofinale, "\n            </div>\n        </div>\n        <!-- Product actions-->\n        <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\n            <div class=\"text-center\"><a class=\"btn btn-outline-dark mt-auto\" href=\"prodotto.html\" onclick='saveProduct(").concat(prodotto.id, ")'>Vai Al Prodotto</a></div>\n        </div>\n    </div>\n</div>");
}
