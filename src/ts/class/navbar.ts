"use strict"

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = /* Html */ `
            <nav class="nav-bar">
                <a href="#" class="logo-link"><img src="./public/icons/logo.PNG" class="logo" alt=""></a>
                <ul class="list-items-menu" id="menu-movil">
                    <li class="item-menu active">All</li>
                    <li class="item-menu">Branding</li>
                    <li class="item-menu">Web</li>
                    <li class="item-menu">Photography</li>
                    <li class="item-menu">App</li>
                    <li class="item-menu item-menu-logo"><img class="logo-buscar" src="./public/icons/search-outline.svg" alt=""></li>
                </ul>
                <div class="menu-hamburger">
                    <div class="container-logo" id="menu-hamburger-menu">
                        <img class="logo-hamburger" src="./public/icons/menu-outline.svg" alt="Logo">
                    </div>
                    <div class="container-logo">
                        <img class="logo-buscar" src="./public/icons/search-outline.svg" alt="Buscar">
                    </div>
                </div>
            </nav>
        `;
    }
}

window.customElements.define("nav-bar", Navbar);