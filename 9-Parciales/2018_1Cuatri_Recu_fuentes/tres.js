function mostrar()
{
	var precio;
	var porcentajedescuento;
	var descuento;
	var preciodescuento;
	var iva;
	var preciofinal;

	precio=prompt("ingrese precio");
	precio=parseInt(precio);
	
	porcentajedescuento=prompt("ingrese porcentaje descuento");
	porcentajedescuento=parseInt(porcentajedescuento);
	
	descuento=precio*porcentajedescuento/100;
	preciodescuento=precio-descuento;
	iva=preciodescuento*21/100;
	preciofinal=preciodescuento+iva;

	alert("descuento:"+ descuento+" ,precio con descuento: "+preciodescuento+" iva:"+ iva);
	document.getElementById('elPrecioFinal').value=preciofinal;
}
