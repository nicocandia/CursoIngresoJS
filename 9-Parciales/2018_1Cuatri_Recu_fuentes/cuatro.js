function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var division;

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
			division=numeroUno/numeroDos;
			alert("division:"+ division);
		}else
		{
			suma=numeroUno+numeroDos;
			alert("suma:"+ suma);
			if (suma<50) 
			{
				alert("la suma es: "+suma+" y es menor a 50");
			}
		}
	}
}
