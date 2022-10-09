const boton_mobil = document.getElementById("boton-menu-mobil");
const boton_cerrar_barra = document.getElementById("cerrar-barra-lateral");
const barra_lateral = document.getElementById("barra-lateral");


boton_mobil.addEventListener("click", () => {
    barra_lateral.style.left = "0";
});

boton_cerrar_barra.addEventListener("click" , () => {
    barra_lateral.style.left = "-130px";
});