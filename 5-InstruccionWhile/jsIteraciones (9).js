function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';
	//maximo=-999999;
	//minimo=999999;
	
	while(respuesta!='no')
	{
		contador++;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(contador==1 )
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if (numeroIngresado<minimo) 
			{
				minimo=numeroIngresado;
			}
		}
	respuesta=prompt("ingrese no para salir");
	
	}
	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN