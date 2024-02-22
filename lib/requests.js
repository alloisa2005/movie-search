
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTrendingMovies = async () => {  

  const url = `${BASE_URL}/trending/movie/day?language=es-ES&api_key=${API_KEY}`;  

  const response = await fetch(url);
  const data = await response.json();
  return data.results;    
}

export const getMovieById = async (id) => {
  const url = `${BASE_URL}/movie/${id}?language=es-ES&api_key=${API_KEY}`;  

  const response = await fetch(url);
  const data = await response.json();  
  return data;
}

export const getMovieQuery = async (query) => {
  const url = `${BASE_URL}/search/movie?&api_key=${API_KEY}&query=${query}`;  

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getSimilarMovies = async (id) => {
  const url = `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;  

  const response = await fetch(url);
  const data = await response.json();
  return data;
}