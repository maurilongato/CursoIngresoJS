
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = parseInt(ancho);
    largo = parseInt(largo);
    perimetro = parseInt(perimetro);

     ancho = prompt("Ingresa el ancho del rectangulo");
     largo =  prompt("Ingresa el largo del rectangulo");

    perimetro = largo * 2 + ancho * 2;

    alert("El resultado del perimetro es: " + perimetro);

}
