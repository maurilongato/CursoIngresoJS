function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

		while(numero < 0 || numero  > 9){
			
			numero = parseInt(prompt("Error. Ingrese un número valido"));
	
		}
			alert("Numero Aceptado");
	
	
}//FIN DE LA FUNCIÓN
