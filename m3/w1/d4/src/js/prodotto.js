var articolo = window.localStorage.getItem("prodotto");
var prodotti = JSON.parse(window.localStorage.getItem("articoli"));
var schedaProdotto = document.getElementById("prodotto");
var prodottiSimili = document.getElementById("prodotti_simili");
try {
    prodotti.forEach(function (prodotto) {
        if (prodotto.id == articolo) {
            creaScheda(prodotto);
        }
        else {
            creaProdottiSimili(prodotto);
        }
    });
}
catch (e) {
    window.location.href = "index.html";
}
function creaScheda(prodotto) {
    document.title = "".concat(prodotto.capo, " - Epicode Store");
    document.getElementById("titolo").innerHTML = prodotto.capo;
    schedaProdotto.innerHTML += "<div class=\"container px-4 px-lg-5 my-5\">\n    <div class=\"row gx-4 gx-lg-5 align-items-center\">\n        <div class=\"col-md-6\"><img class=\"card-img-top mb-5 mb-md-0\" src=\"https://dummyimage.com/600x700/dee2e6/6c757d.jpg\" alt=\"...\" /></div>\n        <div class=\"col-md-6\">\n            <div class=\"small mb-1\">SKU: ".concat(prodotto.codprod, "</div>\n            <h1 class=\"display-5 fw-bolder\">").concat(prodotto.capo, "</h1>\n            <div class=\"fs-5 mb-5\">\n            <span class=\"text-decoration-line-through\">\u20AC").concat(prodotto.prezzoivainclusa, "</span>\n            <span>\u20AC").concat(prodotto.prezzofinale, "</span>\n            </div>\n            <div class=\"small mb-1\">Collezione: ").concat(prodotto.collezione, "</div>\n            <div class=\"small mb-1\">Colore: ").concat(prodotto.colore, "</div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>\n            <div class=\"small mb-1\">Disponibilit\u00E0: ").concat(prodotto.quantita, "</div>\n            <form>\n                <div class=\"d-flex\">\n                    <input class=\"form-control text-center me-3\" id=\"inputQuantity\" type=\"number\" value=\"1\" min=\"1\" max=\"").concat(prodotto.quantita, "\" style=\"max-width: 3rem\" />\n                    <button class=\"btn btn-outline-dark flex-shrink-0\" type=\"submit\">\n                    <i class=\"bi-cart-fill me-1\"></i>\n                    Aggiungi al carrello\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");
}
function creaProdottiSimili(prodotto) {
    prodottiSimili.innerHTML += "<div class=\"col mb-5\">\n    <div class=\"card h-100\">\n        <!-- Sale badge-->\n        <div class=\"badge bg-dark text-white position-absolute\" style=\"top: 0.5rem; right: 0.5rem\">In Saldo</div>\n        <!-- Product image-->\n        <img class=\"card-img-top\" src=\"https://dummyimage.com/450x300/dee2e6/6c757d.jpg\" alt=\"...\" />\n        <!-- Product details-->\n        <div class=\"card-body p-4\">\n            <div class=\"text-center\">\n                <!-- Product name-->\n                <h5 class=\"fw-bolder\">".concat(prodotto.capo, "</h5>\n                <!-- Product reviews-->\n                <div class=\"d-flex justify-content-center small text-warning mb-2\">\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                    <div class=\"bi-star-fill\"></div>\n                </div>\n                <!-- Product price-->\n                <span class=\"text-muted text-decoration-line-through\">\u20AC").concat(prodotto.prezzoivainclusa, "</span>\n                \u20AC").concat(prodotto.prezzofinale, "\n            </div>\n        </div>\n        <!-- Product actions-->\n        <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\n            <div class=\"text-center\"><a class=\"btn btn-outline-dark mt-auto\" href=\"#titolo\" onclick='window.localStorage.setItem(\"prodotto\", ").concat(prodotto.id, "); window.location.href = \"prodotto.html\"'>Vai al Prodotto</a></div>\n        </div>\n    </div>\n</div>");
}
