const url: string = "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/m3/w1/d4/api/Abbigliamento.json"
const catalogo = document.getElementById("catalogo")
let articoli = []

if (!window.localStorage.getItem("carrello")) {
    window.localStorage.setItem("carrello", "0")
} else {
    document.getElementById("count_carrello").innerHTML = window.localStorage.getItem("carrello")
}

class Articolo {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    prezzofinale: number;

    getSaldoCapo(): number {
        return parseFloat((this.prezzoivainclusa / 100 * this.saldo).toFixed(2))
    }
    getAcquistoCapo(): number {
        return parseFloat((this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2));
    }

    constructor(prodotto) {
        this.id = prodotto.id;
        this.codprod = prodotto.codprod
        this.collezione = prodotto.collezione.charAt(0).toUpperCase() + prodotto.collezione.slice(1).toLowerCase()
        this.capo = prodotto.capo.charAt(0).toUpperCase() + prodotto.capo.slice(1).toLowerCase();
        this.modello = prodotto.modello
        this.quantita = prodotto.quantita
        this.colore = prodotto.colore.charAt(0).toUpperCase() + prodotto.colore.slice(1).toLowerCase()
        this.prezzoivaesclusa = prodotto.prezzoivaesclusa
        this.prezzoivainclusa = prodotto.prezzoivainclusa
        this.disponibile = prodotto.disponibile
        this.saldo = prodotto.saldo
        this.prezzofinale = this.getAcquistoCapo()
    }


}

fetch(url, { method: 'GET', redirect: 'follow' })
    .then(response => response.json())
    .then(result => {

        result.forEach(oggetto => {
            articoli.push(new Articolo(oggetto))
        });

        articoli.forEach(articolo => {
            creaSchedaProdotto(articolo)
        });

    })
    .catch(error => console.log("Errore: ", error));

function saveProduct(id) {
    window.localStorage.setItem("prodotto", id)
    window.localStorage.setItem("articoli", JSON.stringify(articoli))
}

function creaSchedaProdotto(prodotto): void {
    catalogo.innerHTML += `                    <div class="col mb-5">
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
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="prodotto.html" onclick='saveProduct(${prodotto.id})'>Vai Al Prodotto</a></div>
        </div>
    </div>
</div>`
}