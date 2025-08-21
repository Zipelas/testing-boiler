import CounterButton from './components/CounterButton';

import DayComponent from './components/Day';
import MonthComponent from './components/Month';

function App() {
  return (
    <>
      <div>
        {/* <h1>Vite + React</h1>

        <CounterButton /> */}
      </div>
      <div className='bg-pink-300 text-[#663399] text-6xl text-center p-4'>
        <MonthComponent date={new Date()} />
      </div>
      <div className='bg-pink-300 text-[#663399] text-6xl text-center p-4'>
        <DayComponent date={new Date()} />
      </div>
      <div>
        <div>
          <DatePicker
            selectedDate={new Date().toISOString().split('T')[0]}
            onDateChange={(date) => date}
          />
        </div>
      </div>
    </>
  );
}

export default App;
