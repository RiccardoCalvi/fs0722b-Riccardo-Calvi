let p = document.getElementById("tempo")
let timer = sessionStorage.getItem("tempo")

function avviaTimer() {
    tempo = setInterval(() => {
        timer++
        sessionStorage.setItem("tempo", timer)
        p.innerHTML = timer
    },1000)
}

function resetTimer() {
    clearInterval(tempo)
    avviaTimer()
    p.innerHTML = 0
    timer = 0
    sessionStorage.setItem("tempo", timer)
}

avviaTimer()