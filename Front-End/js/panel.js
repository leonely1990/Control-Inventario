const boton_mobil = document.getElementById("boton-menu-mobil");
const boton_cerrar_barra = document.getElementById("cerrar-barra-lateral");
const barra_lateral = document.getElementById("barra-lateral");
const tipos = document.getElementsByClassName("tipo");

boton_mobil.addEventListener("click", () => {
    barra_lateral.style.left = "0";
});


boton_cerrar_barra.addEventListener("click" , () => {
    barra_lateral.style.left = "-130px";
});


for(let tipo of tipos){
    tipo.childNodes[1].addEventListener("click", () => {
        
        if(tipo.childNodes[3].classList == "lista"){
            tipo.childNodes[1].childNodes[3].src = "Front-End/iconos/angle-up.svg";
            tipo.childNodes[3].classList = "lista active";
        }
        else if(tipo.childNodes[3].classList == "lista active"){
            tipo.childNodes[3].classList = "lista";
            tipo.childNodes[1].childNodes[3].src = "Front-End/iconos/angle-down.svg";
        }
    });
}

const prueba = document.getElementById("prueba");
const cerrar_prueba = document.getElementsByClassName("cerrar-popups")[0];

cerrar_prueba.addEventListener("click", () => {
    document.getElementsByClassName("popups-editar")[0].style.display = "none";
});

prueba.addEventListener("click" , () => {

    document.getElementsByClassName("popups-editar")[0].style.display = "block";

});

function validar(formulario) {
    return false;
}