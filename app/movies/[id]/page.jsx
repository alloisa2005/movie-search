import { getMovieById } from '@/lib/requests';
import Image from 'next/image';
import React from 'react'

const MovieDetail = async ({ params }) => {  

  const { id } = params;
  const movie = await getMovieById(id);
  console.log(movie);
  // src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 

  return (
    <section className='absolute top-0 left-0 w-full -z-10'>
      <div className='w-full h-[500px] relative'>
        <Image 
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          width={1920}
          height={1080}
          priority
          className='w-full h-[500px] absolute object-cover'
        />   
        <div className='absolute w-full bottom-12 left-0'>
          <h1 className='text-5xl text-white tracking-wider contenedor'>{movie.title}</h1>
        </div>
      </div>
      
      <div className='contenedor'>
        <p>{movie.overview}</p>
      </div>
    </section>
  )
}

export default MovieDetail