export class Portafolio {
    constructor() {
        this.productos = [];
    }
    // Llamada a los datos dentro del json.
    getProducts(param) {
        let headers = { 'Content-Type': 'text/json', 'Access-Control-Allow-Origin': '*' };
        let myHeaders = new Headers(headers);
        let url = "http://127.0.0.1:3000/api";
        let myInit = {
            method: "GET",
            header: myHeaders,
            cache: "default",
        };
        fetch(url, myInit)
            .then(res => res.json())
            .then(res => {
            this.productos = [];
            if (param !== "all") {
                res.data.portafolio.filter((x) => {
                    if (x.type == param) {
                        this.productos.push(x);
                    }
                });
            }
            else {
                res.data.portafolio.map((response) => {
                    this.productos.push(response);
                });
            }
            this.showProductsOnGrid(this.productos);
        });
    }
    // Mapeo del portafolio en el grid
    showProductsOnGrid(listProducts) {
        const container = document.getElementById("portafolio");
        const containerProductos = document.getElementsByClassName("products-article");
        if (containerProductos.length > 0) {
            while (containerProductos.length > 0) {
                containerProductos[0].parentNode.removeChild(containerProductos[0]);
            }
        }
        for (let producto of listProducts) {
            let addProducts = `
                <article class="products products-article" id="products">
                    <figure>
                        <img class="img-producto" src="${producto.link}">
                    </figure>
                </article>
            `;
            container.innerHTML += addProducts;
        }
    }
}
