function mostrar()
{
    
    var planeta;
    var mensaje;

    planeta = prompt("Ingrese un planeta del sistema solar");
    
    switch(planeta){
        case ("tierra"):
        mensaje = "Acá vivimos";
        break;
        case ("mercurio"):
        case ("venus"):
        mensaje = "Acá hace más calor";
        break;
        case ("marte"):
        case ("jupiter"):
        case ("saturno"):
        case ("urano"):
        case ("neptuno"):
        mensaje = "Acá hace mas frio";
        break;
        
        
    }
         alert(mensaje);
    
}
