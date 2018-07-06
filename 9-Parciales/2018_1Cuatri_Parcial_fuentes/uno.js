
function mostrar()
{
	var largo;
	var ancho;
	largo=prompt("ingrese largo"); 
	ancho=prompt("ingrese ancho");
    var largonumero=parseInt(largo);
    var anchonumero=parseInt(ancho);
  	var resultado=2*largonumero+2*anchonumero
  	alert("el perimetro es: "+resultado);
}
