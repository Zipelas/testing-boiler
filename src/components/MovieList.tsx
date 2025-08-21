interface MovieListProps {
  movies: string[];
}

function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return <p className='text-center'>Inga filmer hittades.</p>;
  }

  return (
    <ul className='list-disc list-inside space-y-1'>
      {movies.map((movie, idx) => (
        <li key={idx}>{movie}</li>
      ))}
    </ul>
  );
}

export default MovieList;
