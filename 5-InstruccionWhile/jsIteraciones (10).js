function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var sumaPositivo;
	var sumaNegativo;
	var promedioPositivo;
	var promedioNegativo;
	var contadorPositivo;
	var contadorNegativo;
	var contadorCeros;
	var contadorPares;
	var resto;
	var respuesta="si";

	sumaPositivo=0;
	sumaNegativo=0;
	contadorPositivo=0;
	contadorNegativo=0;
	contadorCeros=0;
	contadorPares=0;
	
	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese numero #"+ contador);
		numero=parseInt(numero);
		respuesta=prompt("ingrese no para salir");
		resto=numero%2;
	
	if (numero>0) 
	{
		sumaPositivo=sumaPositivo+numero;
		contadorPositivo++;
	}
	if (numero<0) 
	{
		sumaNegativo=sumaNegativo+numero;
		contadorNegativo++;
	}
	if(numero==0)
	{
		contadorCeros++;
	}
	if(resto==0)
	{
		contadorPares++;
	}
	}

	promedioPositivo=sumaPositivo/contadorPositivo;
	promedioNegativo=sumaNegativo/contadorNegativo;

	document.write("suma de los positivos: "+ sumaPositivo);
	document.write("suma de los negativos: "+ sumaNegativo);
	document.write("cantidad de los positivos: "+ contadorPositivo);
	document.write("cantidad de los negativos: "+ contadorNegativo);
	document.write("cantidad de numeros pares: "+ contadorPares);
	document.write("promedio de los positivos: "+ promedioPositivo);
	document.write("promedio de los negativos: "+ promedioNegativo);
	document.write("cantidad de numeros cero: "+ contadorCeros);



}//FIN DE LA FUNCIÓN