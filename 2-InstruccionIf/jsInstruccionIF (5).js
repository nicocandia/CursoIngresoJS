function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if (edad<12 || edad>17) 
	{
		alert("la persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN