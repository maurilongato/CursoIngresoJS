function mostrar()
{
    var Diadelasemana;
    var mensaje;

    Diadelasemana = prompt("Ingrese un día de la semana");

    switch(Diadelasemana){
        case "sabado":
        case "domingo":
            mensaje = "Buen fin de semana";
            alert(mensaje);
            break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "A trabajar";
            alert(mensaje);
            break;
        default :
        alert("Ingrese un día de la semana válido");
        break;

    }
}
