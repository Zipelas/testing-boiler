import { useEffect, useState } from 'react';
import DatePicker from './components/DatePicker';
import DayComponent from './components/Day';
import MonthComponent from './components/Month';
import MovieList from './components/MovieList';
import ResetButton from './components/ResetButton';
import { movies } from './movies';
import { getRandomMovies } from './utils';

function App() {
  const today = new Date().toISOString().split('T')[0]; // dagens datum (yyyy-mm-dd)

  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [displayedMovies, setDisplayedMovies] = useState<string[]>(movies);

  useEffect(() => {
    setDisplayedMovies(movies); // visa alla filmer vid start
  }, []);

  function handleDateChange(date: string) {
    setSelectedDate(date);
    setDisplayedMovies(getRandomMovies(movies, 3));
  }

  function handleReset() {
    setSelectedDate(today);
    setDisplayedMovies(movies);
  }

  return (
    <div className='max-w-md mx-auto p-4'>
      <h1 className='text-2xl font-bold text-center mb-4'>🎬 Filmlista</h1>
      <DatePicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      <MovieList movies={displayedMovies} />
      <ResetButton onReset={handleReset} />
      <div className='bg-pink-300 text-[#663399] text-6xl text-center p-4'>
        <MonthComponent date={new Date()} />
      </div>
      <div className='bg-pink-300 text-[#663399] text-6xl text-center p-4'>
        <DayComponent date={new Date()} />
      </div>
    </div>
  );
}

export default App;
