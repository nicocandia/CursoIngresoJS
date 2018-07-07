function mostrar()
{
	var precio;
	var porcentaje;
	var preciofinal;

	precio=prompt("ingrese precio");
	precio=parseInt(precio);

	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

	preciofinal=precio-precio*porcentaje/100;

	document.getElementById('elPrecioFinal').value=preciofinal;	
}
