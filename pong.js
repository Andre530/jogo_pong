document.addEventListener("DOMContentLoaded", () => {
    let raqueteEsq = document.getElementById("raqueteEsq");
    let posicao = 37;

    document.addEventListener("keydown", () => {
        if (event.key == "ArrowUp") {
            posicao = posicao - 2;
            raqueteEsq.style.top = posicao + "vh";
        }
        if (event.key == "ArrowDown") {
            posicao = posicao + 2;
            raqueteEsq.style.top = posicao + "vh";
        }
    })

})
let raqueteDirt = document.getElementById("raqueteDirt");
let posicao = 37;

document.addEventListener("keydown", () => {
    if (event.key == "w") {
        posicao = posicao - 2;
        raqueteDirt.style.top = posicao + "vh";
    }
    if (event.key == "s") {
        posicao = posicao + 2;
        raqueteDirt.style.top = posicao + "vh";
    }
})



