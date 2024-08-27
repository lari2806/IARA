const text = "Olá, sejam bem vindos!";
let index = 0;
const speed = 100; // Velocidade da transição em milissegundos

function typeWriter() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
