import { getMovieById } from '@/lib/requests';
import Image from 'next/image';
import React from 'react'

const MovieDetail = async ({ params }) => {  

  const { id } = params;
  const movie = await getMovieById(id);
  console.log(movie);

  return (
    <section className='relative w-full h-[400px] bg-red-300'>
      <Image 
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}                        
        priority
        width={1920}         
        height={400}
        className='w-full h-full object-cover'
      />
    </section>
  )
}

export default MovieDetail