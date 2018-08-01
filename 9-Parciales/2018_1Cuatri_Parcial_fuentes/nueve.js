function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var mensaje="si";
	var contadortempPares;
	var marcaProducMaspesado;
	var pesoProducMaspesado;
	var pesoProducMenospesado;
	var promedio;
	var contador;
	var acumuladorPeso;
	var acumuladorProducconservamenosCero;

	acumuladorPeso=0;
	acumuladorProducconservamenosCero=0;
	contadortempPares=0;

	while(mensaje!="no")
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

		if((temperatura%2)==0)
		{
			contadortempPares++;
		}

		if(contador==1)
		{
			marcaProducMaspesado=marca;
			pesoProducMaspesado=peso;
			pesoProducMenospesado=peso;
		}
		else
		if(peso>pesoProducMaspesado)
		{
			marcaProducMaspesado=marca;
			pesoProducMaspesado=peso;
		}if (peso<pesoProducMenospesado) 
		{
			pesoProducMenospesado=peso;
		}

		if(temperatura<0)
		{
			acumuladorProducconservamenosCero++;
		}

		acumuladorPeso=acumuladorPeso+peso;
		mensaje=prompt("ingrese no para salir");
	}

	promedio=acumuladorPeso/contador;

	document.write("cantidad de temperaturas pares:"+ contadortempPares+"<br>");
	document.write("marca del producto mas pesado:"+ marcaProducMaspesado+"<br>");
	document.write("cantidad de productos que se conservan a menos de cero grados:"+ acumuladorProducconservamenosCero+"<br>");
	document.write("promedio del peso de todos los productos"+ promedio+"<br>");
	document.write("peso maximo:"+ pesoProducMaspesado+ " peso minimo: "+pesoProducMenospesado+"<br>");


}
