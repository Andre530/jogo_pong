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
const movable = document.getElementById('movable');
let posX = window.innerWidth / 2; // Posição inicial
let posY = window.innerHeight / 2; // Posição inicial
let speedX = 2; // Velocidade horizontal
let speedY = 2; // Velocidade vertical

function move() {
    posX += speedX;
    posY += speedY;

    // Limitação da tela
    const elementWidth = movable.offsetWidth;
    const elementHeight = movable.offsetHeight;

    // Verifica colisão com as bordas
    if (posX + elementWidth > window.innerWidth || posX < 0) {
        speedX = -speedX; // Inverte a direção horizontal
    }
    if (posY + elementHeight > window.innerHeight || posY < 0) {
        speedY = -speedY; // Inverte a direção vertical
    }

    // Atualiza a posição do elemento
    movable.style.left = `${posX}px`;
    movable.style.top = `${posY}px`;

    requestAnimationFrame(move); // Chama a função novamente
}


