
 let nameMovies = []


alert("Bienvenido al listado de peliculas favoritas")
if (nameMovies.length === 0){
   alert("¡Aún no tenés ninguna película agregada!")
} else{
for (let i = 0; i < nameMovies.length; i++) {
   alert(nameMovies[i]);
}}

function addMovies(movie){
   if (movie === ""){
        alert("Ingresá una pelí")
        addMovies(prompt("Elegi una película valida (no espacios vacios)")) 
   } else{
nameMovies.push(movie)
if (confirm('¿Querés agregar otra péli?')) {
   addMovies(prompt("Podes agregarle una pelicula nueva"))} }}
     
         
      


while(true){
 addMovies(prompt("Podes agregarle una pelicula nueva")) 
 alert("Mostrando listado de tus peliculas favoritas")
   if (nameMovies.length == 0){
      alert("¡Aún no tenés ninguna película agregada!")
   } else{
   for (let i = 0; i < nameMovies.length; i++) {
      alert(nameMovies[i]);
   }}}




 


 

