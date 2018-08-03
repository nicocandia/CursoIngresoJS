function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var cantTempPares;
	var marcaProducmasPesado;
	var promedioPeso;
	var cantProducconservaMenoscero;
	var acumulaPeso;
	var respuesta="si"
	var contador;
	var pesoMaximo;
	var pesoMinimo;

	cantTempPares=0;
	cantProducconservaMenoscero=0;
	acumulaPeso=0;
	contador=0;

	while(respuesta!="no")
	{
		contador++;
		marca=prompt("ingrese marca");
		peso=prompt("ingrese peso");
		peso=parseInt(peso);

		while(!isNaN(peso) && !(peso>0 && peso<101))
		{
			peso=prompt("ingrese peso");
			peso=parseInt(peso);
		}

		temperatura=prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);

		while(!isNaN(temperatura) && !(temperatura>-31 && temperatura<31))
		{
			temperatura=prompt("ingrese temperatura");
			temperatura=parseInt(temperatura);
		}

		if ((temperatura%2)==0) 
		{
			cantTempPares++;
		}

		if(contador==1)
		{
			marcaProducmasPesado=marca;
			pesoMaximo=peso;
			pesoMinimo=peso;
		}
		else
			if (peso>pesoMaximo) 
			{
				pesoMaximo=peso;
				marcaProducmasPesado=marca;
			}
			if (peso<pesoMinimo) 
			{
				pesoMinimo=peso;
			}

		if (temperatura<0) 
		{
			cantProducconservaMenoscero++;
		}

		acumulaPeso=acumulaPeso+peso;
		respuesta=prompt("digite no para salir");
	}//fin del while

	promedioPeso=acumulaPeso/contador;

	document.write("cantidad de temperaturas pares: "+ cantTempPares+ "<br>");
	document.write("marca del producto mas pesado: "+ marcaProducmasPesado+ "<br>");
	document.write("cantidad de productos que se conservan a menos de cero grado: "+ cantProducconservaMenoscero+ "<br>");
	document.write( "promedio de todos los pesos"+ promedioPeso+ "<br>");
	document.write("peso maximo: "+ pesoMaximo+" peso minimo: "+pesoMinimo+ "<br>");


}// fin de la funcion
