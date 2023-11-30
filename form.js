let articulos = JSON.parse(localStorage.getItem("productos-en-carrito"));
console.log(articulos);
const contenedorCompra = document.querySelector("#articulos");
const botonLimpiar = document.querySelector("#enviar");
const totalFinal = document.querySelector("#totalFinal");
enviar();

function enviar(){

        const articulosInput = document.querySelector("#articuloI");

        articulos.forEach(producto => {
            // Crear una cadena con los detalles del artículo actual
            const detalleArticulo = `${producto.titulo} - Cantidad: ${producto.cantidad} - Subtotal: ${producto.precio * producto.cantidad}\n`;
    
            // Agregar la información del artículo al campo de artículos
            articulosInput.value += detalleArticulo;
        });


    contenedorCompra.innerHTML = "";
    articulos.forEach(producto =>{


    const div = document.createElement("div");
    div.classList.add("articulo");
    div.innerHTML = `
        <div class="carrito-producto-titulo">
            <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>${producto.precio * producto.cantidad}</p>
        </div>
    `;
    const total = articulos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    totalFinal.innerText = `Total: Q${total}`;
    contenedorCompra.append(div);
})}

botonLimpiar.addEventListener("click", limpiar);

function limpiar(){
    articulos.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(articulos));
}
