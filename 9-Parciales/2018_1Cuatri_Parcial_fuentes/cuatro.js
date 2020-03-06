function mostrar()
{

    var numeroUno;
    var numeroDos;
    var suma;
    var resta;
    var suma2

    numeroUno = prompt("Ingrese el primer numero");
    numeroDos = prompt("Ingrese el segundo numero");
    
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if(numeroUno == numeroDos){
        suma = numeroUno + numeroDos;
        alert(suma);
    }   
        else if(numeroUno > numeroDos){
            resta  = numeroUno - numeroDos;
            alert(resta);
        }
        else if(numeroUno < numeroDos){
            suma2 = numeroUno + numeroDos;
            alert(suma2)
        }
        else if(suma2 >10){
            suma2 = numeroUno + numeroDos;
            alert("La suma es " + suma2 + "y es mayor el 10");

        }
        




}
