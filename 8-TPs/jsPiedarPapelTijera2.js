var eleccionMaquina;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var ContadorDeEmpates=0;
var mensaje;
var GanadasBox;
var PerdidasBox;
var EmpatadasBox;

function comenzar()
{

	eleccionMaquina=Math.floor(Math.random() * 3)+1;
	eleccionMaquina=parseInt(eleccionMaquina);

	GanadasBox=document.getElementById('ganadas');
	PerdidasBox=document.getElementById('perdidas');
	EmpatadasBox=document.getElementById('empatadas');

	
}//FIN DE LA FUNCIÓN

function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			ContadorDeEmpates++;
			mensaje="usted empato";
			break;

		case 2:
			ContadorDePerdidas++;
			mensaje="usted perdio";
			break;

		case 3:
			ContadorDeGanadas++;
			mensaje="usted gano";
			break;
	}
	alert(mensaje);
	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function papel()
{
	switch(eleccionMaquina)
	{
		case 1:
			ContadorDeGanadas++;
			mensaje="usted gano";
			break;

		case 2:
			ContadorDeEmpates++;
			mensaje="usted empato";
			break;

		case 3:
			ContadorDePerdidas++;
			mensaje="usted perdio";
			break;
	}
	alert(mensaje);
	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
			ContadorDePerdidas++;
			mensaje="usted perdio";
			break;

		case 2:
			ContadorDeGanadas++;
			mensaje="usted gano";
			break;

		case 3:
			ContadorDeEmpates++;
			mensaje="usted empato";
			break;
	}
	alert(mensaje);
	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	GanadasBox.value=ContadorDeGanadas;
	PerdidasBox.value=ContadorDePerdidas;
	EmpatadasBox.value=ContadorDeEmpates;
}