import Image from 'next/image'

const MovieCard = ({ movie }) => {
  return (
    <div className='relative rounded-lg overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300'>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        width={500} 
        height={200} 
        className='w-full h-full object-cover brightness-[60%]' />

      <h4 className='absolute top-3 px-4 text-white'>{movie.title}</h4>
    </div>
  )
}

export default MovieCard