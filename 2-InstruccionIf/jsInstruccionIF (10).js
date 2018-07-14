function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;
 	numerorandom=Math.floor(Math.random()*10);  
	numerorandom=parseInt(numerorandom);
	
	if (numerorandom==9 || numerorandom==10) 
	{
		alert("Excelente");
	}
	else
	{
		if(numerorandom>4)
		{
			alert("APROBO")
		}
		else
		{
			alert("Vamos la proxima se puede");
		}
	}


}//FIN DE LA FUNCIÓN