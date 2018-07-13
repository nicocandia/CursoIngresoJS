function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;

	numeroUno=prompt("ingrese primer numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese numero dos");
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos) 
	{
		alert(numeroUno+""+numeroDos)
	}else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			alert("resta:"+ resta);
		}else
		{
			suma=numeroUno+numeroDos;
			alert("suma:"+ suma);
			if (suma>10) 
			{
				alert("la suma es: "+suma+" y supero el 10");
			}
		}
	}
}


