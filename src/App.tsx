import { useEffect, useState } from 'react';
import DateComponent from './components/DateComponent';
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
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-2xl font-bold text-center mb-4 text-[#663399]'>
        Vite + React
      </h1>
      <h2 className='text-2xl font-bold text-center mb-4 text-[#663399]'>
        🎬 Filmlista
      </h2>
      <div className='flex justify-center p-6 space-x-6'>
        <div>
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
        <div className='border-2 rounded-4xl border-[#663399] text-[#663399] font-bold inline-block p-4'>
          <MovieList movies={displayedMovies} />
        </div>
      </div>
      <div className='flex w-full p-6'>
        {/* vänster (datumboxen) */}
        <div className='flex-1'>
          <div className='border-2 rounded-4xl border-[#663399] inline-block px-6 py-2'>
            <DayComponent date={new Date()} />
            <DateComponent date={new Date()} />
            <MonthComponent date={new Date()} />
          </div>
        </div>

        {/* mitten (ResetButton centrerad i sin kolumn) */}
        <div className='flex-1 flex justify-center items-center'>
          <ResetButton onReset={handleReset} />
        </div>

        {/* höger (tom för nu, men kan fyllas med annat senare) */}
        <div className='flex-1'></div>
      </div>
    </div>
  );
}

export default App;
