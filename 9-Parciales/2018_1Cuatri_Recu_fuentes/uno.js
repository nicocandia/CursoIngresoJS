
/* function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("ingrese base");
	base=parseInt(base);
	altura=prompt("ingese altura");
	altura=parseInt(altura);

	superficie=base*altura/2;
	perimetro=base*3;

	alert("la superficie es : "+ superficie+ "el perimetro es:"+ perimetro);

}
*/
function mostrar()
{
	var numerouno;
	var numerodos;
	var numerotres;
	var suma;
	var resta;
	var promedio;

	numerouno=prompt("ingrese numero uno");
	numerouno=parseInt(numerouno);

	numerodos=prompt("ingrese numero dos");
	numerodos=parseInt(numerodos);

	numerotres=prompt("ingrese numero tres");
	numerotres=parseInt(numerotres);

	suma=numerouno+numerodos+numerotres;
	promedio=suma/3;
	resta=numerouno-numerodos-numerotres;

	alert("suma:" + suma+" resta: "+ resta+ "promedio:"+ promedio);
}