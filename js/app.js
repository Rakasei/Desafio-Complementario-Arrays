
let nameMovies = ['Lord of the rings', 'Scary Movie', 'Pineapple Express', 'Jack Ass 2']

alert("Bienvenido al listado de peliculas favoritas")

for (let i = 0; i < nameMovies.length; i++) {
   alert(nameMovies[i]);
}

function addMovies(movie){
 nameMovies.push(movie)
alert("Listado de tus peliculas favoritas")
 for (let i = 0; i < nameMovies.length; i++) {
    alert(nameMovies[i]);
 } }
 addMovies(prompt("Podes agregarle una pelicula nueva")) 


