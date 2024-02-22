
import MovieCard from '@/components/movie/MovieCard';
import { getTrendingMovies } from '@/lib/requests';
import Image from 'next/image';

const HomePage = async () => {

  const movies = await getTrendingMovies();  
  //console.log(movies);

  return (
    <section className='contenedor py-3'>
      <h1>Trending Movies</h1>   

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3'>
      {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))
      }  </div> 
    </section>
  )
}

export default HomePage
