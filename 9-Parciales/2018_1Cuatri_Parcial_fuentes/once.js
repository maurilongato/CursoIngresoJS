function mostrar()
{
    var nombre;
    var cantidadPersonas=0;
    var cantidadDias=0;
    var formaPago;
    var huespedMasPersonas;
    var maximoPersonas;
    var mayorFormadepago;
    var promedioReserva;
    var cantidadReservas=0;
    var respuesta;
    
    respuesta = prompt("Si desea ingresar datos escriba si");
    
    do{
        
        
        
        nombre = prompt("Ingrese su nombre");   
        while(nombre=="" || nombre ==null){
            nombre = prompt("Reingrese su nombre");
        }
        
        cantidadPersonas = prompt("Ingrese la cantidad de personas");
        cantidadPersonas = parseInt(cantidadPersonas);
        
        while(isNaN(cantidadPersonas)){
            cantidadPersonas = prompt("Lo que ingresaste no es un numero. Volve a intentarlo");
            cantidadPersonas = parseInt(cantidadPersonas);
        }
        
        cantidadDias = prompt("Ingrese la cantidad de dias");
        cantidadDias = parseInt(cantidadDias);
        while(isNaN(cantidadDias)){
            cantidadDias = prompt("Lo que ingresaste no es un numero. Volve a intentarlo");
            cantidadDias = parseInt(cantidadDias);
        }
        
        formaPago = prompt("Defina forma de pago");
        while(formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "QR"){
            formaPago = prompt("Ingrese una forma de pago valida");
        }
        
        
        
        
        
        
        
        
        
    }while(respuesta=="si"){
        prompt("Desea continuar ingresando datos?");
    }
        
        
        
        
        




}
