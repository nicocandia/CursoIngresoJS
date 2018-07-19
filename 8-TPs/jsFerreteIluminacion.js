/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


var precioBruto;
var descuento;
var precioFinal;
var cantLamparas;
var marca;
var impuesto;

function CalcularPrecio () 
{
 	cantLamparas=document.getElementById('Cantidad').value;
 	cantLamparas=parseInt(cantLamparas);

 	descuento=0;
 	descuento=parseInt(descuento);

 	precioBruto=cantLamparas*35;
	marca=document.getElementById('Marca').value;

	switch(cantLamparas)
 	{
 		case 1:
 		case 2:
 			descuento;
 			break;

 		case 3:
 			if (marca=="ArgentinaLuz") 
 			{
 				descuento=precioBruto*(0.15);

 			}else
 			{
 				if (marca=="FelipeLamparas") 
 				{
 					descuento=precioBruto*(0.10);
 				}else
 				{
 					descuento=precioBruto*(0.05);
 				}
 			}
 			break;

 		case 4:
 			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 			{
 				descuento=precioBruto*(0.25);
			}
			else
			{
				descuento=precioBruto*(0.20);
			}
 			break;
 		
 		case 5:
 			if(marca=="ArgentinaLuz")
 			{
 				descuento=precioBruto*(0.40);
 			}
 			else
 			{
 				descuento=precioBruto*(0.30);
 			}
 			break;
 		
 		default:
 			descuento=precioBruto*(0.50);
 	}

precioFinal=precioBruto-descuento;

if (precioFinal>120) 
{
	impuesto=0.1*precioBruto;
	precioFinal=precioFinal+impuesto;
	alert("usted pago "+impuesto+" de IIBB");  
}
document.getElementById('precioDescuento').value=precioFinal;
}
