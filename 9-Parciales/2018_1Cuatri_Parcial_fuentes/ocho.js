function mostrar()
{
	var letra;
	var numero;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var promedio;
	var acumulaPositivo;
	var acumulaNegativo;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;
	var mensaje="si";
	var contadorNumero;
	var contadorPositivo;

	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	acumulaNegativo=0;
	acumulaPositivo=0;
	contadorNumero=0;
	contadorPositivo=0;

	while(mensaje=="si")
	{	
		contadorNumero++;
		letra=prompt("ingrese letra");
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(!isNaN(numero) && !(numero>-101 && numero<101))
		{
		numero=prompt("error,ingrese numero valido");
		numero=parseInt(numero);
		}

		if((numero%2)==0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		if(numero>0)
		{
			acumulaPositivo=acumulaPositivo+numero;
			contadorPositivo++;
		}
		else
			if(numero<0)
			{
				acumulaNegativo=acumulaNegativo+numero;
			}
			else
			{
				contadorCeros++;
			}

		if(contadorNumero==1)
		{
			letraMaximo=letra;
			letraMinimo=letra;
			numeroMaximo=numero;
			numeroMinimo=numero;
		}
		else
			if(numero>numeroMaximo)
			{
				letraMaximo=letra;
				numeroMaximo=numero;
			}
			if(numero<numeroMinimo)
			{
				letraMinimo=letra;
				numeroMinimo=numero;
			}

			mensaje=prompt("desea continuar");
	}//fin del while

	document.write("cantidad de numeros pares: "+contadorPares+"<br>");
	document.write("cantidad de numeros impares: "+contadorImpares+"<br>");
	document.write("cantidad de numeros ceros: "+contadorCeros+"<br>");
	
	if(contadorPositivo!=0)
	{
		promedio=acumulaPositivo/contadorPositivo;
		document.write("el promedio de los numeros positivos es: "+promedio+"<br>");
	}
	else
	{
		document.write("el promedio no se puede calcular"+"<br>");
	}

	document.write("suma de todos los numeros negativos: "+acumulaNegativo+"<br>");
	document.write("numero y letra del maximo: "+numeroMaximo+";"+letraMaximo +"<br>");
	document.write("numero y letra del minimo: "+numeroMinimo+";"+letraMinimo);
}//fin de la funcion
