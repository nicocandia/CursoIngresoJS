/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Largo;
	var Ancho;
	var perimetro;
	var cantidad;
	
	Largo=document.getElementById('Largo').value;
	Largo=parseInt(Largo);

	Ancho=document.getElementById('Ancho').value;
	Ancho=parseInt(Ancho);

	perimetro=2*Largo+2*Ancho;
	cantidad=perimetro*3;
	
	alert("se debe comprar :"+cantidad +"  de alambre");
	



}
function Circulo () 
{
	var Radio;
	var perimetro;
	var cantidad;

	Radio=document.getElementById('Radio').value;
	Radio=parseInt(Radio);

	perimetro=2*(3.14)*Radio;
	cantidad=perimetro*3;
	
	alert("se debe comprar :"+cantidad +"  de alambre");
	
}
function Materiales () 
{
	var Largo;
	var Ancho;
	var superficie;
	var bolsacemento;
	var bolsacal;

	Largo=document.getElementById('Largo').value;
	Largo=parseInt(Largo);

	Ancho=document.getElementById('Ancho').value;
	Ancho=parseInt(Ancho);

	superficie=Largo*Ancho;
	bolsacemento=2*superficie;
	bolsacal=3*superficie;

	alert("se necesitan "+bolsacemento+" bolsas de cemento "+" y "+bolsacal+" bolsas de cal");
}