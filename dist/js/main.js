import { Portafolio } from "./class/portafolio.js";
let portafolio = new Portafolio();
let productId = document.getElementsByClassName("item-menu");
let active = document.getElementsByClassName("active");
let desplegar = false;
const btnGridMulti = document.getElementById("btn-grid-multi");
const btnGridMono = document.getElementById("btn-grid-mono");
const gridProducts = document.getElementById("portafolio");
const btnHamburger = document.getElementById("menu-hamburger-menu");
const menuMovil = document.getElementById("menu-movil");
// Llamada al portafolio por tipo: Web, Brandig, App etc...
let getProductsByTipe = function () {
    let id;
    portafolio.getProducts("all");
    for (let i = 0; i < productId.length; i++) {
        productId[i].addEventListener("click", () => {
            id = productId[i].id;
            changeActiveSeccion(id);
            portafolio.getProducts(id);
        });
    }
};
// Seleccion menú activo
let changeActiveSeccion = function (activeElementId) {
    const itemMenu = document.getElementById(activeElementId);
    while (active.length > 0) {
        active[0].classList.remove("active");
    }
    itemMenu.classList.add("active");
};
// Comportamiento imagenes grid
let resizeGrid = function (grid) {
    if (grid == "1") {
        gridProducts.classList.remove("gridMulti");
        gridProducts.classList.add("gridMono");
        btnGridMulti.classList.remove("grid-active");
        btnGridMono.classList.add("grid-active");
    }
    else {
        gridProducts.classList.remove("gridMono");
        gridProducts.classList.add("gridMulti");
        btnGridMono.classList.remove("grid-active");
        btnGridMulti.classList.add("grid-active");
    }
};
// Mostrar menu movil
let showMenuMovil = function () {
    desplegar = !desplegar;
    if (desplegar == true) {
        // menuMovil.style.display = "block";
        menuMovil.classList.add("menu-movil-active");
        console.log(desplegar);
    }
    else {
        menuMovil.classList.remove("menu-movil-active");
        console.log(desplegar);
    }
};
window.addEventListener("load", getProductsByTipe);
btnGridMono.addEventListener("click", () => resizeGrid("1"));
btnGridMulti.addEventListener("click", () => resizeGrid("3"));
btnHamburger.addEventListener("click", showMenuMovil);
