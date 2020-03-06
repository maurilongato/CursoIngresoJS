function mostrar()
{
    var horapedida;
    var mensaje;

    horapedida = parseInt(document.getElementById("laHora").value);
    alert(horapedida);
    
    switch(horapedida){
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            mensaje = "Es de mañana";
            alert(mensaje);
            break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
            mensaje = "Es de tarde";
            alert(mensaje);
            break;
        default :
        alert("Es de noche");
        if(horapedida <= "24" && horapedida > "19"){
            alert("A dormir");
        }
            break;


    }


}
