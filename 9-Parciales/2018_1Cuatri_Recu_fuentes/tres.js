function mostrar()
{
    
    var precio = parseInt(prompt("Ingrese el precio del producto"));
    var descuento = parseInt(prompt("Ingrese el procentaje del descuento"));
    var precioFinal = precio - (precio * descuento)/100;

    document.getElementById("elPrecioFinal").value = precioFinal;
   
    

    
}
