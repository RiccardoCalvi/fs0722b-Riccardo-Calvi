let p = document.getElementById("tempo")
let timer = sessionStorage.getItem("tempo")

setInterval(() => {
    if (!tempo) {
        sessionStorage.setItem("tempo", 0)
    } else{
        timer++
        sessionStorage.setItem("tempo", timer)
    }
    p.innerHTML = timer
},1000)

function timerReset() {
    timer = 0
    sessionStorage.setItem("tempo", timer)
}