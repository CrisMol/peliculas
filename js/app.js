let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina +=1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -=1;
		cargarPeliculas();
	}
});


const cargarPeliculas = async() => {

	try {
		let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=82829395e41546bf81819dcb39f032d0&language=es-M&page=${pagina}`)//proporciona una interfaz javascript para acceder y manipular partes del canal http

		if(respuesta.status === 200){
			//fecth devuelve una promesa, hacemos peticion y debemos esperar a que finalice
			//con await le decimos, quiero que acabes la peticion, away solo va dentro de funciones asincronas, por eso async
			if(respuesta.status === 200){
				let datos = await respuesta.json(); //json es asincrono, por eso await
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					</div>
					<h1>${pelicula.title}</h1>`
			});

			document.getElementById('contenedor').innerHTML = peliculas;
			}
		}

	} catch(error){

	}
}

cargarPeliculas();