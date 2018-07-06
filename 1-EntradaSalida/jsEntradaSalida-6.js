/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
	numerouno=parseInt(document.getElementById('numeroUno').value);
    numerodos=parseInt(document.getElementById('numeroDos').value);
    var resultado=numerouno+numerodos;
    alert("la suma es: "+resultado);
}

