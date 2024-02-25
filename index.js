precio = 400000
valorTotal = 0
cantidad = 0

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio
valorSpan = document.querySelector(".valor-total")
valorSpan.innerHTML = valorTotal
cantidadSpan = document.querySelector(".cantidad")
cantidadSpan.innerHTML = cantidad

function agregaUno() {
    cantidad = cantidad + 1
    cantidadSpan.innerHTML = cantidad
    valorSpan.innerHTML = (cantidad * precio)
}

function quitaUno() {
    if (cantidad > 0) {
        cantidad = cantidad - 1
        cantidadSpan.innerHTML = cantidad
        valorSpan.innerHTML = (cantidad * precio)
    }
}