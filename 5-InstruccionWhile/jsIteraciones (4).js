function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);
	
	while(!(numero>-1 && numero<10))
	{
		numero=prompt("ingrese un numero entre 0 y 9");
	}
document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN