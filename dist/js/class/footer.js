'use strict';
class Footer extends HTMLElement {
    constructor(year) {
        super();
        year = new Date();
        this.year = year.getFullYear();
    }
    connectedCallback() {
        this.innerHTML = /*Html*/ `
            <div class="container-footer">
                <p class="description-footer">&copy; ${this.year} - <span class="remark">Sneak</span> All rights reserved</p>
                <div class="containers-logos-footer">
                    <li class="img-logo-footer">
                        <img src="./public/icons/logo-facebook.svg" class="img-logo logo-facebook" alt="Facebook">
                    </li>
                    <li class="img-logo-footer">
                        <img src="./public/icons/logo-twitter.svg" class="img-logo logo-twitter" alt="Twitter">
                    </li>
                    <li class="img-logo-footer">
                        <img src="./public/icons/logo-instagram.svg" class="img-logo logo-instagram" alt="Instagram">
                    </li>
                    <li class="img-logo-footer">
                        <img src="./public/icons/logo-google-plus-g.svg" class="img-logo logo-google+" alt="Google +">
                    </li>
                    <li class="img-logo-footer">
                        <img src="./public/icons/logo-youtube.svg" class="img-logo logo-youtube" alt="YouTube">
                    </li>
                </div>
            </div>
        `;
    }
}
window.customElements.define("footer-app", Footer);
