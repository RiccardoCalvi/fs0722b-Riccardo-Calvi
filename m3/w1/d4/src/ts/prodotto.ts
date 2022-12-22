const articolo = window.localStorage.getItem("prodotto")
const prodotti = JSON.parse(window.localStorage.getItem("articoli"))

const schedaProdotto = document.getElementById("prodotto")
const prodottiSimili = document.getElementById("prodotti_simili")


try {
    prodotti.forEach(prodotto => {
        if (prodotto.id == articolo) {
            creaScheda(prodotto)
        } else {
            creaProdottiSimili(prodotto)
        }
    });

} catch (e) {
    window.location.href = "index.html"
}

function creaScheda(prodotto) {
    document.getElementById("titolo").innerHTML = prodotto.capo
    schedaProdotto.innerHTML += `<div class="container px-4 px-lg-5 my-5">
    <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
        <div class="col-md-6">
            <div class="small mb-1">SKU: ${prodotto.codprod}</div>
            <h1 class="display-5 fw-bolder">${prodotto.capo}</h1>
            <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">€${prodotto.prezzoivainclusa}</span>
            <span>€${prodotto.prezzofinale}</span>
            </div>
            <div class="small mb-1">Collezione: ${prodotto.collezione}</div>
            <div class="small mb-1">Colore: ${prodotto.colore}</div>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
            <form>
                <div class="d-flex">
                    <input class="form-control text-center me-3" id="inputQuantity" type="number" min="1" max="${prodotto.quantita}" style="max-width: 3rem" />
                    <button class="btn btn-outline-dark flex-shrink-0" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Aggiungi al carrello
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>`
}

function creaProdottiSimili(prodotto) {
    prodottiSimili.innerHTML += `<div class="col mb-5">
    <div class="card h-100">
        <!-- Sale badge-->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">In Saldo</div>
        <!-- Product image-->
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${prodotto.capo}</h5>
                <!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </div>
                <!-- Product price-->
                <span class="text-muted text-decoration-line-through">€${prodotto.prezzoivainclusa}</span>
                €${prodotto.prezzofinale}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#titolo" onclick='window.localStorage.setItem("prodotto", ${prodotto.id}); window.location.href = "prodotto.html"'>Vai al Prodotto</a></div>
        </div>
    </div>
</div>`
}
