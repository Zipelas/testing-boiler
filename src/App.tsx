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
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [displayedMovies, setDisplayedMovies] = useState<string[]>(movies);

  useEffect(() => {
    setDisplayedMovies(movies);
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

      <div className='flex flex-col md:flex-row justify-center p-6 md:space-x-6 space-y-6 md:space-y-0'>
        <div className='w-full md:w-auto flex justify-center md:block'>
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>

        <div className='w-full md:w-auto border-2 rounded-3xl border-[#663399] text-[#663399] font-bold inline-block p-4'>
          <MovieList movies={displayedMovies} />
        </div>
      </div>

      <div className='w-full p-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6'>
          <div className='justify-self-start'>
            <div className='border-2 rounded-3xl border-[#663399] inline-block px-6 py-2'>
              <DayComponent date={new Date()} />
              <DateComponent date={new Date()} />
              <MonthComponent date={new Date()} />
            </div>
          </div>

          <div className='justify-self-center'>
            <ResetButton onReset={handleReset} />
          </div>

          <div className='hidden md:block' />
        </div>
      </div>
    </div>
  );
}

export default App;
