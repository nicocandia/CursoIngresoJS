function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 dias");
			break;
		
		case "Noviembre":
		case "Abril":
		case "Junio":
		case "Septiembre":
			alert("tiene 30 dias");
			break;

	default: 
		alert("tiene 31 dias");
   	}
}//FIN DE LA FUNCIÓN