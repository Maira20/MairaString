//var cadena1="carro bmw 2019"
// var cadena2="nuevo"
// console.log(cadena1.length)
// console.log(cadena1.charAt(0))
// console.log(cadena1.charAt(1))
// console.log(cadena1.charAt(2))
// console.log(cadena1.charAt(3))
// console.log(cadena1.charAt(4))

//este sirve para mostrar en minuscula
// console.log(cadena1.toLowerCase())
//este sirve para mostrar en mayuscula
// console.log(cadena1.toUpperCase())

// var cadenanueva=cadena1.concat(cadena2)
// console.log(cadenanueva)

//este sirve para mostrar si es falso o verdadero
// console.log(cadena1.endsWith("a"))
//este sirve para mostrar si es falso o verdadero
// console.log(cadena1.includes("rp"))

//este muestra en que posicion se encuentra la palabra
// console.log(cadena1.indexOf("bmw"))
//esto es para mostrar o hasta la 5 la palabra
//console.log(cadena1.slice(0,5))

///////////// var cadena1="carro bmw"

// esto selecciona los caracteres del arreglo
// console.log(cadena1.substring(4,6))
//esto es para convertir un arreglo en un array con un separador
//console.log(cadena1.split(" "))





// var arreglopersonas=[

// {
// 	nombre:"camila",
// 	apellido:"torres",
// 	edad:15,
// 	cc:123456,
// 	peliculaFavorita:"era de hielo",
// 	genero:"animada"
// },
// {
// 	nombre:"celeste",
// 	apellido:"sanchez",
// 	edad:25,
// 	cc:12345,
// 	peliculaFavorita:"titanic",
// 	genero:"drama"
// },
// {
// 	nombre:"may",
// 	apellido:"cardona",
// 	edad:31,
// 	cc:1234,
// 	peliculaFavorita:"tres metros bajo el cielo",
// 	genero:"romantica"
// }
// ]
// for (var i=0; i< arreglopersonas.length;i++)
//  {
// 	alert(arreglopersonas[i].nombre+" "+arreglopersonas[i].edad+" "+arreglopersonas[i].genero)

// 	if (arreglopersonas[i].edad<18) 
// 	{
// 	alert("te recomiendo que veas peliculas de disney:")
//     alert("tierra de osos,aladin,dumbo,tarzan")
// }

// if (arreglopersonas[i].edad >18) 
// 	{
// 		alert("te recomiendo que veas peliculas de terror")
//     alert("annabelle,midsommar,escape")
// 	}
	
//     if (arreglopersona[i].edad>30){
//     alert("te recomiendo que veas pelicular de comedia romantica")
//     alert("la propuesta,loco y estupido amor,mi primer amor")
//     }
// }
//27/06/2019...........
//METODO PARA ARREGLOS

//estamos manejando el 'dom'
// var cadena1="carro bmw"
// document.getElementById('ejercicioArray').innerHTML=cadena1


// var array1=[
// "bateria",
// "bajo",
// "guitarra",
// "saxofon",
// "violin"
// ]
// var textoarray=array1.toString
// document.getElementById('ejercicioArray').innerHTML=array1.toString()

//Metodo join
// document.getElementById('ejercicioArray').innerHTML=array1.join("+")

//Metodo pop es para quitar 
// document.getElementById('ejercicioArray').innerHTML=array1.pop()
// console.log(array1)

// document.getElementById('ejercicioArray').innerHTML=array1.push("flauta")
// console.log(array1)

var array2="APRENDIZ"
separador=""
arregloDeSubCadenas=array2.split(separador);


document.getElementById('ejercicioArray').innerHTML=array2.toLowerCase()+"  "+"sena"
document.getElementById('ejercicioArray2').innerHTML=array2.split(separador).join("+");
document.getElementById('ejercicioArray3').innerHTML=array2.split(separador).reverse("").join("");

{

}

 
