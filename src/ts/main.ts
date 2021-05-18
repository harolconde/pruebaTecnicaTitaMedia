import { Portafolio } from "./class/portafolio.js";

let portafolio = new Portafolio();
let productId: HTMLCollectionOf<Element>  = document.getElementsByClassName("item-menu");
let active: HTMLCollectionOf<Element> = document.getElementsByClassName("active");
let desplegar: boolean = false;
const btnGridMulti: HTMLElement = document.getElementById("btn-grid-multi");
const btnGridMono: HTMLElement = document.getElementById("btn-grid-mono");
const gridProducts: HTMLElement = document.getElementById("portafolio");
const btnHamburger: HTMLElement = document.getElementById("menu-hamburger-menu");
const menuMovil: HTMLElement = document.getElementById("menu-movil");

// Llamada al portafolio por tipo: Web, Brandig, App etc...
let getProductsByTipe = function () {
    let id: string;
    portafolio.getProducts("all");
    for (let i:number = 0; i < productId.length; i++) {
        productId[i].addEventListener("click", () => {
            id = productId[i].id;
            changeActiveSeccion(id);
            portafolio.getProducts(id);
        })
    }
};

// Seleccion menú activo
let changeActiveSeccion = function(activeElementId: string){
    const itemMenu = document.getElementById(activeElementId);
    while(active.length > 0){
        active[0].classList.remove("active");
    }
    itemMenu.classList.add("active");
}

// Comportamiento imagenes grid
let resizeGrid = function(grid: string){
    if(grid == "1"){
        gridProducts.classList.remove("gridMulti");
        gridProducts.classList.add("gridMono");
        btnGridMulti.classList.remove("grid-active");
        btnGridMono.classList.add("grid-active");
    } else {
        gridProducts.classList.remove("gridMono");
        gridProducts.classList.add("gridMulti");
        btnGridMono.classList.remove("grid-active");
        btnGridMulti.classList.add("grid-active");
    }
}

// Mostrar menu movil
let showMenuMovil = function(){
    desplegar =! desplegar;
    if(desplegar == true){
        // menuMovil.style.display = "block";
        menuMovil.classList.add("menu-movil-active");
        console.log(desplegar);
    } else {
        menuMovil.classList.remove("menu-movil-active");
        console.log(desplegar);
    }
    

}

window.addEventListener("load", getProductsByTipe);
btnGridMono.addEventListener("click", () => resizeGrid("1"));
btnGridMulti.addEventListener("click", () => resizeGrid("3"));
btnHamburger.addEventListener("click", showMenuMovil);


