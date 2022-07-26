
alert("Bienvenido al Servicio de Cálculo de Impuestos de Productos Adquiridos en la Plataforma de Steam (SCIPAPS)")


let pais = prompt("¿En qué país vivís?");

if(pais != null){
pais = pais.toLowerCase();}

 while(pais != "argentina") { 
    alert("Este servicio únicamente sirve para las compras en Steam realizadas desde Argentina");
    pais = prompt("¿En qué país vivís?");
 }

 alert('Bien, ¡SCIPAPS es ideal para vos!');

 function SCIPAPS() {
 let precio = prompt("¿Cuánto sale el producto (en pesos) que queres calcular?")


 alert("El producto con impuestos agregados vale " + precio * 1.75)}

 while (true){
  SCIPAPS()
 }



