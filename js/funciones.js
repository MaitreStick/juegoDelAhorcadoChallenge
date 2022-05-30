var btnIniciar = document.querySelector("#iniciarJuego");
var btnAgregarPalabra = document.querySelector("#agregarPalabra");
var btnCancelar = document.querySelector("#cancelar");

btnIniciar.addEventListener("click", function(event){
    event.preventDefault();
    location.href = "palabra.html";
});

btnAgregarPalabra.addEventListener("click", function(event){
    event.preventDefault();
    location.href = "palabra.html";
});

btnCancelar.addEventListener("click", function(event){
    event.preventDefault();
    location.href = "index.html";
});