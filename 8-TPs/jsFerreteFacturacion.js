/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);

	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);

	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	suma=PrecioUno+PrecioDos+PrecioTres;
	alert("suma: "+ suma);

}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var promedio;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);

	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);

	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	promedio=(PrecioUno+PrecioDos+PrecioTres)/3;
	alert("promedio: "+ promedio);
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	var iva;
	var preciofinal;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);

	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);

	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	suma=PrecioUno+PrecioDos+PrecioTres;
	iva=suma*21/100;
	preciofinal=suma+iva;
	alert("precio final es de: "+preciofinal);

}