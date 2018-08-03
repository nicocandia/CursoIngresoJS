function mostrar()
{
	var nota;
	var sexo;
	var contador;
	var promedio;
	var cantVaronesNotaMayorseis;
	var acumulaNota;
	var notaMasbaja;
	var sexoNotabaja;

	contador=0;
	acumulaNota=0;
	cantVaronesNotaMayorseis=0;
	
	while(contador<5)
	{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(!isNaN(nota) && !(nota>-1 && nota<11))
		{
			nota=prompt("error,ingrese nota");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese sexo")

		while(!(sexo=="f" || sexo=="m"))
		{
			sexo=promp("error,ingrese sexo");
		}
		
		acumulaNota=acumulaNota+nota;

		if(contador==1)
		{
			notaMasbaja=nota;
			sexoNotabaja=sexo;
		}
		else
			if(nota<notaMasbaja)
			{
				notaMasbaja=nota;
				sexoNotabaja=sexo;
			}

		if (sexo=="m" && nota>5) 
		{
			cantVaronesNotaMayorseis++;
		}

		contador++;
	}
		promedio=acumulaNota/contador;

		alert("promedio de las notas totales: "+ promedio+ " ,nota mas baja:"+ notaMasbaja+" sexo: "+ sexoNotabaja+ " ,cantidad de varones con nota mayor o igual a seis:"+ cantVaronesNotaMayorseis);
}
