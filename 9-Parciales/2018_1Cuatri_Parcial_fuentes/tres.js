function mostrar()
{

    var precio;
    var descuento;
    var precioFinal;

    precio = parseInt(precio);
    descuento = parseInt(precio);
    precioFinal = parseInt(document.getElementById("elPrecioFinal").value);

    precio = prompt("Ingrese el precio del producto:");
    descuento = prompt("Ingrese el descuento:");

    precioFinal = precio / descuento;

        alert("El precio final es de: " + precioFinal);


    


}
