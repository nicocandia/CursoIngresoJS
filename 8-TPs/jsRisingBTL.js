/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
	
	while(!(edad>17 && edad<91))
	{
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
	}
		document.getElementById('Edad').value=edad;

	while(!(sexo=="M" || sexo=="F"))
	{
		sexo=prompt("ingrese sexo");
	}
		document.getElementById('Sexo').value=sexo;

	while(!(estadoCivil==1 || estadoCivil==2 || estadoCivil==3 || estadoCivil==4))
	{
		estadoCivil=prompt("ingrese numero de estado civil");
		estadoCivil=parseInt(estadoCivil);
	}
		document.getElementById('EstadoCivil').value=estadoCivil;

	while(!(sueldoBruto>8000))
	{
		sueldoBruto=prompt("ingrese sueldo bruto");
		sueldoBruto=parseInt(sueldoBruto);
	}
		document.getElementById('Sueldo').value=sueldoBruto;

	while(!(numeroLegajo>999 && numeroLegajo<10000))
	{
		numeroLegajo=prompt("ingrese numero de legajo");
		numeroLegajo=parseInt(numeroLegajo);
	}
		document.getElementById('Legajo').value=numeroLegajo;

	while (!(nacionalidad=="A" || nacionalidad=="E" || nacionalidad=="N"))
	{
		nacionalidad=prompt("ingrese nacionalidad");
	}
		document.getElementById('Nacionalidad').value=nacionalidad;
}

