
 let nombresPeliculas= []


alert("Bienvenido al listado de peliculas favoritas")
if (nombresPeliculas.length === 0){
   alert("¡Aún no tenés ninguna película agregada!")
} else{
for (let i = 0; i < nombresPeliculas.length; i++) {
   alert(nombresPeliculas[i]);
}}

function agregarPeliculas(pelicula){
   if (pelicula === ""){
        alert("Ingresá una pelí")
        agregarPeliculas(prompt("Elegi una película valida (no espacios vacios)")) 
   } else{
nombresPeliculas.push(pelicula)
if (confirm('¿Querés agregar otra péli?')) {
   agregarPeliculas(prompt("Podes agregarle una pelicula nueva"))} }}
                
while(true){
 agregarPeliculas(prompt("Podes agregarle una pelicula nueva")) 
 alert("Mostrando listado de tus peliculas favoritas")
   if (nombresPeliculas.length == 0){
      alert("¡Aún no tenés ninguna película agregada!")
   } else{
   for (let i = 0; i < nombresPeliculas.length; i++) {
      alert(nombresPeliculas[i]);
   }}}





 


 

