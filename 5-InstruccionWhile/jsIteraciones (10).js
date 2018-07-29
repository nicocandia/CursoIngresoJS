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
	var respuesta="si";
	var diferencia;

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
	
	if (numero>0) 
	{
		sumaPositivo=sumaPositivo+numero;
		contadorPositivo++;
	}
	else
		if (numero<0)
		{ 
			sumaNegativo=sumaNegativo+numero;
			contadorNegativo++;
	}
	else
	{
		contadorCeros++;
	}
	
	if((numero%2)==0)
	{
		contadorPares++;
	}
	}

	diferencia=sumaPositivo - sumaNegativo*(-1);

	document.write("suma de los positivos: "+ sumaPositivo+"<br>");
	document.write("suma de los negativos: "+ sumaNegativo+"<br>");
	document.write("cantidad de los positivos: "+ contadorPositivo+"<br>");
	document.write("cantidad de los negativos: "+ contadorNegativo+"<br>");
	document.write("cantidad de numeros pares: "+ contadorPares+"<br>");
	document.write("cantidad de numeros cero: "+ contadorCeros+"<br>");
    document.write("diferencia positivos y negativos"+ diferencia+"<br>");

    if (contadorPositivo!=0) 
    {
    	promedioPositivo=sumaPositivo/contadorPositivo;
    	document.write("promedio de los numeros positivos: "+ promedioPositivo+"<br>");
    }
    else
    {
    	document.write("promedios de los numeros positivos: no se puede calcular"+"<br>");
	}

	if(contadorNegativo!=0)
	{
		promedioNegativo=sumaNegativo/contadorNegativo;
    	document.write("promedio de los numeros negativos: "+ promedioNegativo+"<br>");
	}
	else
	{
		document.write("promedio de los numeros negativos: no se puede calcular"+"<br>");
	}

}//FIN DE LA FUNCIÓN