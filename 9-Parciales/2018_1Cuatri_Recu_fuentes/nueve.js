function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var respuesta="si";
	var contadortempPar;
	var nombreanimalPesado;
	var temperaturaPesado;
	var pesoMaximo;
	var contador;
	var cantidadanimalBajocero;
	var promedio;
	var acumulaPeso;
	var pesomaximoBajocero;
	var pesominimoBajocero;

	contadortempPar=0;
	contador=0;
	cantidadanimalBajocero=0;
	acumulaPeso=0;
	pesomaximoBajocero=0;
	pesominimoBajocero=0;

	while(respuesta!="no")
	{	
		contador++;

		nombre=prompt("ingrese nombre del animal");
		peso=prompt("ingrese peso del animal");
		peso=parseInt(peso);
		
		while(!isNaN(peso) && !(peso>0 && peso<1001))
		{
			peso=prompt("ingrese peso del animal");
			peso=parseInt(peso);
		}

		temperatura=prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);
		
		while(!isNaN(temperatura) && !(temperatura>-31 && temperatura<31))
		{
			temperatura=prompt("ingrese temperatura");
			temperatura=parseInt(temperatura);
		}

		if((temperatura%2)==0)
		{
			contadortempPar++;
		}

		if(contador==1)
		{
			nombreanimalPesado=nombre;
			temperaturaPesado=temperatura;
			pesoMaximo=peso;

		}
		else
		{
			if (peso>pesoMaximo) 
			{
				pesoMaximo=peso;
				nombreanimalPesado=nombre;
				temperaturaPesado=temperatura;
			}
		}

		if(temperatura<0 && contador==1)
		{
			cantidadanimalBajocero++;

			}
		}



		respuesta=prompt("digite no para salir");
		
		acumulaPeso=acumulaPeso+peso;
		
	}
	
	promedio=acumulaPeso/contador;
	
	document.write("la cantidad de temperaturas pares es : "+contadortempPar+"<br>");
	document.write("nombre del animal mas pesado "+nombreanimalPesado+ " temperatura animal mas pesado "+ temperaturaPesado+"<br>");
	document.write("cantidad de animales que viven a menos de cero grados: "+cantidadanimalBajocero+"<br>");
	document.write("el promedio de peso de todos los animales es: "+promedio+"<br>")
	document.write("el peso maximo del animal que vive bajo cero es: "+pesomaximoBajocero+ " el peso minimo del animal que vive bajo cero es: "+ pesominimoBajocero);

	

}
