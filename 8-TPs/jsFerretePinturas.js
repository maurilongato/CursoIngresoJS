/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var resultado;

    temperatura = parseInt(document.getElementById("Temperatura").value);
    resultado = parseInt(resultado);
    
    resultado = temperatura - 32;
    alert(resultado + " F " +" son " + temperatura + " Centigrados ");  
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var resultado;

    temperatura = parseInt(document.getElementById("Temperataura").value);
    resultado = parseInt(resultado);

    resultado = temperatura * (5/9);
    alert(resultado + " Centigrados ");
}
