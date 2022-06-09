let pagina = 1;
const btnAnterior=document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente');
btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000){
         pagina += 1;
        obtenerPeliculas()
    } else {
        alert('Estas la ultima pagina')
    }
   
})
btnAnterior.addEventListener('click', () => {
  if (pagina > 1){
         pagina -= 1;
        obtenerPeliculas()
  } else {
      alert('Estas la primera pagina')
    }
})

obtenerPeliculas = async () => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?', {
            params: {
                // api_key: 'c776f75773815e58c74ed8367341702b',
                language: 'es-MX',
                page:`${pagina}`
            },
            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzc2Zjc1NzczODE1ZTU4Yzc0ZWQ4MzY3MzQxNzAyYiIsInN1YiI6IjYyNzJiYTQ4Y2FhY2EyMDA2NjdkZjc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YMEfQGuzR836cm13hVikNRvrXbtELp6X5SaFE-mtyuA'
            }
           
           
           
        }
        )
       

        let peliculas = '';
        await res.data.results.forEach(pelicula => {
            peliculas += `
            <div class='pelicula'>
            <img class='poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'
            <h3 class='titulo'>${pelicula.title}</h3>
            </div>`
        })
        document.getElementById('contenedor').innerHTML = peliculas;
     
        
        
        console.log(res.data.results[1].title)
    } catch (e) {
        console.log(e)
    }
 
}

obtenerPeliculas()
