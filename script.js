// --- RELOJ CUENTA REGRESIVA ---
const fechaEvento = new Date("Jan 30, 2027 16:00:00").getTime();

setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;
    
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    document.getElementById("dias").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutes : minutes;
    document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;
}, 1000);

// --- FUNCIÓN MÁGICA DE INGRESO CON MÚSICA ---
function comenzarInvitacion() {
    const bienvenida = document.getElementById("bienvenida");
    const musica = document.getElementById("bg-music");
    const btnMusica = document.getElementById("music-btn");

    bienvenida.style.opacity = "0";
    setTimeout(() => {
        bienvenida.style.display = "none";
    }, 800);

    musica.play().catch(error => console.log("Audio desbloqueado"));
    btnMusica.innerHTML = "⏸️";
}

// --- CONTROL MANUAL DEL BOTÓN DE MÚSICA ---
function toggleMusic() {
    const musica = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");
    
    if (musica.paused) {
        musica.play();
        btn.innerHTML = "⏸️";
    } else {
        musica.pause();
        btn.innerHTML = "🎵";
    }
}
