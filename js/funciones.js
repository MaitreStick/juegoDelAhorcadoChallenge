var btnIniciar = document.querySelector("#iniciarJuego");

btnIniciar.addEventListener("click", function(event){
    event.preventDefault();
    location.href = "juego.html";
});