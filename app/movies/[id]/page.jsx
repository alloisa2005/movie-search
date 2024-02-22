import { getMovieById } from '@/lib/requests';
import Image from 'next/image';
import React from 'react'

const MovieDetail = async ({ params }) => {  

  const { id } = params;
  const movie = await getMovieById(id);
  console.log(movie);

  return (
    <section className='absolute top-0 -z-10 w-full h-[460px]'>

      <Image 
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}                        
        priority
        width={1920}         
        height={400}
        className='w-full h-full object-cover brightness-[60%]'
      />

      <div className=" absolute left-0 bottom-4 w-full">
        <div className='contenedor'>
          <h1 className='text-gray-200 tracking-widest'>{movie.title}</h1>
        </div>
      </div>
      
    </section>
  )
}

export default MovieDetail