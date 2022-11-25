window.addEventListener("scroll", function(event){
    let top = this.scrollY
    let header = document.getElementById("menu")
    let button = document.getElementById("menu_button")
    if (top >= 268){
        header.style.backgroundColor = "white";
        button.style.backgroundColor = "#1a8917";
    } else {
        header.style.backgroundColor = "#ffc017";
        button.style.backgroundColor = "#191919";
    }
});